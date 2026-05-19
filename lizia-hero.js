var _heroDestructure = React;
var useEffect = _heroDestructure.useEffect;
var useRef = _heroDestructure.useRef;

function Hero() {
  var videoRef = useRef(null);

  useEffect(function () {
    var v = videoRef.current;
    if (v) v.play().catch(function () {});
  }, []);

  return React.createElement('section', {
    id: 'hero',
    style: { position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }
  },
    /* Content — on top of video */
    React.createElement('div', {
      style: {
        position: 'relative', zIndex: 20, textAlign: 'center', maxWidth: 900,
        margin: '0 auto', padding: '0 24px', paddingTop: 'clamp(140px, 22vh, 220px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28
      }
    },
      /* Pill */
      React.createElement('div', {
        className: 'glass-pill hero-anim',
        style: { animationDelay: '0.2s', fontSize: '0px', fontWeight: '100', gap: '0px', borderRadius: '0px', width: '0px', height: '0px', opacity: '10000', padding: '0px', lineHeight: '0', letterSpacing: '0px', borderWidth: '0px' }
      },
        React.createElement('div', {
          className: 'pill-icon',
          style: { fontWeight: '100', lineHeight: '0', width: '0px', height: '0px', opacity: '10000', borderRadius: '0px' }
        },
          React.createElement('svg', {
            width: '14', height: '14', viewBox: '0 0 24 24', fill: 'none',
            stroke: '#0a0a1a', strokeWidth: '2.5', strokeLinecap: 'round',
            style: { width: '0px', height: '0px', strokeWidth: '0px', opacity: '100' }
          },
            React.createElement('path', { d: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' })
          )
        ),
        React.createElement('span', {
          style: { letterSpacing: '0.01em', fontSize: '16px', fontWeight: '900', color: 'rgb(255, 255, 255)' }
        })
      ),

      /* H1 */
      React.createElement('h1', {
        className: 'hero-anim',
        style: { animationDelay: '0.4s', letterSpacing: '-0.05em', lineHeight: 0.92, fontWeight: 800 }
      },
        React.createElement('span', {
          style: { display: 'block', color: '#fff', fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }
        }, 'Tu negocio vende.'),
        React.createElement('span', {
          className: 'grad-text',
          style: { display: 'block', fontSize: 'clamp(2.8rem, 8vw, 6.5rem)', marginTop: 4 }
        }, 'Lizia responde.')
      ),

      /* Sub */
      React.createElement('p', {
        className: 'hero-anim',
        style: {
          animationDelay: '0.6s',
          fontSize: 'clamp(15px, 1.8vw, 19px)', maxWidth: 580, lineHeight: 1.65, textWrap: 'pretty', color: 'rgb(225, 224, 224)'
        }
      }, 'Automatizá la atención de tu e-commerce por WhatsApp. \nRespondé consultas, cerrá ventas y gestioná pedidos.\nSin que suene a robot.'),

      /* CTAs */
      React.createElement('div', {
        className: 'hero-anim',
        style: { animationDelay: '0.8s', marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', alignItems: 'center' }
      },
        React.createElement('a', { href: '#diagnostico', style: { textDecoration: 'none' } },
          React.createElement('div', { className: 'btn-wrap' },
            React.createElement('button', { className: 'btn-gradient' },
              'Calculá cuanto ganarias con Lizia',
              React.createElement('span', {
                style: {
                  width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.9)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }
              },
                React.createElement('svg', {
                  width: '16', height: '16', viewBox: '0 0 24 24', fill: 'none',
                  stroke: 'var(--neural-base)', strokeWidth: '2.5', strokeLinecap: 'round'
                },
                  React.createElement('line', { x1: '5', y1: '12', x2: '19', y2: '12' }),
                  React.createElement('polyline', { points: '12 5 19 12 12 19' })
                )
              )
            )
          )
        ),
        React.createElement('a', {
          href: '#demo',
          style: {
            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10,
            color: '#fff', fontSize: 16, fontWeight: 600,
            padding: '14px 28px', borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)',
            transition: 'border-color 0.3s, background 0.3s',
          },
          onMouseEnter: function (e) { e.currentTarget.style.borderColor = 'rgba(34,211,238,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; },
          onMouseLeave: function (e) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }
        },
          React.createElement('svg', {
            width: '20', height: '20', viewBox: '0 0 24 24', fill: '#fff'
          },
            React.createElement('polygon', { points: '5 3 19 12 5 21 5 3' })
          ),
          'Ver cómo funciona'
        )
      ),

      /* Spacer */
      React.createElement('div', { style: { height: 'clamp(60px, 10vh, 120px)' } })
    ),

    React.createElement('style', null, '\n        .hero-anim {\n          opacity: 0;\n          animation: heroFadeIn 0.8s ease-out forwards;\n        }\n        @keyframes heroFadeIn {\n          from { opacity: 0; transform: translateY(24px); }\n          to { opacity: 1; transform: translateY(0); }\n        }\n      ')
  );
}

function LogoCloud() {
  var logoData = [
    { name: 'WhatsApp', svg: '<svg viewBox="0 0 48 48" width="32" height="32"><circle cx="24" cy="24" r="22" fill="#25D366"/><path d="M34.6 28.2c-.5-.25-2.9-1.4-3.3-1.6-.5-.2-.8-.25-1.1.25s-1.3 1.6-1.5 1.9c-.3.3-.5.35-1 .1-.5-.25-2.1-.8-4-2.4-1.5-1.3-2.5-2.9-2.7-3.4-.3-.5 0-.75.2-1 .2-.2.5-.6.7-.85.25-.3.3-.5.5-.8.15-.3.1-.6 0-.85-.1-.25-1.1-2.6-1.5-3.6-.4-.9-.8-.8-1.1-.8h-.9c-.3 0-.85.1-1.3.6s-1.7 1.7-1.7 4c0 2.4 1.7 4.7 2 5 .25.3 3.4 5.2 8.3 7.3 1.2.5 2.1.8 2.8 1 1.2.4 2.2.3 3.1.2.9-.15 2.9-1.2 3.3-2.3.4-1.1.4-2.1.3-2.3-.1-.2-.4-.3-.9-.55z" fill="#fff"/></svg>' },
    { name: 'Mercado Pago', svg: '<svg viewBox="0 0 48 48" width="32" height="32"><rect width="48" height="48" rx="8" fill="#00AAFF"/><ellipse cx="24" cy="26" rx="13" ry="9" fill="#2EBCF0" opacity="0.3"/><path d="M16 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M13 25c1.5-4 5-7 8-8.5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0.7"/><path d="M35 25c-1.5-4-5-7-8-8.5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0.7"/><circle cx="20" cy="28.5" r="2.5" fill="#fff"/><circle cx="28" cy="28.5" r="2.5" fill="#fff"/></svg>' },
    { name: 'Tarjetas de Crédito', svg: '<svg viewBox="0 0 48 36" width="40" height="30" fill="none"><rect width="48" height="36" rx="6" fill="#1a1a2e" stroke="rgba(255,255,255,0.15)" stroke-width="1"/><rect x="0" y="8" width="48" height="7" fill="rgba(255,255,255,0.2)"/><rect x="5" y="22" width="14" height="3" rx="1.5" fill="rgba(255,255,255,0.3)"/><rect x="5" y="28" width="8" height="2" rx="1" fill="rgba(255,255,255,0.15)"/><circle cx="34" cy="24" r="6" fill="#EB001B" opacity="0.9"/><circle cx="40" cy="24" r="6" fill="#F79E1B" opacity="0.7"/></svg>' },
    { name: 'Catálogo de productos', svg: '<svg viewBox="0 0 48 48" width="32" height="32"><rect width="48" height="48" rx="10" fill="rgba(168,85,247,0.85)"/><rect x="8" y="8" width="14" height="14" rx="3" fill="none" stroke="#fff" stroke-width="2"/><rect x="26" y="8" width="14" height="14" rx="3" fill="none" stroke="#fff" stroke-width="2"/><rect x="8" y="26" width="14" height="14" rx="3" fill="none" stroke="#fff" stroke-width="2"/><rect x="26" y="26" width="14" height="14" rx="3" fill="none" stroke="#fff" stroke-width="2"/><circle cx="15" cy="15" r="2.5" fill="#fff" opacity="0.8"/><circle cx="33" cy="15" r="2.5" fill="#fff" opacity="0.8"/><circle cx="15" cy="33" r="2.5" fill="#fff" opacity="0.8"/><circle cx="33" cy="33" r="2.5" fill="#fff" opacity="0.8"/></svg>' },
    { name: 'Andreani', svg: '<svg viewBox="0 0 48 48" width="32" height="32"><circle cx="24" cy="24" r="22" fill="#E8422F"/><path d="M24 10l-1.2 0.7c-3.5 2-6.5 4.8-8.8 8.3l6 3.5 4-7 4 7 6-3.5c-2.3-3.5-5.3-6.3-8.8-8.3L24 10z" fill="#fff"/><path d="M15.5 22c-1.5 2.8-2.5 6-2.5 9.5h8l-1-6.5-4.5-3z" fill="#fff"/><path d="M32.5 22c1.5 2.8 2.5 6 2.5 9.5h-8l1-6.5 4.5-3z" fill="#fff"/><path d="M20 31.5h8l-1-6.5h-6l-1 6.5z" fill="#fff"/><rect x="13" y="33" width="22" height="3" rx="1.5" fill="#fff"/></svg>' },
    { name: 'Correo Argentino', svg: '<svg viewBox="0 0 48 48" width="32" height="32"><rect width="48" height="48" rx="8" fill="#FFCC00"/><circle cx="24" cy="22" r="10" fill="none" stroke="#003B7A" stroke-width="3"/><path d="M18 22c0-3.3 2.7-6 6-6" stroke="#003B7A" stroke-width="2.5" stroke-linecap="round"/><path d="M24 16v-4M24 12l4 2" stroke="#003B7A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 34h18" stroke="#003B7A" stroke-width="2" stroke-linecap="round"/><path d="M18 37h12" stroke="#003B7A" stroke-width="2" stroke-linecap="round"/></svg>' },
    { name: 'Gmail', svg: '<svg viewBox="0 0 48 48" width="32" height="32"><path d="M8 12a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H12a4 4 0 01-4-4V12z" fill="#fff"/><path d="M8 14l16 11 16-11v-2a4 4 0 00-4-4H12a4 4 0 00-4 4v2z" fill="#EA4335"/><path d="M8 14l16 11" stroke="#D93025" stroke-width="0"/><path d="M40 14l-16 11" stroke="#D93025" stroke-width="0"/><path d="M8 14v4l16 11 16-11v-4" fill="none"/><rect x="8" y="8" width="32" height="32" rx="4" fill="none" stroke="#E0E0E0" stroke-width="0.5"/><path d="M12 8h-0.01L8 11.8V14l16 11 16-11v-2.2L36 8h-.01" fill="#EA4335"/><path d="M8 14l2-1.5V36a4 4 0 004 4h2V18.5L8 14z" fill="#C5221F" opacity="0.25"/><path d="M40 14l-2-1.5V36a4 4 0 01-4 4h-2V18.5L40 14z" fill="#C5221F" opacity="0.25"/></svg>' },
    { name: 'Google Calendar', svg: '<svg viewBox="0 0 48 48" width="32" height="32"><rect x="6" y="10" width="36" height="32" rx="4" fill="#fff"/><rect x="6" y="10" width="36" height="10" rx="4" fill="#4285F4"/><rect x="6" y="10" width="36" height="32" rx="4" fill="none" stroke="#4285F4" stroke-width="2"/><line x1="14" y1="6" x2="14" y2="14" stroke="#4285F4" stroke-width="3" stroke-linecap="round"/><line x1="34" y1="6" x2="34" y2="14" stroke="#4285F4" stroke-width="3" stroke-linecap="round"/><text x="24" y="35" text-anchor="middle" fill="#4285F4" font-family="Inter Tight,sans-serif" font-weight="800" font-size="14">31</text></svg>' },
    { name: 'Google Sheets', svg: '<svg viewBox="0 0 48 48" width="32" height="32"><path d="M12 4h18l10 10v28a4 4 0 01-4 4H12a4 4 0 01-4-4V8a4 4 0 014-4z" fill="#0F9D58"/><path d="M30 4l10 10H34a4 4 0 01-4-4V4z" fill="#087045"/><rect x="12" y="20" width="24" height="20" rx="1" fill="#fff" opacity="0.9"/><line x1="24" y1="20" x2="24" y2="40" stroke="#0F9D58" stroke-width="1.5"/><line x1="12" y1="27" x2="36" y2="27" stroke="#0F9D58" stroke-width="1.5"/><line x1="12" y1="34" x2="36" y2="34" stroke="#0F9D58" stroke-width="1.5"/></svg>' },
  ];

  function LogoItem(props) {
    var item = props.item;
    return React.createElement('div', { className: 'logo-item' },
      React.createElement('span', { dangerouslySetInnerHTML: { __html: item.svg } }),
      React.createElement('span', { className: 'logo-item-name' }, item.name)
    );
  }

  return React.createElement('div', { className: 'logo-cloud-section' },
    React.createElement('div', { className: 'logo-cloud-inner' },
      React.createElement('p', { className: 'logo-cloud-label' }, 'INTEGRAMOS CON TUS HERRAMIENTAS'),
      React.createElement('div', { className: 'logo-cloud-divider hide-mobile' }),
      React.createElement('div', { className: 'logo-cloud-slider-mask' },
        React.createElement('div', { className: 'slider-track' },
          [].concat(logoData, logoData, logoData).map(function (item, i) {
            return React.createElement(LogoItem, { key: i, item: item });
          })
        )
      )
    )
  );
}

window.Hero = Hero;
window.LogoCloud = LogoCloud;
