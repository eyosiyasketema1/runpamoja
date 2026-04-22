import { useEffect } from 'react';
import { PamojaData } from '../data';
import { IconArrow, DotGrid } from './Ui';

interface HeroProps {
  accent: string;
  onRegister: () => void;
  data: PamojaData;
}

export function HeroConservative({ accent, onRegister, data }: HeroProps) {
  return (
    <section id="top" style={{
      position: "relative", minHeight: "100vh",
      display: "grid", gridTemplateColumns: "1.1fr 1fr",
      background: "#0A1002", color: "#EEFFD7", overflow: "hidden",
    } as React.CSSProperties} className="pmj-hero-conservative">
      <DotGrid color="rgba(141,207,61,.08)" />
      <div style={{ position: "relative", padding: "160px 80px 80px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
            <span style={{ width: 44, height: 1, background: accent }} />
            <span style={{ fontFamily: "Montserrat", fontSize: 12, fontWeight: 600, letterSpacing: "0.24em", color: accent, textTransform: "uppercase" }}>
              {data.event.org}
            </span>
          </div>
          <h1 style={{
            fontFamily: "Montserrat", fontWeight: 700, fontSize: 104, lineHeight: 0.92, letterSpacing: -3,
            color: "#EEFFD7", margin: 0, textWrap: "balance",
          }}>
            PAMOJA<br/>
            <span style={{ color: accent }}>Africa V</span><br/>
            <span style={{ fontFamily: "'Fraunces', serif", fontStyle:"italic", fontWeight: 300 }}>2028</span>
          </h1>
          <p style={{
            fontFamily: "Inter, Montserrat, sans-serif", fontWeight: 400, fontSize: 22, lineHeight: 1.4,
            color: "rgba(238,255,215,.82)", maxWidth: 520, marginTop: 32,
          }}>
            Raising a new generation of leaders for a new Africa.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 40 }}>
            <button onClick={onRegister} style={{
              border: 0, cursor: "pointer", padding: "18px 30px", borderRadius: 14,
              background: "#EA7F1D", color: "#fff",
              fontFamily: "Montserrat", fontWeight: 700, fontSize: 15, letterSpacing: "0.06em",
              display: "inline-flex", alignItems: "center", gap: 12, textTransform: "uppercase",
              boxShadow: "0 20px 50px -16px rgba(234,127,29,.6)",
            }}>Register Now <IconArrow /></button>
            <a href="#vision" style={{
              padding: "18px 30px", borderRadius: 14, textDecoration: "none",
              border: "1px solid rgba(238,255,215,.22)", color: "#EEFFD7",
              fontFamily: "Montserrat", fontWeight: 600, fontSize: 15, letterSpacing: "0.04em",
              display: "inline-flex", alignItems: "center", gap: 12, textTransform: "uppercase",
            }}>Learn More</a>
          </div>
        </div>
        <div style={{ display: "flex", gap: 48, paddingTop: 40, borderTop: "1px solid rgba(238,255,215,.1)", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span>📅</span>
            <div>
              <div style={{ fontSize: 11, letterSpacing: "0.16em", color: "rgba(238,255,215,.5)", fontFamily: "Montserrat", fontWeight: 600, textTransform: "uppercase", marginBottom: 4 }}>When</div>
              <div style={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 17 }}>{data.event.datesShort}</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span>📍</span>
            <div>
              <div style={{ fontSize: 11, letterSpacing: "0.16em", color: "rgba(238,255,215,.5)", fontFamily: "Montserrat", fontWeight: 600, textTransform: "uppercase", marginBottom: 4 }}>Where</div>
              <div style={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 17 }}>{data.event.location}</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "url(/assets/venue_hero.jpg) center / cover no-repeat" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0A1002 0%, rgba(10,16,2,0) 35%), linear-gradient(180deg, rgba(10,16,2,.3) 0%, rgba(10,16,2,.5) 100%)" }} />
        <div style={{
          position: "absolute", right: 40, bottom: 40,
          padding: "14px 18px", borderRadius: 12,
          background: "rgba(10,16,2,.7)", backdropFilter: "blur(10px)",
          border: "1px solid rgba(238,255,215,.18)",
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <span>📍</span>
          <span style={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 13, color: "#EEFFD7" }}>{data.event.venue}</span>
        </div>
      </div>
    </section>
  );
}

