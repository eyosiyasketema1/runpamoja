import { useEffect, CSSProperties } from 'react';
import { PamojaData } from '../data';

interface PortraitData {
  photo: string;
  bg: string;
}

function ArisePortraits({ data: _data, accent }: { data: PamojaData; accent: string }) {
  const portraits: PortraitData[] = [
    { photo: 'assets/arise_01.jpg', bg: '#2A3015' },
    { photo: 'assets/arise_02.jpg', bg: '#3E3A36' },
    { photo: 'assets/arise_03.jpg', bg: '#1A2440' },
    { photo: 'assets/arise_04.jpg', bg: '#6E4A2F' },
    { photo: 'assets/arise_05.png', bg: '#2A2A2E' },
    { photo: 'assets/arise_06.png', bg: '#6B5478' },
    { photo: 'assets/arise_07.png', bg: '#3A2A1E' },
    { photo: 'assets/arise_08.png', bg: '#2E3A4A' },
    { photo: 'assets/arise_09.png', bg: '#8A7A60' },
  ];

  const N = portraits.length;
  const center = (N - 1) / 2;
  const CARD_W = 420;
  const CARD_H = 600;
  const GAP = 26;
  const RADIUS = 950;
  const STEP_DEG = ((CARD_W + GAP) / RADIUS) * (180 / Math.PI);
  const PERSPECTIVE = 2000;
  const stageHeight = CARD_H + 160;

  useEffect(() => {
    const id = 'arise-cyl-keyframes';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = '';
    document.head.appendChild(style);
  }, []);

  return (
    <section id="arise-africa" style={{
      position: 'relative',
      background: '#FAF5EC',
      color: '#1A1A1A',
      padding: '140px 0 160px',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: 1060, margin: '0 auto', textAlign: 'center', padding: '0 40px',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          marginBottom: 32,
        }}>
          <span style={{ width: 32, height: 1, background: accent }} />
          <span style={{ fontFamily: 'Montserrat', fontSize: 12, fontWeight: 700, letterSpacing: '0.28em', color: accent, textTransform: 'uppercase' }}>Theme · Arise Africa</span>
          <span style={{ width: 32, height: 1, background: accent }} />
        </div>

        <h2 style={{ margin: 0, color: '#1A1A1A', textWrap: 'balance' }}>
          <span style={{
            display: 'block',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 4.6vw, 64px)',
            lineHeight: 1.08,
            letterSpacing: -2,
            color: '#1A1A1A',
            textTransform: 'uppercase',
            textWrap: 'balance',
          } as CSSProperties}>
            A <span style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 400, textTransform: 'none', letterSpacing: -1, color: accent }}>gathering</span> to accelerate the <span style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 400, textTransform: 'none', letterSpacing: -1, color: accent }}>multiplication</span> of connected student-led movements across <span style={{ color: accent }}>Africa</span>.
          </span>
        </h2>
      </div>

      <div style={{
        marginTop: 28,
        position: 'relative',
        height: stageHeight,
        perspective: `${PERSPECTIVE}px`,
        perspectiveOrigin: '50% 50%',
      } as CSSProperties}>
        <div
          className="arise-cyl-stage"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 0,
            height: 0,
            transformStyle: 'preserve-3d',
            transform: 'translate(-50%, -50%)',
            willChange: 'transform',
          } as CSSProperties}
        >
          {portraits.map((p, i) => {
            const angle = (i - center) * STEP_DEG;
            return (
              <div key={i} style={{
                position: 'absolute',
                left: -CARD_W / 2,
                top: -CARD_H / 2,
                width: CARD_W,
                height: CARD_H,
                transformStyle: 'preserve-3d',
                transform: `rotateY(${angle}deg) translateZ(${-RADIUS}px)`,
                backfaceVisibility: 'hidden',
              } as CSSProperties}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 22,
                  overflow: 'hidden',
                  background: `${p.bg} url(${p.photo}) center / cover no-repeat`,
                  boxShadow: '0 30px 60px -20px rgba(26,36,7,.4), 0 12px 30px -12px rgba(26,36,7,.28)',
                  border: '1px solid rgba(26,36,7,.05)',
                  position: 'relative',
                }}>
                  <div aria-hidden style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,.22) 100%)',
                  }} />
                </div>
              </div>
            );
          })}
        </div>

        <div aria-hidden style={{
          position: 'absolute', top: 0, left: 0, height: '100%', width: '14%',
          background: 'linear-gradient(to right, rgba(250,245,236,.95) 0%, rgba(250,245,236,.6) 45%, rgba(250,245,236,.25) 75%, rgba(250,245,236,0) 100%)',
          pointerEvents: 'none', zIndex: 2,
        }} />
        <div aria-hidden style={{
          position: 'absolute', top: 0, right: 0, height: '100%', width: '14%',
          background: 'linear-gradient(to left, rgba(250,245,236,.95) 0%, rgba(250,245,236,.6) 45%, rgba(250,245,236,.25) 75%, rgba(250,245,236,0) 100%)',
          pointerEvents: 'none', zIndex: 2,
        }} />
      </div>
    </section>
  );
}

export { ArisePortraits };
