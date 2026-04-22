import { useState, CSSProperties } from 'react';
import { PamojaData } from '../data';

function IconPlay({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 5v14l12-7z" />
    </svg>
  );
}

function IconQuote({ size = 48, color = "#EA7F1D" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill={color} aria-hidden="true">
      <path d="M14 10c-5 2-9 7-9 14v14h14V24H11c0-5 2-9 6-11l-3-3zm22 0c-5 2-9 7-9 14v14h14V24H33c0-5 2-9 6-11l-3-3z" />
    </svg>
  );
}

function IconArrowSm({ dir = "right", size = 18 }: { dir?: "left" | "right"; size?: number }) {
  const rotate = dir === "left" ? 180 : 0;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function Testimonies({ data, accent }: { data: PamojaData; accent: string }) {
  const t = data.testimonies;
  const featured = t.featured;
  const quotes = t.quotes || [];
  const [playing, setPlaying] = useState(false);
  const [idx, setIdx] = useState(0);

  const total = quotes.length;
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  const q = quotes[idx];

  return (
    <section
      id="testimonies"
      style={{
        background: "#F3ECDF",
        color: "#22350A",
        padding: "160px 80px",
        position: "relative",
        overflow: "hidden",
      }}
      className="pmj-testimonies"
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.5,
          backgroundImage: "radial-gradient(rgba(34,53,10,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 64,
          }}
        >
          <div style={{ maxWidth: 720 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ width: 32, height: 1, background: accent }} />
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.24em",
                  color: accent,
                  textTransform: "uppercase",
                }}
              >
                Testimonies
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: 56,
                lineHeight: 1.02,
                letterSpacing: -1.4,
                color: "#22350A",
                margin: 0,
                textWrap: "balance",
              }}
            >
              Voices from<br />
              past gatherings.
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 18,
                lineHeight: 1.55,
                color: "rgba(34,53,10,.72)",
                maxWidth: 620,
                marginTop: 24,
                textWrap: "pretty",
              }}
            >
              What happens in one week echoes for decades. Hear from the students, staff and leaders whose
              lives were shaped by Pamoja I through IV.
            </p>
          </div>
        </div>

        {/* Featured video */}
        {featured && (
          <div
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              aspectRatio: "21/9",
              background: `#22350A url(${featured.thumb}) center / cover no-repeat`,
              border: "1px solid rgba(34,53,10,.1)",
              cursor: playing ? "default" : "pointer",
              boxShadow: "0 30px 70px -30px rgba(34,53,10,.35)",
            } as CSSProperties}
            onClick={!playing ? () => setPlaying(true) : undefined}
          >
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${featured.videoId}?autoplay=1&rel=0`}
                title={featured.name}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              />
            ) : (
              <>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(90deg, rgba(10,16,2,.75) 0%, rgba(10,16,2,.25) 55%, rgba(10,16,2,.55) 100%)",
                  }}
                />

                {/* Top meta */}
                <div
                  style={{
                    position: "absolute",
                    top: 24,
                    left: 28,
                    right: 28,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 14px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,.14)",
                      backdropFilter: "blur(8px)",
                      color: "#fff",
                      fontFamily: "Montserrat",
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: "#EA7F1D" }} />
                    Featured testimony
                  </div>
                  <div
                    style={{
                      padding: "6px 12px",
                      borderRadius: 999,
                      background: "rgba(10,16,2,.6)",
                      backdropFilter: "blur(6px)",
                      color: "#fff",
                      fontFamily: "Montserrat",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {featured.duration}
                  </div>
                </div>

                {/* Play button — centered */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 96,
                    height: 96,
                    borderRadius: 999,
                    background: accent,
                    color: "#22350A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 16px 50px rgba(10,16,2,.5)",
                  }}
                >
                  <IconPlay size={34} />
                </div>

                {/* Bottom caption */}
                <div style={{ position: "absolute", left: 32, right: 32, bottom: 28, color: "#fff", maxWidth: 620 }}>
                  <blockquote
                    style={{
                      margin: 0,
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      fontSize: 24,
                      lineHeight: 1.2,
                      letterSpacing: -0.4,
                      textWrap: "balance",
                    }}
                  >
                    "{featured.quote}"
                  </blockquote>
                  <div
                    style={{
                      marginTop: 18,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontFamily: "Montserrat",
                      fontSize: 13,
                      color: "rgba(255,255,255,.85)",
                    }}
                  >
                    <span style={{ fontWeight: 700, color: "#fff" }}>{featured.name}</span>
                    <span style={{ opacity: 0.5 }}>·</span>
                    <span>
                      {featured.role}
                      {featured.country ? ` · ${featured.country}` : ""}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Carousel */}
        {quotes.length > 0 && q && (
          <div style={{ marginTop: 88 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  color: accent,
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                More stories from delegates
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 13,
                    color: "rgba(34,53,10,.6)",
                    fontVariantNumeric: "tabular-nums",
                    fontWeight: 600,
                  }}
                >
                  {String(idx + 1).padStart(2, "0")} <span style={{ opacity: 0.5 }}>/</span>{" "}
                  {String(total).padStart(2, "0")}
                </span>
                <button
                  aria-label="Previous"
                  onClick={prev}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 999,
                    border: "1px solid rgba(34,53,10,.2)",
                    background: "transparent",
                    cursor: "pointer",
                    color: "#22350A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconArrowSm dir="left" />
                </button>
                <button
                  aria-label="Next"
                  onClick={next}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 999,
                    border: 0,
                    background: "#22350A",
                    cursor: "pointer",
                    color: "#EEFFD7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconArrowSm dir="right" />
                </button>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "380px 1fr",
                gap: 48,
                background: "#fff",
                borderRadius: 24,
                border: "1px solid rgba(34,53,10,.08)",
                overflow: "hidden",
                minHeight: 360,
              }}
            >
              {/* Photo */}
              <div
                style={{
                  background: `#22350A url(${q.photo}) center / cover no-repeat`,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 55%, rgba(10,16,2,.7))",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 24,
                    bottom: 22,
                    color: "#fff",
                    fontFamily: "Montserrat",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.22em",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: accent,
                      marginBottom: 6,
                    }}
                  >
                    {q.country}
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.3 }}>{q.name}</div>
                </div>
              </div>

              {/* Quote body */}
              <div
                style={{
                  padding: "48px 56px 48px 0",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ position: "absolute", top: 36, right: 40, opacity: 0.1 }}>
                  <IconQuote size={80} color={accent} />
                </div>
                <blockquote
                  style={{
                    margin: 0,
                    position: "relative",
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: 24,
                    lineHeight: 1.4,
                    letterSpacing: -0.3,
                    color: "#22350A",
                    textWrap: "pretty",
                    paddingTop: 20,
                  }}
                >
                  "{q.quote}"
                </blockquote>
                <div
                  style={{
                    marginTop: 32,
                    paddingTop: 22,
                    borderTop: "1px solid rgba(34,53,10,.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: accent }} />
                  <div style={{ fontFamily: "Montserrat", fontSize: 13, color: "rgba(34,53,10,.7)" }}>
                    <span style={{ fontWeight: 700, color: "#22350A" }}>{q.name}</span>
                    <span> · {q.role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 8 }}>
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimony ${i + 1}`}
                  style={{
                    width: i === idx ? 28 : 8,
                    height: 8,
                    borderRadius: 999,
                    border: 0,
                    cursor: "pointer",
                    background: i === idx ? "#22350A" : "rgba(34,53,10,.2)",
                    transition: "width .3s ease, background .3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Venue({ data, accent }: { data: PamojaData; accent: string }) {
  const v = data.venue;
  if (!v) return null;

  return (
    <section
      id="venue"
      style={{
        background: "#0A1002",
        color: "#EEFFD7",
        padding: "160px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 520,
          height: 520,
          borderRadius: 999,
          background: "radial-gradient(circle, rgba(141,207,61,.08), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 32, marginBottom: 64 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ width: 32, height: 1, background: accent }} />
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.24em",
                  color: accent,
                  textTransform: "uppercase",
                }}
              >
                Venue
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: 56,
                lineHeight: 1.02,
                letterSpacing: -1.4,
                color: "#EEFFD7",
                margin: 0,
                textWrap: "balance",
              }}
            >
              Addis Ababa<br />
              Convention Center.
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 18,
                lineHeight: 1.55,
                color: "rgba(238,255,215,.72)",
                maxWidth: 620,
                marginTop: 24,
                textWrap: "pretty",
              }}
            >
              {v.tagline}
            </p>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 20px",
              borderRadius: 14,
              background: "#fff",
              border: "1px solid rgba(255,255,255,.9)",
            }}
          >
            <img src="assets/aicc_logo.png" alt="AICC" style={{ height: 40, width: "auto", display: "block" }} />
            <div style={{ fontFamily: "Montserrat", lineHeight: 1.2 }}>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  fontWeight: 600,
                  color: "rgba(34,53,10,.5)",
                  textTransform: "uppercase",
                }}
              >
                Official venue
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#22350A", marginTop: 2 }}>{v.name}</div>
            </div>
          </div>
        </div>

        {/* Hero photo with specs overlaid */}
        <div
          style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            aspectRatio: "21/9",
            background: `#22350A url(assets/venue_hero.jpg) center / cover no-repeat`,
            border: "1px solid rgba(238,255,215,.1)",
          } as CSSProperties}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, transparent 30%, rgba(10,16,2,.85) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 32,
              bottom: 28,
              right: 32,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  color: accent,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Addis Ababa, Ethiopia
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: 28,
                  color: "#fff",
                  letterSpacing: -0.5,
                }}
              >
                {v.name}
              </div>
            </div>
            <div style={{ display: "flex", gap: 28 }}>
              {v.specs.map((s, i) => (
                <div key={i} style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 22, color: "#EEFFD7" }}>
                    {s.v}
                  </div>
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      color: "rgba(238,255,215,.55)",
                      textTransform: "uppercase",
                      marginTop: 2,
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Testimonies, Venue };
