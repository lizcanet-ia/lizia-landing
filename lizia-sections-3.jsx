const { useState } = React;

/* ══════════════════ CRM UPSELL ══════════════════ */
function CrmUpsell() {
  const ref = useReveal();
  return (
    <section className="section">
      <div className="container reveal" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SectionLabel text="Integraciones" />
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            <span className="grad-text" style={{ fontSize: 'clamp(1.6rem, 5.5vw, 55.44px)' }}>Lizia se conecta a tus herramientas.</span>
          </h2>
        </div>
        <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, alignItems: 'stretch', justifyContent: 'center', position: 'relative', maxWidth: 900, margin: '0 auto' }}>
          {/* Card 1 */}
          <div className="glass-card grad-border-top" style={{ padding: 'clamp(20px, 4vw, 32px)', width: '100%', minHeight: 280 }}>
            <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 12 }}>Integración con tu CRM</h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>Nos conectamos con cualquier CRM que uses.
Tu catálogo se sincroniza automáticamente.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {['Tiendanube', 'Shopify', 'WooCommerce', 'HubSpot'].map((l) =>
              <span key={l} style={{ padding: '8px 16px', borderRadius: 8, color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 500, opacity: "1", border: "1px solid rgba(255, 255, 255, 0.06)" }}>{l}</span>
              )}
            </div>
          </div>

          {/* Divider O */}
          <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', zIndex: 5, display: 'none' }} className="or-divider">
            <div className="glass-pill" style={{ fontSize: "0px", lineHeight: "0", width: "0px", height: "0px", gap: "0px", padding: "0px 0px 0px 20px", borderWidth: "0px 0px 0px 0.8px", borderRadius: "0px" }}>
              <span className="grad-text-cp" style={{ fontWeight: 700, fontSize: 15 }}>O</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card grad-border-top grad-border-top-pink" style={{ padding: 'clamp(20px, 4vw, 32px)', width: '100%', minHeight: 280 }}>
            <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 12 }}>CRM Lizia</h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>Si no tenés CRM, te hosteamos uno propio.
Cargás tu catálogo, gestionás clientes y tenés todo en un solo lugar.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Panel de control', 'Historial de conversaciones', 'Gestión de pedidos', 'Métricas de atención'].map((f, i) =>
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--neural-purple)', flexShrink: 0 }}></div>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>{f}</span>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
      <style>{`@media(min-width:769px){.or-divider{display:flex !important}}`}</style>
    </section>);

}

/* ══════════════════ FAQ ══════════════════ */
function FAQ() {
  const ref = useReveal();
  const [open, setOpen] = useState(null);
  const items = [
  { q: '¿Cómo funciona exactamente?', a: 'Conectamos un asistente inteligente a tu WhatsApp Business. Se entrena con tu catálogo, precios y reglas de negocio. Cuando un cliente escribe, responde automáticamente con la información correcta.' },
  { q: '¿Cuánto tarda la implementación?', a: 'Entre 5 y 10 días hábiles dependiendo del tamaño de tu catálogo.' },
  { q: '¿Cumple con las políticas de WhatsApp?', a: 'Sí. Usamos la API oficial de WhatsApp Business. Todo dentro de las reglas de Meta.' },
  { q: '¿Qué pasa con los datos de mis clientes?', a: 'Tus datos son tuyos. No los compartimos, no los usamos para otra cosa. Cumplimos con todas las normativas de protección de datos.' },
  { q: '¿Cuánto sale?', a: 'Depende del volumen de consultas y las integraciones que necesites. Arrancamos con una consultoría gratuita para darte un presupuesto preciso.' },
  { q: '¿Se puede integrar con Mercado Pago y Tiendanube?', a: 'Sí. Nos integramos con Mercado Pago para links de cobro y con Tiendanube para sincronizar catálogo y stock en tiempo real.' }];


  return (
    <section id="faq" className="section">
      <div className="container reveal" ref={ref}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SectionLabel text="Preguntas frecuentes" />
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            <span className="grad-text" style={{ fontSize: 'clamp(1.6rem, 5.5vw, 55.44px)' }}>¿Tenés dudas?
Selecciona algunas de ellas.</span>
          </h2>
        </div>
        <div className="glass-card" style={{ maxWidth: 750, margin: '0 auto', padding: 'clamp(16px, 4vw, 36px)', display: 'flex', flexDirection: 'column', gap: 12, minHeight: 400 }}>
          {items.map((it, i) => <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}
          style={{ ...(open === i ? { background: 'rgba(255,255,255,0.02)' } : {}), textAlign: "center", borderWidth: "0.8px", width: '100%' }}>
              <div className="faq-header" onClick={() => setOpen(open === i ? null : i)} style={{ alignItems: "center", padding: '18px clamp(14px, 3vw, 28px)', justifyContent: "center", width: '100%' }}>
                <span style={{ fontWeight: 600, fontSize: 16 }}>{it.q}</span>
                <span style={{ fontSize: 20, transition: 'transform 0.3s', transform: open === i ? 'rotate(45deg)' : 'rotate(0)', color: "rgb(252, 252, 252)", textAlign: "justify" }}>+</span>
              </div>
              <div className="faq-body">
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.7 }}>{it.a}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ══════════════════ CTA FINAL ══════════════════ */
function CtaFinal() {
  const ref = useReveal();
  return (
    <section id="contacto" className="section" style={{ paddingBottom: 80 }}>
      <div className="container reveal" ref={ref} style={{ textAlign: 'center', maxWidth: 700 }}>
        <div className="glass-pill" style={{ marginBottom: 24, fontSize: "18px" }}>
          <span style={{ color: "rgb(255, 255, 255)", opacity: "2", fontFamily: "\"Inter Tight\"", fontWeight: "600", fontSize: "18px" }}>Asistente virtual Lizia.
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24 }}>
          <span className="grad-text" style={{ fontSize: 'clamp(1.8rem, 6vw, 60.44px)' }}>¿Listo para que tu negocio venda mientras dormís?</span>
        </h2>
        <p style={{ marginBottom: 40, lineHeight: 1.6, color: "rgb(255, 255, 255)", fontSize: "19px", fontWeight: "400" }}>
          La tecnología ya está lista. Solo falta tu decisión para ganar más ventas.
        </p>
        <a href="https://wa.me/5491165295937?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Lizia" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
          <div className="btn-wrap"><button className="btn-gradient" style={{ fontSize: 18, padding: '18px 40px' }}>Contactanos →</button></div>
        </a>
        <p style={{ marginTop: 16, color: "rgb(255, 255, 255)", fontSize: "13px" }}>Respuesta en menos de 24 horas.</p>
      </div>

    </section>);
}

/* ══════════════════ FOOTER ══════════════════ */
function Footer() {
  return (
    <footer style={{ background: 'rgba(10,10,26,0.5)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '32px 24px' }}>
      <div className="footer-inner" style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontWeight: 800, fontSize: 18, color: '#fff' }}>Lizia</span>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'linear-gradient(135deg, var(--neural-cyan), var(--neural-purple))', display: 'inline-block' }}></span>
        </div>
        <p style={{ color: "rgb(255, 255, 255)", fontWeight: "500", fontSize: "14px", opacity: "3" }}>© 2025 Lizia. Automatización inteligente y Estrategia Digital para negocios.</p>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Términos', 'Privacidad', 'Contacto'].map((l) =>
          <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: 13 }}>{l}</a>
          )}
        </div>
      </div>
    </footer>);

}

window.CrmUpsell = CrmUpsell;
window.FAQ = FAQ;
window.CtaFinal = CtaFinal;
window.Footer = Footer;