const { useEffect, useRef } = React;

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  }, []);

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>


      {/* Content — on top of video */}
      <div style={{
        position: 'relative', zIndex: 20, textAlign: 'center', maxWidth: 900,
        margin: '0 auto', padding: '0 24px', paddingTop: 'clamp(140px, 22vh, 220px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28
      }}>
        {/* Pill */}
        <div className="glass-pill hero-anim" style={{ animationDelay: '0.2s', fontSize: "0px", fontWeight: "100", gap: "0px", borderRadius: "0px", width: "0px", height: "0px", opacity: "10000", padding: "0px", lineHeight: "0", letterSpacing: "0px", borderWidth: "0px" }}>
          <div className="pill-icon" style={{ fontWeight: "100", lineHeight: "0", width: "0px", height: "0px", opacity: "10000", borderRadius: "0px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0a1a" strokeWidth="2.5" strokeLinecap="round" style={{ width: "0px", height: "0px", strokeWidth: "0px", opacity: "100" }}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
          </div>
          <span style={{ letterSpacing: '0.01em', fontSize: "16px", fontWeight: "900", color: "rgb(255, 255, 255)" }}></span>
        </div>

        {/* H1 */}
        <h1 className="hero-anim" style={{ animationDelay: '0.4s', letterSpacing: '-0.05em', lineHeight: 0.92, fontWeight: 800 }}>
          <span style={{ display: 'block', color: '#fff', fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}>Tu negocio vende.</span>
          <span className="grad-text" style={{ display: 'block', fontSize: 'clamp(2.8rem, 8vw, 6.5rem)', marginTop: 4 }}>Lizia responde.</span>
        </h1>

        {/* Sub */}
        <p className="hero-anim" style={{
          animationDelay: '0.6s',
          fontSize: 'clamp(15px, 1.8vw, 19px)', maxWidth: 580, lineHeight: 1.65, textWrap: 'pretty', color: "rgb(225, 224, 224)"
        }}>Automatizá la atención de tu e-commerce por WhatsApp. 
Respondé consultas, cerrá ventas y gestioná pedidos.
Sin que suene a robot.</p>

        {/* CTA */}
        <div className="hero-anim" style={{ animationDelay: '0.8s', marginTop: 8 }}>
          <a href="#diagnostico" style={{ textDecoration: 'none' }}>
            <div className="btn-wrap">
              <button className="btn-gradient">
                Calculá cuanto ganarias con Lizia
                <span style={{
                  width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.9)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neural-base)" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </span>
              </button>
            </div>
          </a>
        </div>

        {/* Spacer to push down */}
        <div style={{ height: 'clamp(60px, 10vh, 120px)' }}></div>
      </div>

      <style>{`
        .hero-anim {
          opacity: 0;
          animation: heroFadeIn 0.8s ease-out forwards;
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>);

}

function LogoCloud() {
  const logoData = [
  { name: 'WhatsApp', svg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>` },
  { name: 'Mercado Pago', svg: `<svg viewBox="0 0 24 24" width="28" height="28"><rect width="24" height="24" rx="4" fill="#00b1ea"/><text x="12" y="16" text-anchor="middle" fill="#fff" font-family="Inter Tight,sans-serif" font-weight="800" font-size="12">MP</text></svg>` },
  { name: 'Tarjetas de Crédito', svg: `<svg viewBox="0 0 28 20" width="36" height="26" fill="none"><rect width="28" height="20" rx="3" fill="rgba(255,255,255,0.12)"/><rect x="0" y="5" width="28" height="4" fill="rgba(255,255,255,0.2)"/><rect x="3" y="13" width="8" height="2" rx="1" fill="rgba(255,255,255,0.25)"/><rect x="14" y="13" width="4" height="2" rx="1" fill="rgba(255,255,255,0.15)"/></svg>` },
  { name: 'Catálogo de productos', svg: `<svg viewBox="0 0 24 24" width="28" height="28"><rect width="24" height="24" rx="4" fill="rgba(168,85,247,0.8)"/><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><circle cx="7" cy="7" r="1.5" fill="#fff" opacity="0.7"/><circle cx="17" cy="7" r="1.5" fill="#fff" opacity="0.7"/><circle cx="7" cy="17" r="1.5" fill="#fff" opacity="0.7"/><circle cx="17" cy="17" r="1.5" fill="#fff" opacity="0.7"/></svg>` },
  { name: 'Andreani', svg: `<svg viewBox="0 0 24 24" width="28" height="28"><circle cx="12" cy="12" r="11" fill="#E8422F"/><text x="12" y="16" text-anchor="middle" fill="#fff" font-family="Inter Tight,sans-serif" font-weight="800" font-size="11">A</text></svg>` },
  { name: 'Correo Argentino', svg: `<svg viewBox="0 0 24 24" width="28" height="28"><circle cx="12" cy="12" r="11" fill="#003B7A"/><text x="12" y="16" text-anchor="middle" fill="#FFD700" font-family="Inter Tight,sans-serif" font-weight="800" font-size="10">CA</text></svg>` },
  { name: 'Gmail', svg: `<svg viewBox="0 0 24 24" width="28" height="28"><rect width="24" height="24" rx="3" fill="#EA4335"/><path d="M3 7l9 6 9-6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="#fff" stroke-width="1.5"/></svg>` },
  { name: 'Google Calendar', svg: `<svg viewBox="0 0 24 24" width="28" height="28"><rect width="24" height="24" rx="3" fill="#4285F4"/><rect x="5" y="8" width="14" height="12" rx="1" fill="#fff" opacity="0.9"/><rect x="5" y="4" width="14" height="6" rx="1" fill="#1967D2"/><line x1="8" y1="3" x2="8" y2="6" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><line x1="16" y1="3" x2="16" y2="6" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><text x="12" y="17" text-anchor="middle" fill="#1967D2" font-family="Inter Tight,sans-serif" font-weight="800" font-size="7">31</text></svg>` },
  { name: 'Google Sheets', svg: `<svg viewBox="0 0 24 24" width="28" height="28"><rect width="24" height="24" rx="3" fill="#0F9D58"/><rect x="5" y="4" width="14" height="16" rx="1" fill="#fff" opacity="0.9"/><line x1="12" y1="7" x2="12" y2="17" stroke="#0F9D58" stroke-width="1"/><line x1="7" y1="10" x2="17" y2="10" stroke="#0F9D58" stroke-width="1"/><line x1="7" y1="14" x2="17" y2="14" stroke="#0F9D58" stroke-width="1"/></svg>` },
  ];

  const LogoItem = ({ item }) =>
  <div className="logo-item">
      <span dangerouslySetInnerHTML={{ __html: item.svg }}></span>
      <span className="logo-item-name">{item.name}</span>
    </div>;

  return (
    <div className="logo-cloud-section">
      <div className="logo-cloud-inner">
        <p className="logo-cloud-label hide-mobile">INTEGRAMOS CON TUS HERRAMIENTAS</p>
        <div className="logo-cloud-divider hide-mobile"></div>
        <div className="logo-cloud-slider-mask">
          <div className="slider-track">
            {[...logoData, ...logoData].map((item, i) => <LogoItem key={i} item={item} />)}
          </div>
        </div>
      </div>
    </div>);

}

window.Hero = Hero;
window.LogoCloud = LogoCloud;