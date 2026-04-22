import { PamojaData } from '../data';

function Partners({ data: _data, accent }: { data: PamojaData; accent: string }) {
  const partners = [
    { name: 'GCM Ethiopia' },
    { name: 'Campus Crusade Africa' },
    { name: 'Ethiopian Airlines' },
    { name: 'Addis Convention Center' },
  ];

  return (
    <section id="partners" style={{
      position: 'relative',
      background: '#FAF5EC',
      color: '#1A1A1A',
      padding: '140px 80px',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <span style={{ width: 32, height: 1, background: accent }} />
            <span style={{ fontFamily: 'Montserrat', fontSize: 12, fontWeight: 700, letterSpacing: '0.28em', color: accent, textTransform: 'uppercase' }}>Partners & Allies</span>
            <span style={{ width: 32, height: 1, background: accent }} />
          </div>
          <h2 style={{
            fontFamily: 'Montserrat', fontWeight: 700, margin: 0,
            fontSize: 'clamp(32px, 4vw, 54px)',
            lineHeight: 1.1, letterSpacing: -1.5, textTransform: 'uppercase',
            color: '#1A1A1A', textWrap: 'balance',
          }}>
            Standing <span style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 400, textTransform: 'none', letterSpacing: -0.5, color: accent }}>together</span>.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
        }}>
          {partners.map((p, i) => {
            const initials = p.name
              .replace(/&/g, ' ')
              .split(/\s+/)
              .filter(Boolean)
              .map(w => w[0])
              .filter(ch => /[A-Z]/.test(ch))
              .slice(0, 3)
              .join('') || p.name.slice(0, 2).toUpperCase();

            return (
              <div key={i} style={{
                padding: '28px 24px',
                borderRadius: 16,
                background: '#fff',
                border: '1px solid rgba(26,26,26,.06)',
                boxShadow: '0 8px 24px -12px rgba(26,36,7,.4), 0 12px 30px -12px rgba(26,36,7,.28)',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                minHeight: 96,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(26,26,26,.04)',
                  border: '1px solid rgba(26,26,26,.06)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Montserrat', fontWeight: 700, fontSize: 14,
                  letterSpacing: '0.08em', color: accent,
                  flex: '0 0 auto',
                }}>
                  {initials}
                </div>
                <div style={{
                  fontFamily: 'Montserrat', fontWeight: 700,
                  fontSize: 15, lineHeight: 1.25, letterSpacing: -0.2,
                  color: '#1A1A1A',
                }}>
                  {p.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Partners };
