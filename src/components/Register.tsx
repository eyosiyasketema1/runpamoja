import { useState, useEffect, CSSProperties } from 'react';
import { PamojaData } from '../data';
import { IconCheck, IconX, IconArrow, IconCard } from './Ui';

function RegisterModal({ open, onClose, accent, data, initialConf }: { open: boolean; onClose: () => void; accent: string; data: PamojaData; initialConf?: string }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    conferences: initialConf ? [initialConf] : [] as string[],
    firstName: '', lastName: '', email: '', phone: '', country: '',
    cardName: '', cardNumber: '', cardExp: '', cardCvc: '',
  });
  const [errors, setErrors] = useState<any>({});

  useEffect(() => { if (open && initialConf) setForm(f => ({ ...f, conferences: [initialConf] })); }, [open, initialConf]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open, onClose]);
  useEffect(() => { if (!open) { setStep(0); setErrors({}); } }, [open]);

  if (!open) return null;

  const validateConference = () => {
    const e: any = {};
    if (form.conferences.length === 0) e.conferences = 'Please select at least one conference.';
    return e;
  };
  const validateDetails = () => {
    const e: any = {};
    if (!form.firstName.trim()) e.firstName = 'Please enter your first name.';
    if (!form.lastName.trim()) e.lastName = 'Please enter your last name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'A valid email is required.';
    if (!form.phone.trim() || form.phone.replace(/\D/g,'').length < 7) e.phone = 'Use international format, e.g. +254 712 345 678.';
    if (!form.country.trim()) e.country = 'Tell us your country of residence.';
    return e;
  };
  const validatePayment = () => {
    const e: any = {};
    if (!form.cardName.trim()) e.cardName = 'Name on card is required.';
    const digits = form.cardNumber.replace(/\s/g, '');
    if (digits.length < 13 || !/^\d+$/.test(digits)) e.cardNumber = 'Enter a 13–19 digit card number.';
    if (!/^(0[1-9]|1[0-2])\s*\/\s*\d{2}$/.test(form.cardExp)) e.cardExp = 'Use MM/YY.';
    if (!/^\d{3,4}$/.test(form.cardCvc)) e.cardCvc = '3–4 digits.';
    return e;
  };

  const primaryConfId = form.conferences[0] || 'pamoja';
  const conf = data.conferences.find(c => c.id === primaryConfId) || data.conferences[0];
  const confPrice = (id: string) => (id === 'pamoja' ? 180 : 120);
  const price = form.conferences.reduce((sum, id) => sum + confPrice(id), 0);

  const fieldInput = (name: keyof typeof form, label: string, type = 'text', placeholder = '', extra: any = {}) => (
    <div style={{ display:'flex', flexDirection:'column', gap: 8, minWidth: 0 }}>
      <label style={{ fontFamily:'Montserrat', fontSize: 11, letterSpacing:'0.18em', fontWeight: 600, color:'rgba(34,53,10,.6)', textTransform:'uppercase' }}>{label}</label>
      <input type={type} value={form[name]} placeholder={placeholder} {...extra}
        onChange={(e) => { setForm({ ...form, [name]: e.target.value }); if (errors[name]) setErrors({ ...errors, [name]: null }); }}
        style={{
          padding:'13px 14px', borderRadius: 10,
          border: `1px solid ${errors[name] ? '#EA7F1D' : 'rgba(34,53,10,.15)'}`,
          background:'#fff', fontFamily:'Inter, sans-serif', fontSize: 15, color:'#22350A',
          outline:'none',
          width: '100%', minWidth: 0, boxSizing: 'border-box',
        }}
      />
      {errors[name] && <span style={{ fontFamily:'Inter, sans-serif', fontSize: 12, color:'#EA7F1D' }}>{errors[name]}</span>}
    </div>
  );

  const next = () => {
    if (step === 0) { const e = validateConference(); setErrors(e); if (Object.keys(e).length === 0) setStep(1); return; }
    if (step === 1) { const e = validateDetails(); setErrors(e); if (Object.keys(e).length === 0) setStep(2); return; }
    if (step === 2) { const e = validatePayment(); setErrors(e); if (Object.keys(e).length === 0) setStep(3); return; }
    setStep(step + 1);
  };

  const steps = ['Conference', 'Your details', 'Payment', 'Confirmed'];
  const countries = ['Ethiopia','Kenya','Uganda','Tanzania','Rwanda','Burundi','South Sudan','Sudan','Somalia','Djibouti','Eritrea','Nigeria','Ghana','Senegal','Côte d\'Ivoire','Cameroon','Democratic Republic of the Congo','Republic of the Congo','Gabon','South Africa','Zimbabwe','Zambia','Malawi','Mozambique','Botswana','Namibia','Angola','Madagascar','Egypt','Morocco','Tunisia','Algeria','Libya','United States','Canada','United Kingdom','Ireland','Germany','France','Netherlands','Norway','Sweden','Denmark','Finland','Switzerland','Spain','Italy','Portugal','Belgium','Austria','Australia','New Zealand','Brazil','Mexico','Argentina','India','Pakistan','Bangladesh','Sri Lanka','China','Japan','South Korea','Singapore','Malaysia','Indonesia','Philippines','Thailand','Vietnam','United Arab Emirates','Saudi Arabia','Qatar','Israel','Turkey','Other'];

  return (
    <div style={{
      position:'fixed', inset: 0, zIndex: 100,
      background:'rgba(10,16,2,.72)', backdropFilter:'blur(8px)',
      display:'flex', alignItems:'center', justifyContent:'center', padding: 24,
    }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{
        width:'min(1040px, 100%)', maxHeight:'92vh',
        background:'#EEFFD7', borderRadius: 24, position:'relative',
        boxShadow:'0 40px 80px rgba(0,0,0,.5)',
        display: 'grid',
        gridTemplateColumns: (typeof window !== 'undefined' && window.innerWidth < 820) ? '1fr' : '300px 1fr',
        overflow: 'hidden',
      } as CSSProperties}>
        <div style={{
          position:'relative', background:'#22350A', color:'#EEFFD7', overflow:'hidden',
          alignSelf:'stretch',
          display: (typeof window !== 'undefined' && window.innerWidth < 820) ? 'none' : 'block',
        }}>
          <div style={{ position:'absolute', inset: 0, background:'url(assets/venue_hero.jpg) center / cover', opacity: 0.35 }} />
          <div style={{ position:'absolute', inset: 0, background:'linear-gradient(180deg, rgba(34,53,10,.4) 0%, rgba(10,16,2,.95) 100%)' }} />
          <div style={{ position:'relative', padding: '32px 28px', height: '100%', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
            <div>
              <div style={{ display:'flex', alignItems:'center', gap: 10, marginBottom: 24 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: accent, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Montserrat', fontWeight: 800, color:'#22350A', fontSize: 14 }}>P</div>
                <span style={{ fontFamily:'Montserrat', fontSize: 11, letterSpacing:'0.16em', fontWeight: 700, textTransform:'uppercase' }}>PAMOJA V · 2028</span>
              </div>
              <div style={{ fontFamily:'Montserrat', fontSize: 11, letterSpacing:'0.22em', color: accent, fontWeight: 700, textTransform:'uppercase', marginBottom: 10 }}>Registration</div>
              <h3 style={{ fontFamily:'Montserrat', fontWeight: 700, fontSize: 34, letterSpacing: -0.8, margin: 0, color:'#EEFFD7', lineHeight: 1.05 }}>Save your seat in Addis.</h3>
              <p style={{ fontFamily:'Inter, sans-serif', fontSize: 14, lineHeight: 1.55, color:'rgba(238,255,215,.75)', marginTop: 14, textWrap:'pretty' }}>
                {conf.name} · {conf.arrival.replace(/, \d+$/,'')} — {conf.departure}
              </p>
            </div>
            <div style={{ marginTop: 28 }}>
              {steps.map((s, i) => {
                const done = i < step, current = i === step;
                return (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap: 12, padding:'10px 0' }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: 999,
                      background: done ? accent : current ? 'rgba(141,207,61,.25)' : 'rgba(238,255,215,.08)',
                      border: current ? `1px solid ${accent}` : '1px solid transparent',
                      color: done ? '#22350A' : '#EEFFD7',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      fontFamily:'Montserrat', fontWeight: 700, fontSize: 11,
                    }}>{done ? <IconCheck size={12} /> : i + 1}</div>
                    <span style={{ fontFamily:'Montserrat', fontSize: 12, letterSpacing:'0.12em', fontWeight: current ? 700 : 500, color: current ? '#EEFFD7' : 'rgba(238,255,215,.55)', textTransform:'uppercase' }}>{s}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ position:'relative', padding: '28px 28px 28px', maxHeight: '92vh', overflowY: 'auto', minWidth: 0 }}>
          <button onClick={onClose} style={{
            position:'absolute', top: 16, right: 16,
            width: 34, height: 34, borderRadius: 999, border: 0, cursor:'pointer',
            background:'rgba(34,53,10,.08)', color:'#22350A',
            display:'flex', alignItems:'center', justifyContent:'center',
          }}><IconX size={16} /></button>

          {step === 0 && (
            <>
              <StepTitle k="01 · Conference" title="Which are you attending?" sub="Two back-to-back events at the same venue. Select one or both." />
              <div style={{ display:'flex', flexDirection:'column', gap: 12, marginTop: 20 }}>
                {data.conferences.map((c) => {
                  const sel = form.conferences.includes(c.id);
                  const toggle = () => {
                    const next = sel
                      ? form.conferences.filter(x => x !== c.id)
                      : [...form.conferences, c.id];
                    setForm({ ...form, conferences: next });
                    if (errors.conferences) setErrors({ ...errors, conferences: null });
                  };
                  return (
                    <button key={c.id} onClick={toggle} style={{
                      border: `1px solid ${sel ? '#22350A' : 'rgba(34,53,10,.14)'}`,
                      background: sel ? '#fff' : 'rgba(255,255,255,.5)',
                      cursor:'pointer', textAlign:'left',
                      padding:'20px 22px', borderRadius: 16,
                      display:'grid', gridTemplateColumns:'auto 1fr auto', gap: 16, alignItems:'center',
                      boxShadow: sel ? '0 12px 28px -18px rgba(34,53,10,.4)' : 'none',
                      transition:'all .2s ease',
                    }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: 6,
                        border: `2px solid ${sel ? c.color : 'rgba(34,53,10,.25)'}`,
                        background: sel ? c.color : 'transparent',
                        display:'flex', alignItems:'center', justifyContent:'center',
                        color:'#fff',
                      }}>
                        {sel && <IconCheck size={12} />}
                      </div>
                      <div>
                        <div style={{ fontFamily:'Montserrat', fontSize: 10, letterSpacing:'0.2em', color: c.color, fontWeight: 700, textTransform:'uppercase' }}>{c.kicker}</div>
                        <div style={{ fontFamily:'Montserrat', fontWeight: 700, fontSize: 20, color:'#22350A', marginTop: 4 }}>{c.name}</div>
                        <div style={{ fontFamily:'Inter, sans-serif', fontSize: 13, color:'rgba(34,53,10,.65)', marginTop: 4 }}>{c.arrival} — {c.departure} · {c.audience}</div>
                      </div>
                      <div style={{ textAlign:'right' }}>
                        <div style={{ fontFamily:'Montserrat', fontWeight: 700, fontSize: 20, color:'#22350A' }}>${c.id === 'pamoja' ? 180 : 120}</div>
                        <div style={{ fontFamily:'Inter, sans-serif', fontSize: 11, color:'rgba(34,53,10,.55)' }}>est. registration</div>
                      </div>
                    </button>
                  );
                })}
              </div>
              {errors.conferences && (
                <div style={{ marginTop: 12, fontFamily:'Inter, sans-serif', fontSize: 13, color:'#EA7F1D' }}>{errors.conferences}</div>
              )}
              {form.conferences.length > 1 && (
                <div style={{
                  marginTop: 14, padding: '10px 14px', borderRadius: 10,
                  background: 'rgba(141,207,61,.12)', border: '1px solid rgba(141,207,61,.35)',
                  fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#22350A',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
                }}>
                  <span>Registering for both conferences.</span>
                  <strong style={{ fontFamily:'Montserrat', fontWeight: 700 }}>Combined total: ${price}</strong>
                </div>
              )}
              <StepFooter onNext={next} nextLabel="Continue" />
            </>
          )}

          {step === 1 && (
            <>
              <StepTitle k="02 · Your details" title="Tell us about yourself." sub="We use this info for your badge, travel letter, and communication." />
              <div style={{
                display:'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: 14,
                marginTop: 22,
              }}>
                {fieldInput('firstName', 'First name', 'text', 'Ada')}
                {fieldInput('lastName', 'Last name', 'text', 'Okoye')}
                {fieldInput('email', 'Email', 'email', 'ada@example.com')}
                {fieldInput('phone', 'Phone (international format)', 'tel', '+254 712 345 678')}
                <div style={{ gridColumn: '1 / -1', display:'flex', flexDirection:'column', gap: 8, minWidth: 0 }}>
                  <label style={{ fontFamily:'Montserrat', fontSize: 11, letterSpacing:'0.18em', fontWeight: 600, color:'rgba(34,53,10,.6)', textTransform:'uppercase' }}>Country of residence</label>
                  <select
                    value={form.country}
                    onChange={(e) => { setForm({ ...form, country: e.target.value }); if (errors.country) setErrors({ ...errors, country: null }); }}
                    style={{
                      padding:'13px 14px', borderRadius: 10,
                      border: `1px solid ${errors.country ? '#EA7F1D' : 'rgba(34,53,10,.15)'}`,
                      background:'#fff', fontFamily:'Inter, sans-serif', fontSize: 15,
                      color: form.country ? '#22350A' : 'rgba(34,53,10,.4)',
                      outline:'none', width:'100%', minWidth: 0, boxSizing:'border-box',
                      appearance:'none', WebkitAppearance:'none',
                      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1.5L6 6.5L11 1.5' stroke='%2322350A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>")`,
                      backgroundRepeat:'no-repeat', backgroundPosition:'right 14px center', paddingRight: 38,
                    }}
                  >
                    <option value="" disabled>Select your country</option>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.country && <span style={{ fontFamily:'Inter, sans-serif', fontSize: 12, color:'#EA7F1D' }}>{errors.country}</span>}
                </div>
              </div>
              <StepFooter onBack={() => setStep(0)} onNext={next} nextLabel="Continue to payment" />
            </>
          )}

          {step === 2 && (
            <>
              <StepTitle k="03 · Payment" title="Secure your seat." sub="Your card will only be charged once rates are published. This is a hold, not a final charge." />
              <div style={{
                marginTop: 20, padding:'18px 20px', borderRadius: 14,
                background:'#fff', border:'1px solid rgba(34,53,10,.08)',
              }}>
                <div style={{ fontFamily:'Montserrat', fontSize: 11, letterSpacing:'0.18em', color:'rgba(34,53,10,.55)', fontWeight: 600, textTransform:'uppercase', marginBottom: 10 }}>You're registering for</div>
                {form.conferences.map(id => {
                  const c = data.conferences.find(x => x.id === id);
                  if (!c) return null;
                  return (
                    <div key={id} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'8px 0', borderBottom: form.conferences.length > 1 ? '1px dashed rgba(34,53,10,.1)' : 'none' }}>
                      <div>
                        <div style={{ fontFamily:'Montserrat', fontWeight: 700, fontSize: 15, color:'#22350A' }}>{c.name}</div>
                        <div style={{ fontFamily:'Inter, sans-serif', fontSize: 12, color:'rgba(34,53,10,.6)', marginTop: 2 }}>{c.arrival} — {c.departure}</div>
                      </div>
                      <div style={{ fontFamily:'Montserrat', fontWeight: 700, fontSize: 16, color:'#22350A' }}>${confPrice(id)}.00</div>
                    </div>
                  );
                })}
                {form.conferences.length > 1 && (
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop: 12, marginTop: 4 }}>
                    <div style={{ fontFamily:'Montserrat', fontSize: 11, letterSpacing:'0.18em', color:'#22350A', fontWeight: 700, textTransform:'uppercase' }}>Total</div>
                    <div style={{ fontFamily:'Montserrat', fontWeight: 700, fontSize: 22, color:'#22350A' }}>${price}.00</div>
                  </div>
                )}
              </div>

              <div style={{ display:'flex', gap: 10, marginTop: 18 }}>
                {[{n:'Visa',c:'#1a1f71'},{n:'Mastercard',c:'#eb001b'},{n:'M-Pesa',c:'#4caf50'}].map(m => (
                  <div key={m.n} style={{ padding:'10px 14px', borderRadius: 10, border:'1px solid rgba(34,53,10,.12)', fontFamily:'Montserrat', fontWeight: 700, fontSize: 12, color: m.c, background:'#fff', letterSpacing:'0.04em' }}>{m.n}</div>
                ))}
              </div>

              <div style={{ marginTop: 18, display:'grid', gridTemplateColumns:'1fr', gap: 14 }}>
                {fieldInput('cardName', 'Name on card', 'text', 'Ada Okoye')}
                <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
                  <label style={{ fontFamily:'Montserrat', fontSize: 11, letterSpacing:'0.18em', fontWeight: 600, color:'rgba(34,53,10,.6)', textTransform:'uppercase' }}>Card number</label>
                  <div style={{ position:'relative' }}>
                    <input value={form.cardNumber} placeholder="4242 4242 4242 4242"
                      onChange={(e) => {
                        let v = e.target.value.replace(/\D/g,'').slice(0,19);
                        v = v.replace(/(.{4})/g,'$1 ').trim();
                        setForm({ ...form, cardNumber: v });
                        if (errors.cardNumber) setErrors({ ...errors, cardNumber: null });
                      }}
                      style={{
                        width:'100%', padding:'13px 14px 13px 42px', borderRadius: 10,
                        border: `1px solid ${errors.cardNumber ? '#EA7F1D' : 'rgba(34,53,10,.15)'}`,
                        background:'#fff', fontFamily:'Inter, sans-serif', fontSize: 15, color:'#22350A', outline:'none',
                        fontVariantNumeric:'tabular-nums', letterSpacing:'0.04em',
                      }}
                    />
                    <span style={{ position:'absolute', left: 14, top:'50%', transform:'translateY(-50%)', color:'rgba(34,53,10,.4)' }}><IconCard size={18} /></span>
                  </div>
                  {errors.cardNumber && <span style={{ fontFamily:'Inter, sans-serif', fontSize: 12, color:'#EA7F1D' }}>{errors.cardNumber}</span>}
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 14 }}>
                  {fieldInput('cardExp', 'Expiry (MM/YY)', 'text', '08/29', {
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => { let v = e.target.value.replace(/[^\d]/g,'').slice(0,4); if (v.length > 2) v = v.slice(0,2) + '/' + v.slice(2); setForm(f => ({ ...f, cardExp: v })); if (errors.cardExp) setErrors((er: any) => ({ ...er, cardExp: null })); }
                  })}
                  {fieldInput('cardCvc', 'CVC', 'text', '123', {
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => { const v = e.target.value.replace(/\D/g,'').slice(0,4); setForm(f => ({ ...f, cardCvc: v })); if (errors.cardCvc) setErrors((er: any) => ({ ...er, cardCvc: null })); }
                  })}
                </div>
              </div>

              <div style={{ fontFamily:'Inter, sans-serif', fontSize: 12, color:'rgba(34,53,10,.55)', marginTop: 14, lineHeight: 1.5 }}>
                Payments are processed securely. We will only finalize the charge once final registration rates are confirmed. You can cancel at any time before then.
              </div>

              <StepFooter onBack={() => setStep(1)} onNext={next} nextLabel={`Pay $${price} & Confirm`} />
            </>
          )}

          {step === 3 && (
            <div style={{ padding: '20px 0', textAlign:'center' }}>
              <div style={{ width: 72, height: 72, borderRadius: 999, margin:'20px auto 24px', background: accent, color:'#22350A', display:'flex', alignItems:'center', justifyContent:'center' }}><IconCheck size={32} /></div>
              <div style={{ fontFamily:'Montserrat', fontSize: 11, letterSpacing:'0.22em', color:'#5C8727', fontWeight: 700, textTransform:'uppercase' }}>Confirmed</div>
              <h3 style={{ fontFamily:'Montserrat', fontWeight: 700, fontSize: 32, color:'#22350A', margin:'12px 0 8px', letterSpacing: -0.8 }}>You're on the list.</h3>
              <p style={{ fontFamily:'Inter, sans-serif', fontSize: 15, color:'rgba(34,53,10,.7)', maxWidth: 480, margin:'0 auto', lineHeight: 1.55 }}>
                A confirmation is on the way to <strong>{form.email}</strong>. We'll be in touch with invitation letters, travel details, and program updates as Pamoja V approaches.
              </p>
              <div style={{ display:'flex', gap: 10, justifyContent:'center', marginTop: 28 }}>
                <button onClick={onClose} style={{ border: 0, cursor:'pointer', padding:'14px 22px', borderRadius: 12, background:'#22350A', color: accent, fontFamily:'Montserrat', fontWeight: 700, fontSize: 13, letterSpacing:'0.08em', textTransform:'uppercase' }}>Back to the site</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StepTitle({ k, title, sub }: { k: string; title: string; sub: string }) {
  return (
    <div style={{ paddingRight: 40 }}>
      <div style={{ fontFamily:'Montserrat', fontSize: 11, letterSpacing:'0.22em', color:'#5C8727', fontWeight: 700, textTransform:'uppercase' }}>{k}</div>
      <h3 style={{ fontFamily:'Montserrat', fontWeight: 700, fontSize: 28, color:'#22350A', letterSpacing: -0.6, margin:'10px 0 6px' }}>{title}</h3>
      <p style={{ fontFamily:'Inter, sans-serif', fontSize: 13, color:'rgba(34,53,10,.65)', margin: 0, lineHeight: 1.5 }}>{sub}</p>
    </div>
  );
}

function StepFooter({ onBack, onNext, nextLabel }: { onBack?: () => void; onNext: () => void; nextLabel: string }) {
  return (
    <div style={{ marginTop: 22, display:'flex', justifyContent:'space-between', alignItems:'center', gap: 12 }}>
      {onBack ? <button onClick={onBack} style={{ border:'1px solid rgba(34,53,10,.15)', background:'transparent', cursor:'pointer', padding:'12px 20px', borderRadius: 12, fontFamily:'Montserrat', fontWeight: 600, fontSize: 13, color:'#22350A', letterSpacing:'0.06em', textTransform:'uppercase' }}>Back</button> : <span />}
      <button onClick={onNext} style={{ border: 0, cursor:'pointer', padding:'14px 24px', borderRadius: 12, background:'#EA7F1D', color:'#fff', fontFamily:'Montserrat', fontWeight: 700, fontSize: 13, letterSpacing:'0.08em', display:'inline-flex', alignItems:'center', gap: 10, textTransform:'uppercase' }}>
        {nextLabel} <IconArrow size={14} />
      </button>
    </div>
  );
}

export { RegisterModal };
