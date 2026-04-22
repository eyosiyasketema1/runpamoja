import { useState, useEffect } from 'react';
import { pamojaData } from './data';
import { Nav } from './components/Ui';
import { HeroBold, HeroConservative, HeroEditorial } from './components/Heroes';
import { WhatIs, Vision, Conferences, Objectives, Speakers, History, FAQ, RegisterBand, Footer } from './components/Sections';
import { ArisePortraits } from './components/ArisePortraits';
import { Agenda } from './components/Agenda';
import { RegisterModal } from './components/Register';
import { Testimonies, Venue } from './components/Testimonies';
import { Partners } from './components/Partners';
import './components/AfricaMap';

const TWEAKS_DEFAULTS = {
  heroVariant: "bold",
  accentColor: "#8DCF3D",
};

export default function App() {
  const data = pamojaData;
  const [tweaks, setTweaks] = useState(TWEAKS_DEFAULTS);
  const [tweaksActive, setTweaksActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);;

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const d = e.data || {};
      if (d.type === "__activate_edit_mode") setTweaksActive(true);
      if (d.type === "__deactivate_edit_mode") setTweaksActive(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const updateTweak = (key: string, value: unknown) => {
    setTweaks((prev) => {
      const next = { ...prev, [key]: value };
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: value } }, "*");
      return next;
    });
  };

  const smoothScrollTo = (id: string) => {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const accent = tweaks.accentColor;

  const onRegister = () => {
    setModalOpen(true);
  };

  const heroVariantMap: { [key: string]: typeof HeroBold } = {
    "bold": HeroBold,
    "conservative": HeroConservative,
    "editorial": HeroEditorial,
  };
  const HeroComponent = heroVariantMap[tweaks.heroVariant] || HeroBold;

  // Setup scroll-reveal IntersectionObserver
  useEffect(() => {
    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          io.unobserve(e.target);
        }
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    const scan = () => {
      document.querySelectorAll("section").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        const isFirst = el === document.querySelector("section");
        if (isFirst) { el.classList.add("in-view"); return; }
        io.observe(el);
      });
    };

    const kick = () => { scan(); setTimeout(scan, 200); setTimeout(scan, 800); };
    if (document.readyState === "complete" || document.readyState === "interactive") kick();
    else document.addEventListener("DOMContentLoaded", kick);

    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <Nav accent={accent} onRegister={onRegister} sections={data.nav} onNavClick={smoothScrollTo} />
      <HeroComponent data={data} accent={accent} onRegister={onRegister} />
      <WhatIs data={data} accent={accent} />
      <Vision data={data} accent={accent} />
      <ArisePortraits data={data} accent={accent} />
      <Conferences data={data} accent={accent} onRegister={onRegister} />
      <Objectives data={data} accent={accent} />
      <Agenda data={data} accent={accent} />
      <Speakers data={data} accent={accent} />
      <History data={data} accent={accent} />
      <Testimonies data={data} accent={accent} />
      <Venue data={data} accent={accent} />
      <Partners data={data} accent={accent} />
      <FAQ data={data} accent={accent} />
      <RegisterBand data={data} accent={accent} onRegister={onRegister} />
      <Footer data={data} accent={accent} onNavClick={smoothScrollTo} />
      {modalOpen && <RegisterModal open={modalOpen} onClose={() => setModalOpen(false)} accent={accent} data={data} />}
      {tweaksActive && <TweaksPanel tweaks={tweaks} onChange={updateTweak} />}
    </>
  );
}


interface TweaksPanelProps {
  tweaks: typeof TWEAKS_DEFAULTS;
  onChange: (key: string, value: unknown) => void;
}

function TweaksPanel({ tweaks, onChange }: TweaksPanelProps) {
  const accents = [
    { name: "Lime", val: "#8DCF3D" },
    { name: "Leaf", val: "#5C8727" },
    { name: "Orange", val: "#EA7F1D" },
    { name: "Cream", val: "#EEFFD7" },
    { name: "Gold", val: "#E6B422" },
  ];
  return (
    <div style={{ position:"fixed", right: 24, bottom: 24, zIndex: 200, width: 300, padding: 20, borderRadius: 18, background:"rgba(10,16,2,.94)", color:"#EEFFD7", border:"1px solid rgba(238,255,215,.15)", backdropFilter:"blur(14px)", boxShadow:"0 30px 60px rgba(0,0,0,.5)", fontFamily:"Montserrat, sans-serif" }}>
      <div style={{ fontSize: 11, letterSpacing:"0.22em", fontWeight: 700, color:"#8DCF3D", textTransform:"uppercase", marginBottom: 16 }}>Tweaks</div>
      <div style={{ fontSize: 11, letterSpacing:"0.14em", fontWeight: 600, color:"rgba(238,255,215,.55)", textTransform:"uppercase", marginBottom: 10 }}>Accent</div>
      <div style={{ display:"flex", gap: 8, flexWrap:"wrap" }}>
        {accents.map(a => (
          <button key={a.val} onClick={() => onChange("accentColor", a.val)} title={a.name} style={{ width: 36, height: 36, borderRadius: 10, cursor:"pointer", border: tweaks.accentColor === a.val ? "2px solid #fff" : "2px solid rgba(238,255,215,.12)", background: a.val, boxShadow: tweaks.accentColor === a.val ? "0 0 0 3px rgba(141,207,61,.3)" : "none" }} />
        ))}
      </div>
    </div>
  );
}
