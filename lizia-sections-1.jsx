const { useState, useEffect, useRef } = React;

/* ── Scroll reveal hook ── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {if (e.isIntersecting) {el.classList.add('visible');obs.disconnect();}}, { threshold: 0.1, rootMargin: '-60px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── SECTION LABEL ── */
function SectionLabel({ text }) {
  return (
    <div className="glass-pill" style={{ marginBottom: 24 }}>
      <div className="pill-icon" style={{ height: 20, fontSize: "0px", lineHeight: "0", width: "0px", opacity: "0", borderRadius: "0px" }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0a0a1a" strokeWidth="3" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
      </div>
      <span className="mono" style={{ letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: "13px", fontWeight: "600", opacity: "2", fontFamily: "\"Inter Tight\"" }}>{text}</span>
    </div>);

}

/* ══════════════════ PROBLEMA ══════════════════ */
function Problema() {
  const ref = useReveal();
  const cards = [
  { icon: '📥', title: 'Mensajes sin responder acumulados.', desc: 'Entrás al WhatsApp del negocio y ya hay 30 mensajes sin leer. \nEntre consultas de stock, precios y envíos, no das abasto.' },
  { icon: '🔄', title: 'Siempre las mismas preguntas', desc: 'El 70% de las consultas son repetitivas.\n"¿Hacen envíos al interior?" \n"¿Aceptan Mercado Pago?" \n"¿Tienen talle M?" ' },
  { icon: '💸', title: 'Ventas que perdés fuera de horario', desc: 'El cliente preguntó a las 23hs. \nNadie respondió. A la mañana ya compró en otro lado.' },
  { icon: '👤', title: 'Todo depende de personas respondiendo', desc: 'Si la persona que maneja el WhatsApp no está disponible los mensajes quedan sin responder y las VENTAS SE FRENAN.' }];


  const iconSvgs = [
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a1a" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a1a" strokeWidth="2" strokeLinecap="round"><path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 014-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 01-4 4H3" /></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a1a" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a1a" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>];


  return (
    <section id="problema" className="section">
      <div className="container reveal" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SectionLabel text="Problema" />
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: 700, margin: '0 auto', width: "700px" }}>
            <span className="grad-text" style={{ fontSize: "60.44px" }}>Si vendés por WhatsApp, probablemente te pase esto</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto)', gap: 24, justifyContent: 'center' }}>
          {cards.map((c, i) =>
          <div key={i} className="glass-card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 16, justifyContent: "flex-start", alignItems: "center", borderRadius: "50px", height: "329.2px", width: "329.2px" }}>
              <div className="icon-box" style={{ textAlign: "center", backgroundPosition: "center center" }}>{iconSvgs[i]}</div>
              <h3 style={{ fontWeight: 700, fontSize: 18, textAlign: "center" }}>{c.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.6, textAlign: "center" }}>{c.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ══════════════════ STATS ══════════════════ */
function Stats() {
  const ref = useReveal();
  const stats = [
  { value: '3s', label: 'Tiempo de respuesta' },
  { value: '24/7', label: 'Disponibilidad' },
  { value: '98%', label: 'Tasa de resolución' },
  { value: '+500', label: 'Conversaciones mensuales' }];

  return (
    <div className="reveal" ref={ref} style={{
      background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)',
      padding: '48px 24px'
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32, textAlign: 'center' }}>
        {stats.map((s, i) =>
        <div key={i}>
            <div className="grad-text-cp" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>{s.value}</div>
            <div className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.label}</div>
          </div>
        )}
      </div>
    </div>);

}

/* ══════════════════ DIAGNÓSTICO ══════════════════ */
function Diagnostico() {
  const ref = useReveal();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
  { q: '¿Cuántas consultas recibís por WhatsApp por día?', opts: ['Menos de 20', '20 a 50', '50 a 100', 'Más de 100'] },
  { q: '¿Cuánto tardás en promedio en responder?', opts: ['Menos de 5 min', '5 a 30 min', 'Más de 1 hora', 'A veces no respondo'] },
  { q: '¿Qué porcentaje de consultas son preguntas repetitivas?', opts: ['Menos del 30%', '30% a 60%', 'Más del 60%'] },
  { q: '¿Perdiste alguna venta por no responder a tiempo?', opts: ['Sí, varias', 'Alguna vez', 'No estoy seguro', 'No'] }];


  const handleSelect = (optIdx) => {
    const newAnswers = [...answers, optIdx];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const score = Math.min(98, 60 + answers.reduce((a, v) => a + v * 8, 0));
  const reset = () => {setStep(0);setAnswers([]);setShowResult(false);};

  return (
    <section id="diagnostico" className="section">
      <div className="container reveal" ref={ref}>
        <div style={{
          maxWidth: 700, margin: '0 auto',
          background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: 'clamp(32px, 5vw, 56px)'
        }}>
          {!showResult ?
          <>
              <h2 style={{ fontWeight: 800, marginBottom: 8, lineHeight: 1.1, textWrap: 'pretty', textAlign: "center", letterSpacing: '-0.03em' }}><span className="grad-text" style={{ fontSize: "60.44px" }}>Evaluá cuánto podrías ganar con Lizia</span></h2>
              <div className="progress-bar" style={{ margin: '24px 0 32px' }}>
                <div className="progress-fill" style={{ width: `${(step + 1) / questions.length * 100}%` }}></div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginBottom: 8 }} className="mono">
                Pregunta {step + 1} de {questions.length}
              </p>
              <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 24, lineHeight: 1.4 }}>{questions[step].q}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {questions[step].opts.map((o, i) =>
              <div key={i} className="diag-option" onClick={() => handleSelect(i)}
              style={answers[step] === i ? { borderColor: 'var(--neural-cyan)', background: 'rgba(34,211,238,0.08)' } : {}}>
                {o}</div>
              )}
              </div>
            </> :

          <div style={{ textAlign: 'center' }}>
              <div className="grad-text-cp" style={{ fontSize: 72, fontWeight: 800, marginBottom: 16 }}>{score}%</div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginBottom: 16 }} className="mono">POTENCIAL DE MEJORA</p>
              <p style={{ fontSize: 17, lineHeight: 1.6, marginBottom: 32, textWrap: 'pretty', fontWeight: "500", color: "rgb(252, 252, 252)" }}>Tu negocio podría estar ganando mucho más.
Lizia podría responder gran parte de estas consultas en segundos.
            </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://wa.me/5491165295937?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Lizia" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
                  <div className="btn-wrap"><button className="btn-gradient">Contactanos →</button></div>
                </a>
                <button onClick={reset} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 9999, padding: '12px 24px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontFamily: 'Inter Tight', fontSize: 14 }}>
                  Repetir diagnóstico
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </section>);

}

window.SectionLabel = SectionLabel;
window.useReveal = useReveal;
window.Problema = Problema;
window.Stats = Stats;
window.Diagnostico = Diagnostico;