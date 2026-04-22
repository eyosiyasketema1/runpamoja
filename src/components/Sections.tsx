import { useState, CSSProperties } from 'react';
import { PamojaData } from '../data';
import { DotGrid, IconArrow, IconPlus } from './Ui';

interface SectionHeaderProps {
  kicker: string;
  title: string;
  accent: string;
  dark?: boolean;
  align?: 'left' | 'center';
  maxWidth?: number;
}

function SectionHeader({ kicker, title, accent, dark, align = 'left', maxWidth = 720 }: SectionHeaderProps) {
  const textColor = dark ? '#EEFFD7' : '#22350A';
  return (
    <div style={{ maxWidth, margin: align === 'center' ? '0 auto' : 0, textAlign: align as any }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <span style={{ width: 32, height: 1, background: accent }} />
        <span style={{ fontFamily: 'Montserrat', fontSize: 12, fontWeight: 600, letterSpacing: '0.24em', color: accent, textTransform: 'uppercase' }}>{kicker}</span>
      </div>
      <h2 style={{
        fontFamily: 'Montserrat', fontWeight: 700, fontSize: 56, lineHeight: 1.02, letterSpacing: -1.4,
        color: textColor, margin: 0, whiteSpace: 'pre-line', textWrap: 'balance',
      } as CSSProperties}>{title}</h2>
    </div>
  );
}

function WhatIs({ data, accent }: { data: PamojaData; accent: string }) {
  return (
    <section id="about" className="pmj-section" style={{ background: '#EEFFD7', color: '#22350A', position: 'relative' }}>
      <DotGrid color="rgba(34,53,10,.08)" gap={22} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }} className="pmj-whatIs-grid">
        <div style={{ position: 'sticky', top: 120 }}>
          <SectionHeader kicker="About" title={data.whatIs.title} accent={'#5C8727'} />
        </div>
        <div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 22, lineHeight: 1.55, color: '#22350A', marginTop: 0, textWrap: 'pretty' }}>
            {data.whatIs.body}
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.6, color: 'rgba(34,53,10,.75)', textWrap: 'pretty' }}>
            {data.whatIs.body2}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 48 }} className="pmj-stats-grid">
            {[
              { k: '4', v: 'Continental gatherings since 2006' },
              { k: '34+', v: 'African nations at Pamoja IV' },
              { k: '5,000', v: 'Expected at Pamoja V & Staff Conference' },
            ].map((s, i) => (
              <div key={i} style={{ borderTop: `2px solid ${accent}`, paddingTop: 16 }}>
                <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 40, letterSpacing: -1, color: '#22350A' }}>{s.k}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(34,53,10,.65)', marginTop: 6, lineHeight: 1.4 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Vision({ data, accent }: { data: PamojaData; accent: string }) {
  return (
    <section id="vision" style={{
      background: '#0A1002', color: '#EEFFD7',
      padding: '140px 0 0', position: 'relative', overflow: 'hidden',
    }} className="pmj-vision-section">
      <DotGrid color="rgba(141,207,61,.08)" gap={22} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 80px', position: 'relative' }} className="pmj-vision-header">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <span style={{ width: 32, height: 1, background: accent }} />
          <span style={{ fontFamily: 'Montserrat', fontSize: 12, fontWeight: 600, letterSpacing: '0.24em', color: accent, textTransform: 'uppercase' }}>
            {data.vision.kicker}
          </span>
        </div>
        <h2 style={{
          margin: 0, fontFamily: 'Montserrat', fontWeight: 700,
          fontSize: 'clamp(48px, 6.8vw, 96px)', lineHeight: 0.98,
          letterSpacing: '-0.035em', color: '#EEFFD7',
          maxWidth: 1000, textWrap: 'balance', whiteSpace: 'pre-line',
        } as CSSProperties}>{data.vision.headline}</h2>
      </div>

      <div style={{
        position: 'relative',
        maxWidth: 1440, margin: '24px auto 0',
        minHeight: 820,
      }} className="pmj-vision-bg">
        <img src="assets/theme_africa_bg.png?v=2" alt=""
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'contain', objectPosition: 'center',
            pointerEvents: 'none',
          } as CSSProperties}
        />

        <div style={{
          position: 'relative', zIndex: 2,
          display: 'grid',
          gridTemplateColumns: 'minmax(260px, 380px) 1fr minmax(260px, 380px)',
          gap: 40, alignItems: 'center',
          padding: '0 80px 140px',
          minHeight: 820,
        }} className="pmj-vision-grid">
          <div>
            <div style={{
              fontFamily: 'Montserrat', fontSize: 10,
              letterSpacing: '0.3em', fontWeight: 700,
              color: accent, textTransform: 'uppercase',
              marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: accent }} />
              The call
            </div>
            <p style={{
              margin: 0, fontFamily: 'Inter, sans-serif',
              fontSize: 16, lineHeight: 1.65,
              color: 'rgba(238,255,215,.78)', textWrap: 'pretty',
            }}>{data.vision.body}</p>
          </div>

          <div />

          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontFamily: 'Montserrat', fontSize: 10,
              letterSpacing: '0.3em', fontWeight: 700,
              color: '#EA7F1D', textTransform: 'uppercase',
              marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10,
              justifyContent: 'flex-end',
            }}>
              {data.event.verse}
              <span style={{ width: 6, height: 6, borderRadius: 999, background: '#EA7F1D' }} />
            </div>
            <blockquote style={{
              margin: 0, fontFamily: "'Fraunces', serif",
              fontStyle: 'italic', fontWeight: 300,
              fontSize: 22, lineHeight: 1.45,
              color: 'rgba(238,255,215,.92)', textWrap: 'pretty',
            }}>
              "{data.event.verseText}"
            </blockquote>
          </div>
        </div>

        <div style={{
          position: 'absolute', left: '50%', bottom: 40,
          transform: 'translateX(-50%)',
          zIndex: 2, textAlign: 'center',
        }}>
          <div style={{
            fontFamily: 'Montserrat', fontSize: 11,
            letterSpacing: '0.34em', fontWeight: 700,
            color: 'rgba(238,255,215,.55)', textTransform: 'uppercase',
          }}>Arise · Shine · Go</div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 80px 140px', position: 'relative' }} className="pmj-vision-footer">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: 2, background: 'rgba(238,255,215,.12)',
          border: '1px solid rgba(238,255,215,.12)',
        }} className="pmj-pillars-grid">
          {data.vision.pillars.map((p, i) => (
            <div key={i} style={{ background: '#0A1002', padding: '48px 36px', minHeight: 260 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: 72, color: accent, lineHeight: 1, fontWeight: 400 }}>{p.num}</div>
              <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 26, marginTop: 20, letterSpacing: -0.5 }}>{p.title}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.55, color: 'rgba(238,255,215,.7)', marginTop: 14, textWrap: 'pretty' }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Conferences({ data, accent: _accent, onRegister }: { data: PamojaData; accent: string; onRegister: (confId: string) => void }) {
  return (
    <section id="conferences" className="pmj-section" style={{ background: '#EEFFD7', color: '#22350A' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'end', marginBottom: 56 }} className="pmj-conf-header">
          <SectionHeader kicker="Two Conferences" title={'One venue.\nBack-to-back.'} accent={'#5C8727'} />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, color: 'rgba(34,53,10,.7)', margin: 0, textWrap: 'pretty' }}>
            Pamoja V brings together two distinct gatherings at the Addis Ababa Convention Center — first the main Pamoja Conference for delegates, immediately followed by a dedicated Staff Conference.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="pmj-conf-cards">
          {data.conferences.map((c, i) => (
            <div key={c.id} style={{
              background: i === 0 ? '#22350A' : '#fff',
              color: i === 0 ? '#EEFFD7' : '#22350A',
              borderRadius: 24, padding: '48px 44px',
              border: '1px solid ' + (i === 0 ? 'rgba(238,255,215,.1)' : 'rgba(34,53,10,.08)'),
              position: 'relative', overflow: 'hidden',
              minHeight: 440,
            }}>
              <div style={{ position: 'relative' }}>
                <div style={{ fontFamily: 'Montserrat', fontSize: 11, letterSpacing: '0.24em', color: c.color, fontWeight: 700, textTransform: 'uppercase', marginBottom: 16 }}>{c.kicker}</div>
                <h3 style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 44, lineHeight: 1, letterSpacing: -1.2, margin: 0 }}>{c.name}</h3>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: i === 0 ? 'rgba(238,255,215,.7)' : 'rgba(34,53,10,.6)', marginTop: 10 }}>{c.audience}</div>

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.55, color: i === 0 ? 'rgba(238,255,215,.82)' : 'rgba(34,53,10,.8)', marginTop: 28, textWrap: 'pretty' }}>{c.blurb}</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginTop: 32, paddingTop: 28, borderTop: '1px solid ' + (i === 0 ? 'rgba(238,255,215,.12)' : 'rgba(34,53,10,.1)') }}>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: '0.16em', opacity: 0.55, fontFamily: 'Montserrat', fontWeight: 600, textTransform: 'uppercase', marginBottom: 6 }}>Arrival</div>
                    <div style={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 15 }}>{c.arrival}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: '0.16em', opacity: 0.55, fontFamily: 'Montserrat', fontWeight: 600, textTransform: 'uppercase', marginBottom: 6 }}>Departure</div>
                    <div style={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 15 }}>{c.departure}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: '0.16em', opacity: 0.55, fontFamily: 'Montserrat', fontWeight: 600, textTransform: 'uppercase', marginBottom: 6 }}>Expected</div>
                    <div style={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 15 }}>{c.expected} <span style={{ opacity: 0.6, fontWeight: 500, fontSize: 12 }}>{c.expectedLabel}</span></div>
                  </div>
                </div>

                <button onClick={() => onRegister(c.id)} style={{
                  marginTop: 32, border: 0, cursor: 'pointer', padding: '16px 22px', borderRadius: 14,
                  background: c.color, color: i === 0 ? '#22350A' : '#fff',
                  fontFamily: 'Montserrat', fontWeight: 700, fontSize: 13, letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                }}>Register for {c.name.split(' ')[0]} <IconArrow size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Objectives({ data, accent }: { data: PamojaData; accent: string }) {
  const [active, setActive] = useState(0);
  const items = data.objectives;
  const cur = items[active];

  return (
    <section id="objectives" className="pmj-section" style={{
      background: '#0A1002', color: '#EEFFD7', position: 'relative', overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: `linear-gradient(90deg, transparent 0%, ${accent} 30%, ${accent} 70%, transparent 100%)`,
      }} />

      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          paddingBottom: 28, borderBottom: '1px solid rgba(238,255,215,.1)',
          marginBottom: 80,
        }} className="pmj-obj-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: accent }} />
            <span style={{
              fontFamily: 'Montserrat', fontSize: 11, letterSpacing: '0.3em',
              fontWeight: 700, color: accent, textTransform: 'uppercase',
            }}>Objectives · Vision 2028</span>
          </div>
          <div style={{
            fontFamily: 'Montserrat', fontSize: 11, letterSpacing: '0.22em',
            fontWeight: 600, color: 'rgba(238,255,215,.45)', textTransform: 'uppercase',
          }}>{String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</div>
        </div>

        <h2 style={{
          margin: 0, fontFamily: 'Montserrat', fontWeight: 700,
          fontSize: 'clamp(56px, 8vw, 128px)', lineHeight: 0.92,
          letterSpacing: '-0.045em', color: '#EEFFD7', maxWidth: 1100,
          textWrap: 'balance',
        } as CSSProperties}>
          Five outcomes we're<br/>
          <span style={{
            fontFamily: "'Fraunces', serif", fontStyle: 'italic',
            fontWeight: 300, color: accent, letterSpacing: '-0.03em',
          }}>praying for.</span>
        </h2>

        <div style={{
          marginTop: 80,
          display: 'grid', gridTemplateColumns: '1.1fr 1fr',
          gap: 80, alignItems: 'start',
        }} className="pmj-obj-grid">
          <ol style={{
            listStyle: 'none', margin: 0, padding: 0,
            borderTop: '1px solid rgba(238,255,215,.1)',
          }}>
            {items.map((o, i) => {
              const isActive = active === i;
              return (
                <li key={i}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    style={{
                      all: 'unset' as const, cursor: 'pointer',
                      width: '100%', display: 'grid',
                      gridTemplateColumns: '80px 1fr 32px',
                      alignItems: 'center', gap: 24,
                      padding: '28px 0',
                      borderBottom: '1px solid rgba(238,255,215,.1)',
                      transition: 'padding .35s cubic-bezier(.2,.8,.2,1)',
                      paddingLeft: isActive ? 16 : 0,
                    } as CSSProperties}
                  >
                    <span style={{
                      fontFamily: "'Fraunces', serif", fontStyle: 'italic',
                      fontWeight: 300, fontSize: 32,
                      color: isActive ? accent : 'rgba(238,255,215,.35)',
                      transition: 'color .3s',
                    }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{
                      fontFamily: 'Montserrat', fontWeight: 600,
                      fontSize: 'clamp(20px, 2vw, 28px)',
                      letterSpacing: '-0.02em',
                      color: isActive ? '#EEFFD7' : 'rgba(238,255,215,.5)',
                      transition: 'color .3s',
                      lineHeight: 1.15,
                    }}>{o.title}</span>
                    <span style={{
                      width: 32, height: 32, borderRadius: 999,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      background: isActive ? accent : 'transparent',
                      border: isActive ? 'none' : '1px solid rgba(238,255,215,.2)',
                      color: isActive ? '#22350A' : 'rgba(238,255,215,.45)',
                      transform: isActive ? 'rotate(-45deg)' : 'rotate(0)',
                      transition: 'all .35s cubic-bezier(.2,.8,.2,1)',
                    }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6 L10 6 M6 2 L10 6 L6 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div style={{
            position: 'sticky', top: 120,
            padding: '40px 0',
          }}>
            <div aria-hidden style={{
              position: 'absolute', right: 0, top: -60,
              fontFamily: "'Fraunces', serif", fontStyle: 'italic',
              fontWeight: 200, fontSize: 360, lineHeight: 1,
              color: 'rgba(141,207,61,.05)', userSelect: 'none',
              pointerEvents: 'none',
            }}>
              {String(active + 1).padStart(2, '0')}
            </div>

            <div style={{ position: 'relative' }}>
              <div key={active} style={{
                animation: 'obj-fade .5s cubic-bezier(.2,.8,.2,1) both',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '8px 14px', borderRadius: 999,
                  background: 'rgba(141,207,61,.1)',
                  border: '1px solid rgba(141,207,61,.25)',
                  marginBottom: 32,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: accent }} />
                  <span style={{
                    fontFamily: 'Montserrat', fontSize: 10,
                    letterSpacing: '0.26em', fontWeight: 700,
                    color: accent, textTransform: 'uppercase',
                  }}>Objective {String(active + 1).padStart(2, '0')}</span>
                </div>

                <h3 style={{
                  margin: 0, fontFamily: 'Montserrat', fontWeight: 700,
                  fontSize: 'clamp(28px, 3.2vw, 44px)', lineHeight: 1.1,
                  letterSpacing: '-0.025em', color: '#EEFFD7',
                  textWrap: 'balance',
                }}>{cur.title}</h3>

                <p style={{
                  margin: '24px 0 0', fontFamily: 'Inter, sans-serif',
                  fontSize: 17, lineHeight: 1.6,
                  color: 'rgba(238,255,215,.75)', textWrap: 'pretty',
                  maxWidth: 520,
                }}>{cur.body}</p>

                {cur.metrics && (
                  <div style={{ marginTop: 40 }}>
                    <div style={{
                      fontFamily: 'Montserrat', fontSize: 10,
                      letterSpacing: '0.26em', fontWeight: 700,
                      color: 'rgba(238,255,215,.45)', textTransform: 'uppercase',
                      marginBottom: 20,
                    }}>Targets by June 2028</div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: cur.metrics.length === 4 ? 'repeat(2, 1fr)' : `repeat(${cur.metrics.length}, 1fr)`,
                      gap: 0,
                      border: '1px solid rgba(238,255,215,.1)',
                      borderRadius: 14, overflow: 'hidden',
                    }}>
                      {cur.metrics?.map((m, j) => (
                        <div key={j} style={{
                          padding: '22px 20px',
                          background: j % 2 === 0 ? 'rgba(238,255,215,.02)' : 'transparent',
                          borderRight: j < (cur.metrics?.length ?? 0) - 1 && ((cur.metrics?.length ?? 0) !== 4 || j % 2 === 0) ? '1px solid rgba(238,255,215,.1)' : 'none',
                          borderBottom: (cur.metrics?.length ?? 0) === 4 && j < 2 ? '1px solid rgba(238,255,215,.1)' : 'none',
                        }}>
                          <div style={{
                            fontFamily: 'Montserrat', fontWeight: 700,
                            fontSize: 36, lineHeight: 1,
                            letterSpacing: '-0.03em', color: accent,
                          }}>{m.v}</div>
                          <div style={{
                            marginTop: 8, fontFamily: 'Inter, sans-serif',
                            fontSize: 12, lineHeight: 1.3,
                            color: 'rgba(238,255,215,.6)',
                          }}>{m.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {!cur.metrics && (
                  <div style={{
                    marginTop: 40, padding: '24px 28px',
                    border: '1px dashed rgba(238,255,215,.15)',
                    borderRadius: 14,
                    fontFamily: "'Fraunces', serif", fontStyle: 'italic',
                    fontSize: 15, lineHeight: 1.5,
                    color: 'rgba(238,255,215,.55)', maxWidth: 520,
                  }}>
                    Qualitative objective — measured by partner churches, training cohorts, and on-the-ground movement reports.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes obj-fade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function SpeakerCard({ sp, idx }: { sp: any; idx: number }) {
  const [hover, setHover] = useState(false);
  const accents = ['#EA7F1D', '#22350A', '#8DCF3D', '#C2410C', '#5C8727', '#22350A'];
  const accent = accents[idx % accents.length];

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, cursor: sp.photo ? 'pointer' : 'default' }}
    >
      <div style={{
        position: 'relative', aspectRatio: '4 / 5', borderRadius: 14, overflow: 'hidden',
        background: '#22350A',
      } as CSSProperties}>
        {sp.photo ? (
          <img src={sp.photo} alt={sp.name} style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
            filter: hover ? 'saturate(1.1) contrast(1.05)' : 'grayscale(.55) contrast(.95)',
            transform: hover ? 'scale(1.04)' : 'scale(1.0)',
            transition: 'filter .45s ease, transform .6s cubic-bezier(.2,.8,.2,1)',
          } as CSSProperties} />
        ) : (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'repeating-linear-gradient(135deg, rgba(141,207,61,.15) 0 12px, rgba(141,207,61,.07) 12px 24px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.24em', textTransform: 'uppercase',
            color: '#EEFFD7', opacity: 0.65,
          }}>To be announced</div>
        )}

        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          padding: '14px 16px',
          background: accent,
          color: accent === '#8DCF3D' ? '#22350A' : '#EEFFD7',
          transform: hover ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform .35s cubic-bezier(.2,.8,.2,1)',
          fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span>{sp.country}</span>
          <span>{sp.date}</span>
        </div>

        <div style={{
          position: 'absolute', right: 12, top: 12,
          width: 28, height: 28, borderRadius: 999,
          background: 'rgba(238,255,215,.92)', color: '#22350A',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
        }}>{String(idx + 1).padStart(2, '0')}</div>
      </div>

      <div>
        <div style={{
          fontFamily: 'Montserrat', fontWeight: 700, fontSize: 22,
          letterSpacing: '-0.02em', color: '#22350A', lineHeight: 1.15,
        }}>{sp.name}</div>
        <div style={{
          marginTop: 6,
          fontFamily: 'Inter, sans-serif', fontSize: 13,
          color: 'rgba(34,53,10,.6)', letterSpacing: '0.02em',
        }}>{sp.role}</div>
      </div>
    </div>
  );
}

function Speakers({ data, accent: _accent }: { data: PamojaData; accent: string }) {
  return (
    <section id="speakers" className="pmj-section" style={{ background: '#EEFFD7', color: '#22350A', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 36 }}>
          <span style={{ width: 32, height: 1, background: '#5C8727' }} />
          <span style={{ fontFamily: 'Montserrat', fontSize: 12, fontWeight: 600, letterSpacing: '0.24em', color: '#5C8727', textTransform: 'uppercase' }}>Speakers</span>
        </div>

        <h2 style={{
          margin: 0, fontFamily: 'Montserrat', fontWeight: 700,
          fontSize: 'clamp(48px, 6.5vw, 88px)', lineHeight: 1.0,
          letterSpacing: '-0.035em', color: '#22350A',
          maxWidth: 880, textWrap: 'balance',
        } as CSSProperties}>
          Voices across the<br/>
          <span style={{ color: '#5C8727' }}>continent.</span>
        </h2>

        <p style={{
          marginTop: 28, maxWidth: 540,
          fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.55,
          color: 'rgba(34,53,10,.65)', textWrap: 'pretty',
        }}>
          Our speaker line-up is being confirmed and will be announced here in the coming months. Register now to be notified.
        </p>

        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }} className="pmj-speakers-grid">
          {data.speakers.slice(0, 6).map((sp, i) => <SpeakerCard key={i} sp={sp} idx={i} />)}
        </div>
      </div>
    </section>
  );
}

function History({ data, accent }: { data: PamojaData; accent: string }) {
  const [expanded, setExpanded] = useState(data.history.length - 1);

  return (
    <section id="history" className="pmj-section" style={{ background: '#0A1002', color: '#EEFFD7', position: 'relative', overflow: 'hidden' }}>
      <DotGrid color="rgba(141,207,61,.08)" gap={22} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <SectionHeader kicker="History" title={'Two decades\nof togetherness.'} accent={accent} dark />
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, color: 'rgba(238,255,215,.7)', maxWidth: 720, marginTop: 24, textWrap: 'pretty' }}>
          Four continental gatherings since 2006 — each one deepening the Pamoja vision. Click any conference to see more.
        </p>

        <div style={{ marginTop: 64, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {data.history.map((h, i) => {
            const isOpen = expanded === i;
            return (
              <div key={i} style={{
                borderRadius: 24, overflow: 'hidden',
                border: '1px solid ' + (h.upcoming ? 'rgba(234,127,29,.4)' : 'rgba(238,255,215,.1)'),
                background: isOpen ? 'rgba(238,255,215,.03)' : 'transparent',
                transition: 'all .3s ease',
              }}>
                <button onClick={() => setExpanded(isOpen ? -1 : i)} style={{
                  width: '100%', border: 0, background: 'transparent', cursor: 'pointer',
                  padding: '28px 32px', color: '#EEFFD7',
                  display: 'grid', gridTemplateColumns: '140px 180px 1fr 120px 40px', gap: 32, alignItems: 'center',
                  textAlign: 'left',
                } as CSSProperties}>
                  <div>
                    <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 26, letterSpacing: -0.5, color: h.upcoming ? '#EA7F1D' : '#EEFFD7' }}>{h.year}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 18, color: h.upcoming ? '#EA7F1D' : accent }}>{h.label}</div>
                    {h.upcoming && <div style={{ fontFamily: 'Montserrat', fontSize: 10, letterSpacing: '0.2em', color: '#EA7F1D', fontWeight: 700, textTransform: 'uppercase', marginTop: 4 }}>Upcoming</div>}
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: 'rgba(238,255,215,.82)' }}>{h.place}</div>
                  <div style={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 16, color: 'rgba(238,255,215,.7)', textAlign: 'right' }}>
                    {h.delegates} <span style={{ fontWeight: 400, fontSize: 12, opacity: 0.7 }}>delegates</span>
                  </div>
                  <div style={{
                    width: 40, height: 40, borderRadius: 999, background: isOpen ? accent : 'rgba(238,255,215,.08)',
                    color: isOpen ? '#22350A' : '#EEFFD7',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'all .3s ease',
                  }}><IconPlus size={16} /></div>
                </button>
                <div style={{ maxHeight: isOpen ? 420 : 0, overflow: 'hidden', transition: 'max-height .5s ease' }}>
                  <div style={{ padding: '0 32px 32px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, alignItems: 'start' }}>
                    <div style={{
                      aspectRatio: '16/10', borderRadius: 16, overflow: 'hidden',
                      background: `url(${h.image}) center / cover no-repeat`,
                      border: '1px solid rgba(238,255,215,.1)',
                      position: 'relative',
                    } as CSSProperties}>
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(10,16,2,.6) 100%)' }} />
                      <div style={{ position: 'absolute', left: 20, bottom: 16, fontFamily: 'Montserrat', fontSize: 11, letterSpacing: '0.2em', fontWeight: 600, color: '#fff', textTransform: 'uppercase', background: 'rgba(10,16,2,.55)', backdropFilter: 'blur(6px)', padding: '6px 12px', borderRadius: 999 }}>
                        {h.label} · {h.place}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Montserrat', fontSize: 11, letterSpacing: '0.2em', color: accent, fontWeight: 600, textTransform: 'uppercase', marginBottom: 12 }}>What happened</div>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.55, color: 'rgba(238,255,215,.82)', margin: 0, textWrap: 'pretty' }}>{h.caption}</p>
                      <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                        <div style={{ padding: '14px 16px', borderRadius: 12, background: 'rgba(238,255,215,.05)' }}>
                          <div style={{ fontSize: 10, letterSpacing: '0.18em', color: 'rgba(238,255,215,.5)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 6, fontFamily: 'Montserrat' }}>Delegates</div>
                          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 20 }}>{h.delegates}</div>
                        </div>
                        <div style={{ padding: '14px 16px', borderRadius: 12, background: 'rgba(238,255,215,.05)' }}>
                          <div style={{ fontSize: 10, letterSpacing: '0.18em', color: 'rgba(238,255,215,.5)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 6, fontFamily: 'Montserrat' }}>Location</div>
                          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 14 }}>{h.place}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQ({ data, accent }: { data: PamojaData; accent: string }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="pmj-section" style={{ background: '#EEFFD7', color: '#22350A' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHeader kicker="FAQ" title={'Questions we\nget asked.'} accent={'#5C8727'} />
        <div style={{ marginTop: 64, borderTop: '1px solid rgba(34,53,10,.12)' }}>
          {data.faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(34,53,10,.12)' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%', border: 0, background: 'transparent', cursor: 'pointer',
                  padding: '28px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
                  textAlign: 'left',
                } as CSSProperties}>
                  <span style={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: 20, color: '#22350A', letterSpacing: -0.3 }}>{f.q}</span>
                  <span style={{
                    flex: '0 0 36px', width: 36, height: 36, borderRadius: 999,
                    background: isOpen ? '#22350A' : 'rgba(34,53,10,.08)',
                    color: isOpen ? accent : '#22350A',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'all .3s ease',
                  }}><IconPlus size={16} /></span>
                </button>
                <div style={{ maxHeight: isOpen ? 300 : 0, overflow: 'hidden', transition: 'max-height .4s ease' }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, lineHeight: 1.6, color: 'rgba(34,53,10,.75)', margin: 0, paddingBottom: 28, maxWidth: 820, textWrap: 'pretty' }}>
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RegisterBand({ onRegister, accent, data }: { onRegister: () => void; accent: string; data: PamojaData }) {
  return (
    <section id="register" className="pmj-section" style={{ background: 'url(assets/register_band_bg.png) center / cover no-repeat, #EA7F1D', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'center' }} className="pmj-register-grid">
        <div>
          <div style={{ fontFamily: 'Montserrat', fontSize: 12, letterSpacing: '0.24em', color: 'rgba(255,255,255,.7)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 20 }}>
            Pamoja Africa V · {data.event.datesShort}
          </div>
          <h2 style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 72, lineHeight: 0.95, letterSpacing: -2, color: '#fff', margin: 0, textWrap: 'balance' }}>
            Your seat is<br/>waiting in Addis.
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,.85)', marginTop: 24, maxWidth: 540, textWrap: 'pretty' }}>
            Registration is open for both the Pamoja Conference and the Staff Conference. Early-bird rates, group packages, and scholarships for students are all available through the portal.
          </p>
        </div>
        <div>
          <button onClick={onRegister} style={{
            border: 0, cursor: 'pointer', padding: '28px 36px', borderRadius: 20,
            background: '#22350A', color: accent,
            fontFamily: 'Montserrat', fontWeight: 700, fontSize: 17, letterSpacing: '0.06em',
            width: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            textTransform: 'uppercase',
            boxShadow: '0 30px 60px -20px rgba(0,0,0,.4)',
          }}>Register for Pamoja V <IconArrow size={22} /></button>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24, fontFamily: 'Montserrat', fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,.85)' }}>
            <span>Group rates · 10+</span>
            <span>Student scholarships</span>
            <span>Payment plans</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ data: _data, accent, onNavClick }: { data: PamojaData; accent: string; onNavClick: (id: string) => void }) {
  return (
    <footer style={{ background: '#0A1002', color: '#EEFFD7', padding: '80px 80px 40px' }} className="pmj-footer">
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60, paddingBottom: 60, borderBottom: '1px solid rgba(238,255,215,.12)' }} className="pmj-footer-grid">
          <div>
            <div style={{ marginBottom: 24 }}>
              <img src="assets/pamoja_logo_footer.png" alt="PAMOJA" style={{ height: 44, width: 'auto', display: 'block' }} />
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.55, color: 'rgba(238,255,215,.65)', maxWidth: 380, margin: 0, textWrap: 'pretty' }}>
              Raising a new generation of leaders for a new Africa — under the banner of Isaiah 60:1-3, "Arise, shine."
            </p>
          </div>
          {[
            { title: 'Event', links: [['About','about'],['Vision','vision'],['Conferences','conferences'],['Objectives','objectives']] },
            { title: 'Attend', links: [['Speakers','speakers'],['Register','register'],['FAQ','faq'],['History','history']] },
            { title: 'Contact', links: [['hello@pamoja.africa',null],['Campus Crusade for Christ Africa',null],['Nairobi · Lagos · Addis',null]] },
          ].map((col, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'Montserrat', fontSize: 11, letterSpacing: '0.24em', color: accent, fontWeight: 600, textTransform: 'uppercase', marginBottom: 20 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(([label, href], j) => (
                  <a key={j} href={href ? `#${href}` : '#'} onClick={(e) => { if (href) { e.preventDefault(); onNavClick(href); } else { e.preventDefault(); } }}
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(238,255,215,.75)', textDecoration: 'none' }}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 32, fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(238,255,215,.45)' }}>
          <span>© 2028 Campus Crusade for Christ Africa. All rights reserved.</span>
          <span>Addis Ababa Convention Center · Dec 27, 2027 — Jan 6, 2028</span>
        </div>
      </div>
    </footer>
  );
}

export { WhatIs, Vision, Conferences, Objectives, Speakers, History, FAQ, RegisterBand, Footer, SectionHeader };
