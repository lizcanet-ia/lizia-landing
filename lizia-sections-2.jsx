const { useState } = React;

/* ══════════════════ SOLUCIÓN ══════════════════ */
function Solucion() {
  const ref = useReveal();
  const [expanded, setExpanded] = useState(null);

  const nodes = [
  { color: 'var(--neural-cyan)', label: 'El cliente escribe por WhatsApp', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
    desc: 'Captura automática desde WhatsApp Business. El cliente manda "tienen la remera negra en L?" y el sistema lo procesa al instante.' },
  { color: 'var(--neural-purple)', label: 'Lizia interpreta y busca en tu catálogo', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2a8 8 0 018 8c0 3.4-2.1 6.4-5 7.6V22h-6v-4.4C6.1 16.4 4 13.4 4 10a8 8 0 018-8z" /></svg>,
    desc: 'Cruza la consulta con tu catálogo, stock en tiempo real y reglas de negocio. Sabe qué recomendar, qué hay disponible y cuánto sale con envío.' },
  { color: 'var(--neural-pink)', label: 'Responde con precio, stock y medios de pago', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>,
    desc: 'Responde en segundos con la info correcta. Si el cliente quiere comprar, le facilita los medios de pago. Si es algo complejo, lo escala a tu equipo.' }];


  return (
    <section id="solucion" className="section">
      <div className="container reveal" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SectionLabel text="Arquitectura // Solución" />
          <h2 style={{ fontWeight: 800, letterSpacing: '-0.03em', maxWidth: 700, margin: '0 auto', width: '100%' }}>
            <span className="grad-text section-title" style={{ lineHeight: '1.1', textAlign: 'center' }}>Así funciona Lizia</span>
          </h2>
        </div>

        {/* Nodes flow */}
        <div className="nodes-flow" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginBottom: 48, gap: 0, margin: '0px 0px 78px', justifyContent: 'center' }}>
          {nodes.map((n, i) =>
          <React.Fragment key={i}>
              <div onClick={() => setExpanded(expanded === i ? null : i)}
            style={{
              width: 110, textAlign: 'center', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12
            }}>
                <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)',
                border: `1px solid color-mix(in srgb, ${n.color} 30%, transparent)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: n.color, transition: 'box-shadow 0.4s, transform 0.4s',
                boxShadow: expanded === i ? `0 0 30px color-mix(in srgb, ${n.color} 30%, transparent)` : 'none',
                transform: expanded === i ? 'scale(1.1)' : 'scale(1)'
              }}>{n.icon}</div>
                <p style={{ fontSize: 13, lineHeight: 1.4, color: "rgb(250, 250, 250)", fontWeight: "600" }}>{n.label}</p>
              </div>
              {i < 2 && <div className="connector hide-mobile" style={{ height: 3, opacity: 0.8, minWidth: 50, background: 'linear-gradient(90deg, var(--neural-cyan), var(--neural-purple), var(--neural-pink))', boxShadow: '0 0 12px rgba(34,211,238,0.4)' }}></div>}
              {i < 2 && <div className="connector-v-mobile" style={{ display: 'none' }}></div>}
            </React.Fragment>
          )}
        </div>

        {/* Expanded description */}
        {expanded !== null &&
        <div className="glass-card" style={{ maxWidth: 600, margin: '0 auto 48px', padding: 32, textAlign: 'center', animation: 'heroFadeIn 0.4s ease-out' }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: 15 }}>{nodes[expanded].desc}</p>
          </div>
        }



        {/* Capabilities */}
        <div className="glass-card" style={{ maxWidth: 600, margin: '0 auto 48px', padding: 'clamp(20px, 4vw, 32px)', width: '100%' }}>
          <h3 style={{ marginBottom: 20, textAlign: "center", fontWeight: "500", fontSize: "0px", lineHeight: "0", width: "0px", opacity: "0" }}>LO QUE HACE POR TU NEGOCIO</h3>
          {['Responde preguntas de stock y precios', 'Recomienda productos del catálogo', 'Envía medios de pago', 'Gestiona consultas de envío (AMBA e interior)', 'Organiza pedidos y los escala a tu equipo'].map((c, i) =>
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none', fontWeight: "700", fontSize: "18px" }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--neural-cyan)', flexShrink: 0 }}></div>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15 }}>{c}</span>
            </div>
          )}
        </div>


        {/* Stats bar */}
        <div style={{
          background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)',
          padding: '40px 24px', borderRadius: 20, marginBottom: 48
        }}>
          <div className="grid-stats-4" style={{ maxWidth: 1000, margin: '0 auto' }}>
            {[
            { value: '3s', label: 'Tiempo de respuesta' },
            { value: '24/7', label: 'Disponibilidad' },
            { value: '98%', label: 'Tasa de resolución' },
            { value: '+500', label: 'Conversaciones mensuales' }].
            map((s, i) =>
            <div key={i}>
                <div className="grad-text-cp" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>{s.value}</div>
                <div className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            )}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="https://wa.me/5491165295937?text=Hola%2C%20quiero%20una%20consultoria%20para%20evaluar%20si%20Lizia%20aplica%20a%20mi%20negocio" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
            <div className="btn-wrap"><button className="btn-gradient">Solicitá consultoría sin costo →</button></div>
          </a>
        </div>
      </div>
    </section>);

}

/* ══════════════════ CASOS DE USO ══════════════════ */
function Casos() {
  const ref = useReveal();
  const cases = [
  { title: 'Indumentaria y moda', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a1a" strokeWidth="2" strokeLinecap="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg>,
    before: 'Respondemos talle por talle, color por color, todo manual',
    after: 'El asistente responde stock, talle, precio y manda opciones de pago en 3 segundos' },
  { title: 'Suplementos y salud', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a1a" strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" /></svg>,
    before: 'Nos preguntan lo mismo 50 veces por día: dosis, ingredientes, envíos',
    after: 'Lizia responde con la info técnica exacta y sugiere productos complementarios' },
  { title: 'Accesorios y electrónica', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a1a" strokeWidth="2" strokeLinecap="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
    before: 'Los clientes preguntan compatibilidad, garantía, formas de pago — todo manual',
    after: 'El asistente cruza compatibilidad, informa garantía y cierra la venta' },
  { title: 'Tiendas con catálogo grande (+200 SKUs)', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a1a" strokeWidth="2" strokeLinecap="round"><path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /></svg>,
    before: 'Imposible que alguien se acuerde de todo el catálogo para responder rápido',
    after: 'Lizia busca en todo el catálogo al instante y recomienda lo más relevante' }];


  return (
    <section id="casos" className="section">
      <div className="container reveal" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SectionLabel text="Casos de uso" />
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            <span className="grad-text section-title">Aplica a todo negocio que reciba consultas online</span>
          </h2>
        </div>
        <div className="grid-2col" style={{ textAlign: 'left', margin: '60px auto', maxWidth: 900 }}>
          {cases.map((c, i) =>
          <div key={i} className="glass-card" style={{ padding: 'clamp(20px, 4vw, 32px)', display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'left', alignItems: 'center', justifyContent: 'flex-start', borderRadius: 'clamp(24px, 5vw, 50px)' }}>
              <div className="icon-box">{c.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: 17 }}>{c.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, fontWeight: 600, flexShrink: 0, marginTop: 2 }}>ANTES</span>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.5, fontStyle: 'italic' }}>"{c.before}"</p>
                </div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--neural-cyan)', fontSize: 13, fontWeight: 600, flexShrink: 0, marginTop: 2 }}>DESPUÉS</span>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.5 }}>{c.after}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ══════════════════ PROCESO ══════════════════ */
function Proceso() {
  const ref = useReveal();
  const steps = [
  { n: '01', title: 'Evaluamos cómo funciona tu atención actual', desc: 'Revisamos tu catálogo, tus consultas más frecuentes y cómo operás hoy por WhatsApp.' },
  { n: '02', title: 'Entrenamos a tu asistente', desc: 'Cargamos tu catálogo, precios, reglas de envío y el tono con el que hablás a tus clientes.' },
  { n: '03', title: 'Tu WhatsApp responde solo', desc: 'El asistente empieza a responder consultas. Vos te dedicás a la estrategia de tu negocio.' }];


  return (
    <section className="section">
      <div className="container reveal" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SectionLabel text="Implementación" />
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            <span className="grad-text section-title">Empezar es más simple de lo que parece</span>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
          {steps.map((s, i) =>
          <React.Fragment key={i}>
              <div style={{ flex: '1 1 260px', maxWidth: 340, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--neural-cyan), var(--neural-purple))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: 20, color: 'var(--neural-base)',
                boxShadow: '0 0 24px var(--glow-cyan)'
              }}>{s.n}</div>
                <div className="glass-card" style={{ padding: 'clamp(20px, 4vw, 28px)', width: '100%', minHeight: 183 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 12, color: "rgb(190, 141, 241)" }}>{s.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgb(252, 252, 252)" }}>{s.desc}</p>
                </div>
              </div>
              {i < 2 && <div className="connector hide-mobile" style={{ alignSelf: 'center', marginTop: -40 }}></div>}
            </React.Fragment>
          )}
        </div>
      </div>
    </section>);

}

window.Solucion = Solucion;
window.Casos = Casos;
window.Proceso = Proceso;