export function HeroEditorial({ accent, onRegister, data }: HeroProps) {
  return (
    <section id="top" style={{
      position: "relative", minHeight: "100vh", padding: "160px 80px 80px",
      background: "#EEFFD7", color: "#22350A", overflow: "hidden",
    } as React.CSSProperties}>
      <DotGrid color="rgba(34,53,10,.1)" gap={22} />
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 60, flexWrap:"wrap", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ width: 40, height: 40, borderRadius: 999, background: "#22350A", display: "inline-flex", alignItems: "center", justifyContent: "center", color: accent, fontFamily: "Montserrat", fontWeight: 800 }}>V</span>
            <div>
              <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase" }}>Pamoja Africa V · 2028</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(34,53,10,.6)", marginTop: 2 }}>{data.event.org}</div>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 14 }}>{data.event.datesShort}</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(34,53,10,.6)", marginTop: 2 }}>{data.event.location}</div>
          </div>
        </div>
        <h1 style={{
          fontFamily: "Montserrat", fontWeight: 700, margin: 0,
          fontSize: "clamp(72px, 13vw, 220px)",
          lineHeight: 0.88, letterSpacing: -6,
          color: "#22350A",
        }}>
          Arise
          <span style={{
            fontFamily: "'Fraunces', 'Cormorant Garamond', serif",
            fontStyle: "italic", fontWeight: 400,
            color: "#EA7F1D", letterSpacing: -4, marginLeft: "0.12em",
          }}>Africa</span>
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, marginTop: 80, alignItems: "start" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(34,53,10,.55)", fontFamily: "Montserrat", fontWeight: 600, textTransform: "uppercase", marginBottom: 14 }}>The call</div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, lineHeight: 1.55, color: "rgba(34,53,10,.85)", margin: 0, textWrap: "pretty" }}>
              Raising a new generation of leaders for a new Africa. A Spirit-filled life of integrity, and a ministry that bridges the missional gap.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(34,53,10,.55)", fontFamily: "Montserrat", fontWeight: 600, textTransform: "uppercase", marginBottom: 14 }}>The gathering</div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, lineHeight: 1.55, color: "rgba(34,53,10,.85)", margin: 0, textWrap: "pretty" }}>
              3,000 students, young professionals and church leaders, plus 2,000 staff and their families — back-to-back in Addis Ababa, Dec 27 to Jan 6.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <button onClick={onRegister} style={{
              border: 0, cursor: "pointer", padding: "22px 28px", borderRadius: 16,
              background: "#22350A", color: accent,
              fontFamily: "Montserrat", fontWeight: 700, fontSize: 15, letterSpacing: "0.06em",
              display: "inline-flex", alignItems: "center", justifyContent: "space-between",
              textTransform: "uppercase", width: "100%",
            }}>Register for Pamoja V <IconArrow /></button>
            <a href="#vision" style={{
              padding: "22px 28px", borderRadius: 16, textDecoration: "none",
              background: "rgba(34,53,10,.06)", color: "#22350A",
              fontFamily: "Montserrat", fontWeight: 600, fontSize: 15, letterSpacing: "0.04em",
              textAlign: "center", textTransform: "uppercase",
            }}>Read the Vision</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroBold({ accent, onRegister, data }: HeroProps) {
  useEffect(() => {
    if (document.getElementById("pamoja-marquee-kf")) return;
    const s = document.createElement("style");
    s.id = "pamoja-marquee-kf";
    s.textContent = `@keyframes pamoja-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`;
    document.head.appendChild(s);
  }, []);

  const speakerAvatars = (data.speakers || []).filter(s => s.photo).slice(0, 3);
  const marqueeItems = ["Pamoja", "Arise", "Leader", "Send", "Africa"];

  return (
    <section id="top" style={{
      position: "relative",
      background: "#22350A", color: "#EEFFD7", overflow: "hidden",
      paddingBottom: 0,
    } as React.CSSProperties}>
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        background: "url(/assets/conference_crowd.jpg) center 20% / cover no-repeat",
        filter: "grayscale(1) contrast(1.05)",
      }} />
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(34,53,10,.75) 0%, rgba(34,53,10,.82) 45%, rgba(34,53,10,.95) 100%)",
        mixBlendMode: "multiply",
      }} />
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(92,135,39,.35) 0%, rgba(34,53,10,.15) 40%, rgba(10,16,2,.6) 100%)",
      }} />
      <div style={{
        position: "absolute", right: 0, top: "42%", transform: "translateY(-50%)",
        writingMode: "vertical-rl",
        background: "#EA7F1D", color: "#fff",
        fontFamily: "Montserrat", fontWeight: 700, fontSize: 10, letterSpacing: "0.28em",
        padding: "18px 10px", textTransform: "uppercase",
        borderTopLeftRadius: 4, borderBottomLeftRadius: 4,
        zIndex: 3,
      } as React.CSSProperties}>Register · Arise Africa</div>
      <div className="pmj-hero-bold-section" style={{
        position: "relative", zIndex: 2,
        maxWidth: 1440, margin: "0 auto",
        minHeight: "min(100vh, 980px)",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", gap: 56, marginTop: 40, marginBottom: 24 }}>
          <div>
            <div style={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 15, lineHeight: 1.3, color: "#EEFFD7", letterSpacing: "0.02em" }}>
              27 Dec, 2027<br />— 2 Jan, 2028
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 15, lineHeight: 1.3, color: "#EEFFD7" }}>
              Addis Ababa<br />Ethiopia
            </div>
          </div>
        </div>
        <div style={{ marginTop: 8, marginBottom: 48 }}>
          <h1 style={{
            fontFamily: "Montserrat", fontWeight: 800, margin: 0,
            fontSize: "clamp(72px, 13.5vw, 220px)",
            lineHeight: 0.86, letterSpacing: "-0.04em",
            color: "#EEFFD7",
            textShadow: "0 8px 40px rgba(0,0,0,.35)",
            textTransform: "uppercase",
          }}>
            ARISE
            <br/>
            <span style={{ display: "inline-block", paddingLeft: "14%" }}>AFRICA</span>
          </h1>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64, alignItems: "start",
          paddingTop: 36,
        }} className="pmj-hero-bold-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            <a href="#speakers" style={{ textDecoration: "none", color: "inherit", display: "inline-flex", alignItems: "center", gap: 18 }}>
              <div style={{ display: "flex" }}>
                {speakerAvatars.map((sp, i) => (
                  <div key={i} style={{
                    width: 48, height: 48, borderRadius: 999, overflow: "hidden",
                    border: "2px solid #22350A",
                    marginLeft: i === 0 ? 0 : -14,
                    position: "relative",
                    background: "#0A1002",
                    zIndex: 10 - i,
                  }}>
                    <img src={sp.photo || ''} alt={sp.name} style={{
                      width: "100%", height: "100%",
                      objectFit: "cover", objectPosition: "center 18%",
                    }} />
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 17, lineHeight: 1.2, color: "#EEFFD7" }}>
                  Skilled<br />Speakers
                </span>
                <span style={{
                  width: 36, height: 36, borderRadius: 999,
                  border: "1px solid rgba(238,255,215,.4)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  color: "#EEFFD7",
                }}><IconArrow size={14} /></span>
              </div>
            </a>
            <div style={{ display: "flex", gap: 40, flexWrap: "wrap", fontFamily: "Montserrat", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", color: "rgba(238,255,215,.85)", textTransform: "uppercase" }}>
              <span>+251 11 551 0044</span>
              <span>HELLO@PAMOJA.AFRICA</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 460 }}>
            <h2 style={{
              fontFamily: "Montserrat", fontWeight: 700, fontSize: 22,
              letterSpacing: "0.04em", color: "#EEFFD7", margin: 0,
              lineHeight: 1.3, textTransform: "uppercase",
            }}>
              Pamoja Africa V:<br />
              Raising a <span style={{ color: accent }}>new generation</span> of <span style={{ color: accent }}>leaders</span> for a <span style={{ color: accent }}>new Africa</span>.
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.6, color: "rgba(238,255,215,.78)", margin: 0, textWrap: "pretty" }}>
              Campus Crusade for Christ Africa gathers 5,000 students, young professionals, pastors and staff across the continent — united in Spirit-filled leadership and a ministry that bridges the missional gap.
            </p>
            <button onClick={onRegister} style={{
              alignSelf: "flex-start",
              border: "1px solid rgba(238,255,215,.45)", cursor: "pointer",
              padding: "14px 26px", borderRadius: 999,
              background: "transparent", color: "#EEFFD7",
              fontFamily: "Montserrat", fontWeight: 600, fontSize: 13, letterSpacing: "0.12em",
              display: "inline-flex", alignItems: "center", gap: 12, textTransform: "uppercase",
              marginTop: 10,
            }}>
              <span style={{ width: 18, height: 18, borderRadius: 999, background: accent, color: "#22350A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><IconArrow size={10} /></span>
              Register now
            </button>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative", zIndex: 2,
        padding: "56px 0 64px",
        overflow: "hidden",
        borderTop: "1px solid rgba(238,255,215,.1)",
      }}>
        <div style={{
          display: "flex", whiteSpace: "nowrap",
          animation: "pamoja-marquee 18s linear infinite",
          willChange: "transform",
        }}>
          {[...marqueeItems, ...marqueeItems].map((w, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", paddingRight: 80 }}>
              <span className="pmj-marquee-text" style={{
                fontFamily: "Montserrat", fontWeight: 800,
                letterSpacing: "-0.03em", color: "#EEFFD7",
                textTransform: "uppercase", lineHeight: 1,
              }}>{w}</span>
              <span aria-hidden style={{
                display: "inline-block", width: 96, height: 96, marginLeft: 80,
                background: `url(/assets/africa_logo.png) center / contain no-repeat`,
              }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
