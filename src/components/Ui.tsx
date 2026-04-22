import { useState, useEffect, CSSProperties } from 'react';

// All icons
export function IconArrow({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>;
}

export function IconPin({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}

export function IconCalendar({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>;
}

export function IconPlus({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>;
}

export function IconX({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>;
}

export function IconCheck({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l4 4 10-10" /></svg>;
}

export function IconChev({ size = 18, color = "currentColor", dir = "down" }: { size?: number; color?: string; dir?: string }) {
  const rot = { down: 0, up: 180, right: -90, left: 90 }[dir || 'down'] || 0;
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transform:`rotate(${rot}deg)`}}><path d="M6 9l6 6 6-6"/></svg>;
}

export function IconUser({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
}

export function IconCard({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></svg>;
}

export function IconCamera({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>;
}

// Primitives
export function DotGrid({ color = "rgba(141,207,61,.18)", size = 2, gap = 18, style }: { color?: string; size?: number; gap?: number; style?: CSSProperties }) {
  return <div style={{position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: `radial-gradient(${color} ${size}px, transparent ${size + 0.5}px)`, backgroundSize: `${gap}px ${gap}px`, ...style,}} />;
}

export function Placeholder({ label, accent = "rgb(141,207,61)", dark = false, height = "100%" }: { label: string; accent?: string; dark?: boolean; height?: string }) {
  const bg = dark ? "rgba(255,255,255,.04)" : "rgba(34,53,10,.04)";
  const stripe = dark ? "rgba(255,255,255,.06)" : "rgba(34,53,10,.05)";
  const text = dark ? "rgba(238,255,215,.72)" : "rgba(34,53,10,.55)";
  return <div style={{position: "relative", width: "100%", height, backgroundImage: `repeating-linear-gradient(135deg, ${bg} 0 14px, ${stripe} 14px 28px)`, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",}}><div style={{ width: 10, height: 10, borderRadius: 10, background: accent, position: "absolute", top: 14, left: 14 }} /><span style={{fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: text,}}>{label}</span></div>;
}

export function SpeakerPortrait({ hue = 88 }: { name?: string; hue?: number }) {
  return <div style={{position: "absolute", inset: 0, background: `radial-gradient(120% 90% at 30% 20%, oklch(0.78 0.12 ${hue}) 0%, oklch(0.52 0.14 ${hue}) 45%, oklch(0.28 0.08 ${hue - 15}) 100%)`, overflow: "hidden",}}><div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 35%, rgba(255,255,255,.18) 0%, transparent 55%)" }} /><span style={{position:"absolute", left:"50%", bottom: 22, transform:"translateX(-50%)", fontFamily: "'Fraunces', 'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 42, fontWeight: 500, color: "rgba(255,255,255,.82)", lineHeight: 1, letterSpacing: 1,}}>TBA</span></div>;
}

interface NavProps {
  accent: string;
  onRegister: () => void;
  sections: Array<{ id: string; label: string }>;
  onNavClick: (id: string) => void;
}

export function Nav({ accent, onRegister, sections, onNavClick }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) current = s.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <header style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 40, padding: scrolled ? "14px 40px" : "24px 40px", transition: "all .35s cubic-bezier(.2,.8,.2,1)", background: scrolled ? "rgba(10,16,2,.86)" : "transparent", backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none", WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none" as any, borderBottom: scrolled ? "1px solid rgba(238,255,215,.08)" : "1px solid transparent",}}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 40 }}>
        <a href="#top" onClick={(e)=>{e.preventDefault(); onNavClick("top");}} style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
          <img src="/assets/pamoja_logo.png" alt="PAMOJA" style={{ height: 24, width: "auto", display: "block" }} />
          <span style={{color: "rgba(238,255,215,.55)", fontFamily: "Montserrat", fontWeight: 600, fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", paddingLeft: 14, borderLeft: "1px solid rgba(238,255,215,.18)",}}>Africa V · 2028</span>
        </a>
        <nav style={{ display: "flex", gap: 4, marginLeft: "auto", alignItems: "center" }} className="pamoja-nav-links">
          {sections.map((s) => {
            const isActive = active === s.id;
            return <a key={s.id} href={`#${s.id}`} onClick={(e) => { e.preventDefault(); onNavClick(s.id); }} style={{padding: "10px 14px", borderRadius: 999, textDecoration: "none", fontFamily: "Montserrat", fontWeight: 500, fontSize: 13, color: isActive ? "#22350A" : "#EEFFD7", background: isActive ? accent : "transparent", transition: "all .25s ease",}}>{s.label}</a>;
          })}
        </nav>
        <button onClick={onRegister} style={{border: 0, cursor: "pointer", padding: "12px 22px", borderRadius: 14, background: "#EA7F1D", color: "#fff", fontFamily: "Montserrat", fontWeight: 700, fontSize: 14, letterSpacing: "0.04em", display: "inline-flex", alignItems: "center", gap: 10, boxShadow: "0 10px 30px -12px rgba(234,127,29,.6)", textTransform: "uppercase",}}>Register Now <IconArrow size={16} /></button>
      </div>
      <style>{`@media (max-width: 1050px) { .pamoja-nav-links { display: none !important; } }`}</style>
    </header>
  );
}
