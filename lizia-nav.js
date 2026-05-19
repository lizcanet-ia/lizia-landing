var useState = React.useState;
var useEffect = React.useEffect;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(function () {
    var onScroll = function () { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', onScroll);
    return function () { window.removeEventListener('scroll', onScroll); };
  }, []);

  var links = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Problema', href: '#problema' },
    { label: 'Solución', href: '#solucion' },
    { label: 'Demo', href: '#demo' },
    { label: 'Casos de uso', href: '#casos' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  var navBg = scrolled
    ? { background: 'rgba(10,10,26,0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }
    : { background: 'transparent' };

  return React.createElement('nav', {
    style: Object.assign({
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.4s, backdrop-filter 0.4s',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
    }, navBg)
  },
    React.createElement('div', {
      style: {
        maxWidth: 1280, margin: '0 auto', padding: '0 24px',
        height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }
    },
      /* Logo */
      React.createElement('a', {
        href: '#hero',
        style: { textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 2 }
      },
        React.createElement('span', {
          style: { fontWeight: 800, fontSize: 24, color: '#fff', letterSpacing: '-0.02em' }
        }, 'Lizia'),
        React.createElement('span', {
          style: {
            width: 7, height: 7, borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--neural-cyan), var(--neural-purple))',
            boxShadow: '0 0 10px var(--glow-cyan)',
            display: 'inline-block', marginBottom: -2,
          }
        })
      ),

      /* Desktop links */
      React.createElement('div', {
        style: { display: 'flex', alignItems: 'center', gap: 32 },
        className: 'hide-mobile'
      },
        links.map(function (l) {
          return React.createElement('a', {
            key: l.href,
            href: l.href,
            style: {
              color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14, fontWeight: 400,
              transition: 'color 0.3s, font-weight 0.3s',
            },
            onMouseEnter: function (e) { e.target.style.color = '#fff'; e.target.style.fontWeight = '700'; },
            onMouseLeave: function (e) { e.target.style.color = 'rgba(255,255,255,0.7)'; e.target.style.fontWeight = '400'; }
          }, l.label);
        }),
        React.createElement('a', {
          href: 'https://wa.me/5491165295937?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Lizia',
          target: '_blank',
          rel: 'noopener',
          style: { textDecoration: 'none' }
        },
          React.createElement('button', {
            style: {
              background: 'linear-gradient(135deg, var(--neural-cyan), var(--neural-purple))',
              color: '#fff', border: 'none', borderRadius: 8,
              padding: '10px 22px', fontSize: 14, fontWeight: 700,
              cursor: 'pointer', transition: 'opacity 0.3s, transform 0.3s',
              boxShadow: '0 0 16px rgba(34,211,238,0.3)',
            },
            onMouseEnter: function (e) { e.target.style.opacity = '0.85'; e.target.style.transform = 'scale(1.03)'; },
            onMouseLeave: function (e) { e.target.style.opacity = '1'; e.target.style.transform = 'scale(1)'; }
          }, 'Contactanos')
        )
      ),

      /* Hamburger */
      React.createElement('button', {
        onClick: function () { setMenuOpen(!menuOpen); },
        style: {
          display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8,
        },
        className: 'burger-btn'
      },
        React.createElement('svg', {
          width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none',
          stroke: 'rgba(255,255,255,0.8)', strokeWidth: '2'
        },
          menuOpen
            ? React.createElement(React.Fragment, null,
                React.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' }),
                React.createElement('line', { x1: '6', y1: '18', x2: '18', y2: '6' })
              )
            : React.createElement(React.Fragment, null,
                React.createElement('line', { x1: '3', y1: '7', x2: '21', y2: '7' }),
                React.createElement('line', { x1: '3', y1: '12', x2: '21', y2: '12' }),
                React.createElement('line', { x1: '3', y1: '17', x2: '21', y2: '17' })
              )
        )
      )
    ),

    /* Mobile menu */
    menuOpen && React.createElement('div', {
      style: {
        position: 'absolute', top: 72, left: 0, right: 0,
        background: 'rgba(10,10,26,0.95)', backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 16,
      }
    },
      links.map(function (l) {
        return React.createElement('a', {
          key: l.href,
          href: l.href,
          onClick: function () { setMenuOpen(false); },
          style: { color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: 16, padding: '8px 0' }
        }, l.label);
      }),
      React.createElement('a', {
        href: 'https://wa.me/5491165295937?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Lizia',
        target: '_blank',
        rel: 'noopener',
        style: { textDecoration: 'none', marginTop: 8 }
      },
        React.createElement('button', {
          style: {
            background: 'linear-gradient(135deg, var(--neural-cyan), var(--neural-purple))',
            color: '#fff', border: 'none', borderRadius: 8, width: '100%',
            padding: '14px 22px', fontSize: 16, fontWeight: 700,
            cursor: 'pointer', boxShadow: '0 0 16px rgba(34,211,238,0.3)',
          }
        }, 'Contactanos')
      )
    ),

    React.createElement('style', null, '\n        @media (max-width: 768px) {\n          .burger-btn { display: flex !important; }\n        }\n      ')
  );
}

window.Nav = Nav;
