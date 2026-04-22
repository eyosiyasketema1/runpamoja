import { useState, useRef, useEffect, CSSProperties } from 'react';
import { PamojaData } from '../data';

function hexA(hex: string, a: number): string {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

const TYPE_COLORS: { [key: string]: string } = {
  Plenary: '#8DCF3D',
  Worship: '#EA7F1D',
  Workshop: '#C2410C',
  Panel: '#5C8727',
  Fellowship: '#EA7F1D',
  Discussion: '#5C8727',
  Mission: '#C2410C',
  Cultural: '#EA7F1D',
  Logistics: '#6B7280',
  Track: '#8DCF3D',
  Family: '#EA7F1D',
};

function Agenda({ data, accent: _accent }: { data: PamojaData; accent: string }) {
  const [conf, setConf] = useState<'pamoja' | 'staff'>('pamoja');
  const [dayIdx, setDayIdx] = useState(0);
  const [hoverSess, setHoverSess] = useState<number | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDayIdx(0);
  }, [conf]);

  const schedule = data.agenda[conf];
  const days = schedule.days;
  const cur = days[dayIdx];

  const confTabs = [
    { id: 'pamoja' as const, label: 'Pamoja', dates: 'Dec 27, 2027 — Jan 2, 2028' },
    { id: 'staff' as const, label: 'Staff', dates: 'Jan 2 — Jan 6, 2028' },
  ];

  return (
    <section id="agenda" className="pmj-agenda" style={{
      background: '#EEFFD7', color: '#22350A',
      padding: '140px 80px 160px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'relative', maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', marginBottom: 48 }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span style={{ width: 32, height: 1, background: '#5C8727' }} />
              <span style={{ fontFamily: 'Montserrat', fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', color: '#5C8727', textTransform: 'uppercase' }}>Agenda · 12 days</span>
            </div>
            <h2 style={{
              margin: 0, fontFamily: 'Montserrat', fontWeight: 700,
              fontSize: 'clamp(48px, 6.5vw, 88px)', lineHeight: 0.98,
              letterSpacing: '-0.035em', color: '#22350A', textWrap: 'balance',
              maxWidth: 900,
            } as CSSProperties}>
              Twelve days in Addis.<br/>
              <span style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300, color: '#5C8727' }}>
                Plan your week.
              </span>
            </h2>
          </div>

          <div style={{
            display: 'inline-flex', padding: 6, borderRadius: 999,
            background: '#22350A', boxShadow: '0 18px 40px -20px rgba(34,53,10,.4)',
          }}>
            {confTabs.map(t => {
              const active = conf === t.id;
              return (
                <button key={t.id} onClick={() => setConf(t.id)} style={{
                  border: 0, cursor: 'pointer', padding: '14px 24px', borderRadius: 999,
                  background: active ? (t.id === 'pamoja' ? '#8DCF3D' : '#EA7F1D') : 'transparent',
                  color: active ? '#22350A' : 'rgba(238,255,215,.7)',
                  fontFamily: 'Montserrat', fontWeight: 700, fontSize: 13, letterSpacing: '0.12em',
                  textTransform: 'uppercase', transition: 'all .3s',
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2,
                  lineHeight: 1,
                }}>
                  <span>{t.label}</span>
                  <span style={{
                    fontSize: 9, letterSpacing: '0.18em', fontWeight: 600,
                    opacity: active ? 0.7 : 0.55,
                  }}>{t.dates}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          fontFamily: 'Inter, sans-serif', fontSize: 14,
          color: 'rgba(34,53,10,.65)', marginBottom: 56,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: schedule.color }} />
          <strong style={{ fontFamily: 'Montserrat', fontWeight: 700, color: '#22350A', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 11 }}>{schedule.label}</strong>
          <span>· {schedule.sub}</span>
        </div>

        <div ref={stripRef} style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${days.length}, minmax(0, 1fr))`,
          gap: 8, marginBottom: 40,
        }}>
          {days.map((d, i) => {
            const active = dayIdx === i;
            return (
              <button key={i} onClick={() => setDayIdx(i)} style={{
                all: 'unset' as const, cursor: 'pointer',
                padding: '18px 14px 18px',
                borderRadius: 12,
                background: active ? '#22350A' : 'rgba(34,53,10,.05)',
                color: active ? '#EEFFD7' : '#22350A',
                border: active ? '1px solid #22350A' : '1px solid rgba(34,53,10,.08)',
                transition: 'all .35s cubic-bezier(.2,.8,.2,1)',
                position: 'relative', overflow: 'hidden',
              } as CSSProperties}>
                {active && (
                  <span style={{
                    position: 'absolute', top: 10, right: 10,
                    width: 6, height: 6, borderRadius: 999, background: schedule.color,
                    boxShadow: `0 0 0 4px rgba(141,207,61,.3)`,
                  }} />
                )}
                <div style={{
                  fontFamily: 'Montserrat', fontSize: 10,
                  letterSpacing: '0.24em', fontWeight: 700,
                  color: active ? schedule.color : 'rgba(34,53,10,.5)',
                  textTransform: 'uppercase',
                }}>{d.label}</div>
                <div style={{
                  marginTop: 10, fontFamily: 'Montserrat', fontWeight: 700,
                  fontSize: 22, letterSpacing: '-0.02em',
                  color: active ? '#EEFFD7' : '#22350A',
                }}>{d.date}</div>
                <div style={{
                  marginTop: 4, fontFamily: 'Inter, sans-serif',
                  fontSize: 11,
                  color: active ? 'rgba(238,255,215,.55)' : 'rgba(34,53,10,.5)',
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                }}>{d.weekday}</div>
              </button>
            );
          })}
        </div>

        <div key={conf + '-' + dayIdx} style={{
          background: '#22350A', color: '#EEFFD7',
          borderRadius: 24, overflow: 'hidden',
          animation: 'agenda-swap .5s cubic-bezier(.2,.8,.2,1) both',
        }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'auto 1fr auto',
            gap: 32, alignItems: 'center',
            padding: '36px 44px',
            borderBottom: '1px solid rgba(238,255,215,.1)',
          }}>
            <div style={{
              fontFamily: "'Fraunces', serif", fontStyle: 'italic',
              fontWeight: 200, fontSize: 88, lineHeight: 1,
              color: schedule.color,
            }}>{String(dayIdx + 1).padStart(2, '0')}</div>
            <div>
              <div style={{
                fontFamily: 'Montserrat', fontSize: 10,
                letterSpacing: '0.3em', fontWeight: 700,
                color: schedule.color, textTransform: 'uppercase',
                marginBottom: 10,
              }}>{cur.weekday} · {cur.date}</div>
              <h3 style={{
                margin: 0, fontFamily: 'Montserrat', fontWeight: 700,
                fontSize: 32, letterSpacing: '-0.02em',
                color: '#EEFFD7', textWrap: 'balance',
              }}>{cur.tagline}</h3>
            </div>
            <div style={{
              fontFamily: 'Montserrat', fontSize: 11,
              letterSpacing: '0.22em', fontWeight: 700,
              color: 'rgba(238,255,215,.5)', textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>{cur.sessions.length} sessions</div>
          </div>

          <ul style={{
            listStyle: 'none', margin: 0, padding: 0,
          }}>
            {cur.sessions.map((s, i) => {
              const color = TYPE_COLORS[s.type] || schedule.color;
              const isHover = hoverSess === i;
              return (
                <li key={i}
                  onMouseEnter={() => setHoverSess(i)}
                  onMouseLeave={() => setHoverSess(null)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr auto',
                    gap: 32, alignItems: 'center',
                    padding: '24px 44px',
                    borderBottom: i < cur.sessions.length - 1 ? '1px solid rgba(238,255,215,.08)' : 'none',
                    background: isHover ? 'rgba(238,255,215,.03)' : 'transparent',
                    transition: 'background .25s',
                    position: 'relative',
                  }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: 999, background: color,
                      boxShadow: isHover ? `0 0 0 6px ${hexA(color, .18)}` : 'none',
                      transition: 'box-shadow .3s',
                    }} />
                    <span style={{
                      fontFamily: 'Montserrat', fontWeight: 700,
                      fontSize: 13, letterSpacing: '0.08em',
                      color: '#EEFFD7', fontVariantNumeric: 'tabular-nums',
                    }}>{s.t}</span>
                  </div>

                  <div>
                    <div style={{
                      fontFamily: 'Montserrat', fontWeight: 600,
                      fontSize: 18, letterSpacing: '-0.01em',
                      color: '#EEFFD7', textWrap: 'balance',
                      transform: isHover ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'transform .3s',
                    }}>{s.title}</div>
                    <div style={{
                      marginTop: 6, display: 'flex', gap: 18, flexWrap: 'wrap',
                      fontFamily: 'Inter, sans-serif', fontSize: 12,
                      color: 'rgba(238,255,215,.55)',
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1 L1 4 L1 11 L11 11 L11 4 Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/></svg>
                        {s.venue}
                      </span>
                      {s.speaker && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="4" r="2" stroke="currentColor" strokeWidth="1"/><path d="M2 11 C2 8 4 7 6 7 C8 7 10 8 10 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg>
                          {s.speaker}
                        </span>
                      )}
                    </div>
                  </div>

                  <div style={{
                    padding: '6px 14px', borderRadius: 999,
                    background: hexA(color, .15), border: `1px solid ${hexA(color, .35)}`,
                    fontFamily: 'Montserrat', fontSize: 10,
                    letterSpacing: '0.2em', fontWeight: 700,
                    color: color, textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}>{s.type}</div>
                </li>
              );
            })}
          </ul>

          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '20px 44px',
            borderTop: '1px solid rgba(238,255,215,.08)',
            background: 'rgba(0,0,0,.15)',
          }}>
            <button
              onClick={() => setDayIdx(Math.max(0, dayIdx - 1))}
              disabled={dayIdx === 0}
              style={{
                all: 'unset' as const, cursor: dayIdx === 0 ? 'not-allowed' : 'pointer',
                fontFamily: 'Montserrat', fontSize: 11, letterSpacing: '0.2em',
                fontWeight: 700, textTransform: 'uppercase',
                color: dayIdx === 0 ? 'rgba(238,255,215,.25)' : 'rgba(238,255,215,.75)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
              ← Prev day
            </button>
            <span style={{
              fontFamily: 'Montserrat', fontSize: 10, letterSpacing: '0.24em',
              fontWeight: 700, color: 'rgba(238,255,215,.4)', textTransform: 'uppercase',
            }}>{String(dayIdx + 1).padStart(2, '0')} / {String(days.length).padStart(2, '0')}</span>
            <button
              onClick={() => setDayIdx(Math.min(days.length - 1, dayIdx + 1))}
              disabled={dayIdx === days.length - 1}
              style={{
                all: 'unset' as const, cursor: dayIdx === days.length - 1 ? 'not-allowed' : 'pointer',
                fontFamily: 'Montserrat', fontSize: 11, letterSpacing: '0.2em',
                fontWeight: 700, textTransform: 'uppercase',
                color: dayIdx === days.length - 1 ? 'rgba(238,255,215,.25)' : 'rgba(238,255,215,.75)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
              Next day →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes agenda-swap {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export { Agenda };
