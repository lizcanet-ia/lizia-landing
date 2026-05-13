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
  { name: 'WhatsApp', svg: `<svg viewBox="0 0 175.216 175.552" width="32" height="32"><defs><linearGradient id="wa" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"/><stop offset="1" stop-color="#23b33a"/></linearGradient></defs><path d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.89 60.89 0 008.413 30.846L25.2 150.516l33.733-8.818a61.2 61.2 0 0029.229 7.445h.026c33.725 0 61.154-27.427 61.17-61.14a60.75 60.75 0 00-17.89-43.25 60.72 60.72 0 00-43.284-17.527" fill="url(#wa)"/><path fill="#fff" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043a6.76 6.76 0 00-4.894 2.3c-1.682 1.842-6.425 6.28-6.425 15.317 0 9.037 6.577 17.77 7.497 18.994.92 1.224 12.69 20.32 31.35 27.67 15.518 6.112 18.686 4.897 22.07 4.592 3.384-.306 10.92-4.465 12.46-8.786 1.54-4.321 1.54-8.028 1.077-8.804-.46-.776-1.684-1.224-3.524-2.143s-10.92-5.39-12.6-6.003c-1.684-.613-2.908-.92-4.132.92s-4.744 5.998-5.816 7.222c-1.072 1.224-2.144.918-3.984.306s-7.772-2.863-14.8-9.13c-5.472-4.878-9.168-10.905-10.24-12.745s-.114-2.836.808-3.751c.828-.825 1.838-2.148 2.756-3.22a12.52 12.52 0 001.836-3.065 3.38 3.38 0 00-.153-3.22c-.46-.918-4.048-9.985-5.648-13.635"/></svg>` },
  { name: 'Mercado Pago', svg: `<svg viewBox="0 0 48 48" width="32" height="32"><rect width="48" height="48" rx="10" fill="#00b1ea"/><path d="M14 28c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="19" cy="28" r="3" fill="#fff"/><circle cx="29" cy="28" r="3" fill="#fff"/><path d="M16 20c2-3 5-5 8-5s6 2 8 5" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>` },
  { name: 'Tarjetas de Crédito', svg: `<svg viewBox="0 0 48 36" width="40" height="30" fill="none"><rect width="48" height="36" rx="6" fill="#1a1a2e" stroke="rgba(255,255,255,0.15)" stroke-width="1"/><rect x="0" y="8" width="48" height="7" fill="rgba(255,255,255,0.2)"/><rect x="5" y="22" width="14" height="3" rx="1.5" fill="rgba(255,255,255,0.3)"/><rect x="5" y="28" width="8" height="2" rx="1" fill="rgba(255,255,255,0.15)"/><circle cx="36" cy="25" r="5" fill="#EB001B" opacity="0.9"/><circle cx="42" cy="25" r="5" fill="#F79E1B" opacity="0.9"/></svg>` },
  { name: 'Catálogo de productos', svg: `<svg viewBox="0 0 48 48" width="32" height="32"><rect width="48" height="48" rx="10" fill="rgba(168,85,247,0.85)"/><rect x="8" y="8" width="14" height="14" rx="3" fill="none" stroke="#fff" stroke-width="2"/><rect x="26" y="8" width="14" height="14" rx="3" fill="none" stroke="#fff" stroke-width="2"/><rect x="8" y="26" width="14" height="14" rx="3" fill="none" stroke="#fff" stroke-width="2"/><rect x="26" y="26" width="14" height="14" rx="3" fill="none" stroke="#fff" stroke-width="2"/><circle cx="15" cy="15" r="2.5" fill="#fff" opacity="0.8"/><circle cx="33" cy="15" r="2.5" fill="#fff" opacity="0.8"/><circle cx="15" cy="33" r="2.5" fill="#fff" opacity="0.8"/><circle cx="33" cy="33" r="2.5" fill="#fff" opacity="0.8"/></svg>` },
  { name: 'Andreani', svg: `<svg viewBox="0 0 48 48" width="32" height="32"><rect width="48" height="48" rx="10" fill="#E8422F"/><path d="M14 34V18l10-6 10 6v16" fill="none" stroke="#fff" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/><path d="M20 34v-8h8v8" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/><path d="M10 34h28" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>` },
  { name: 'Correo Argentino', svg: `<svg viewBox="0 0 48 48" width="32" height="32"><rect width="48" height="48" rx="10" fill="#003B7A"/><rect x="8" y="14" width="32" height="20" rx="3" fill="none" stroke="#FFD700" stroke-width="2"/><path d="M8 17l16 10 16-10" fill="none" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="8" r="3" fill="#FFD700"/></svg>` },
  { name: 'Gmail', svg: `<svg viewBox="0 0 48 48" width="32" height="32"><path d="M6 12a4 4 0 014-4h28a4 4 0 014 4v24a4 4 0 01-4 4H10a4 4 0 01-4-4V12z" fill="#fff"/><path d="M6 12l18 13 18-13" fill="none" stroke="#EA4335" stroke-width="2.5"/><path d="M6 12v4l18 13 18-13v-4" fill="#EA4335" opacity="0.15"/><rect x="6" y="8" width="36" height="32" rx="4" fill="none" stroke="#EA4335" stroke-width="2"/></svg>` },
  { name: 'Google Calendar', svg: `<svg viewBox="0 0 48 48" width="32" height="32"><rect x="6" y="10" width="36" height="32" rx="4" fill="#fff"/><rect x="6" y="10" width="36" height="10" rx="4" fill="#4285F4"/><rect x="6" y="10" width="36" height="32" rx="4" fill="none" stroke="#4285F4" stroke-width="2"/><line x1="14" y1="6" x2="14" y2="14" stroke="#4285F4" stroke-width="3" stroke-linecap="round"/><line x1="34" y1="6" x2="34" y2="14" stroke="#4285F4" stroke-width="3" stroke-linecap="round"/><text x="24" y="35" text-anchor="middle" fill="#4285F4" font-family="Inter Tight,sans-serif" font-weight="800" font-size="14">31</text></svg>` },
  { name: 'Google Sheets', svg: `<svg viewBox="0 0 48 48" width="32" height="32"><path d="M12 4h18l10 10v28a4 4 0 01-4 4H12a4 4 0 01-4-4V8a4 4 0 014-4z" fill="#0F9D58"/><path d="M30 4l10 10H34a4 4 0 01-4-4V4z" fill="#087045"/><rect x="12" y="20" width="24" height="20" rx="1" fill="#fff" opacity="0.9"/><line x1="24" y1="20" x2="24" y2="40" stroke="#0F9D58" stroke-width="1.5"/><line x1="12" y1="27" x2="36" y2="27" stroke="#0F9D58" stroke-width="1.5"/><line x1="12" y1="34" x2="36" y2="34" stroke="#0F9D58" stroke-width="1.5"/></svg>` },
  ];

  const LogoItem = ({ item }) =>
  <div className="logo-item">
      <span dangerouslySetInnerHTML={{ __html: item.svg }}></span>
      <span className="logo-item-name">{item.name}</span>
    </div>;

  return (
    <div className="logo-cloud-section">
      <div className="logo-cloud-inner">
        <p className="logo-cloud-label">INTEGRAMOS CON TUS HERRAMIENTAS</p>
        <div className="logo-cloud-divider hide-mobile"></div>
        <div className="logo-cloud-slider-mask">
          <div className="slider-track">
            {[...logoData, ...logoData, ...logoData].map((item, i) => <LogoItem key={i} item={item} />)}
          </div>
        </div>
      </div>
    </div>);

}

window.Hero = Hero;
window.LogoCloud = LogoCloud;