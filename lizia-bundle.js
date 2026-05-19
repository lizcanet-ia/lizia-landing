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
var _s1 = React;
var useState = _s1.useState;
var useEffect = _s1.useEffect;
var useRef = _s1.useRef;

/* ── Scroll reveal hook ── */
function useReveal() {
  var ref = useRef(null);
  useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { el.classList.add('visible'); obs.disconnect(); }
    }, { threshold: 0.1, rootMargin: '-60px' });
    obs.observe(el);
    return function () { obs.disconnect(); };
  }, []);
  return ref;
}

/* ── SECTION LABEL ── */
function SectionLabel(props) {
  var text = props.text;
  return React.createElement('div', {
    className: 'glass-pill',
    style: { marginBottom: 24 }
  },
    React.createElement('div', {
      className: 'pill-icon',
      style: { height: 20, fontSize: '0px', lineHeight: '0', width: '0px', opacity: '0', borderRadius: '0px' }
    },
      React.createElement('svg', {
        width: '10', height: '10', viewBox: '0 0 24 24', fill: 'none',
        stroke: '#0a0a1a', strokeWidth: '3', strokeLinecap: 'round'
      },
        React.createElement('path', { d: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' })
      )
    ),
    React.createElement('span', {
      className: 'mono',
      style: { letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '13px', fontWeight: '600', opacity: '2', fontFamily: '"Inter Tight"' }
    }, text)
  );
}

/* ══════════════════ PROBLEMA ══════════════════ */
function Problema() {
  var ref = useReveal();
  var cards = [
    { icon: '\u{1F4E5}', title: 'Mensajes acumulados sin responder.', desc: 'Entrás al WhatsApp del negocio y ya hay 30 mensajes sin leer. \nEntre consultas de stock, precios y envíos, no das abasto.' },
    { icon: '\u{1F504}', title: 'Siempre las mismas preguntas', desc: 'El 70% de las consultas son repetitivas.\n"¿Hacen envíos al interior?" \n"¿Aceptan Mercado Pago?" \n"¿Tienen talle M?" ' },
    { icon: '\u{1F4B8}', title: 'Ventas que perdés fuera de horario', desc: 'El cliente preguntó a las 23hs. \nNadie respondió. A la mañana ya compró en otro lado.' },
    { icon: '\u{1F464}', title: 'Todo depende de personas respondiendo', desc: 'Si la persona que maneja el WhatsApp no está disponible los mensajes quedan sin responder y las VENTAS SE FRENAN.' }
  ];

  var iconSvgs = [
    React.createElement('svg', { width: '22', height: '22', viewBox: '0 0 24 24', fill: 'none', stroke: '#0a0a1a', strokeWidth: '2', strokeLinecap: 'round' },
      React.createElement('path', { d: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' })
    ),
    React.createElement('svg', { width: '22', height: '22', viewBox: '0 0 24 24', fill: 'none', stroke: '#0a0a1a', strokeWidth: '2', strokeLinecap: 'round' },
      React.createElement('path', { d: 'M17 1l4 4-4 4' }),
      React.createElement('path', { d: 'M3 11V9a4 4 0 014-4h14' }),
      React.createElement('path', { d: 'M7 23l-4-4 4-4' }),
      React.createElement('path', { d: 'M21 13v2a4 4 0 01-4 4H3' })
    ),
    React.createElement('svg', { width: '22', height: '22', viewBox: '0 0 24 24', fill: 'none', stroke: '#0a0a1a', strokeWidth: '2', strokeLinecap: 'round' },
      React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
      React.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '12' }),
      React.createElement('line', { x1: '12', y1: '16', x2: '12.01', y2: '16' })
    ),
    React.createElement('svg', { width: '22', height: '22', viewBox: '0 0 24 24', fill: 'none', stroke: '#0a0a1a', strokeWidth: '2', strokeLinecap: 'round' },
      React.createElement('path', { d: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' }),
      React.createElement('circle', { cx: '12', cy: '7', r: '4' })
    )
  ];

  return React.createElement('section', { id: 'problema', className: 'section' },
    React.createElement('div', { className: 'container reveal', ref: ref },
      React.createElement('div', { style: { textAlign: 'center', marginBottom: 64 } },
        React.createElement(SectionLabel, { text: 'Problema' }),
        React.createElement('h2', {
          style: { fontSize: 'clamp(2.8rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: 700, margin: '0 auto', width: '100%' }
        },
          React.createElement('span', { className: 'grad-text section-title' }, 'Si vendés por WhatsApp, probablemente te pase esto')
        )
      ),
      React.createElement('div', {
        className: 'grid-2col',
        style: { justifyContent: 'center', maxWidth: 700, margin: '0 auto' }
      },
        cards.map(function (c, i) {
          return React.createElement('div', {
            key: i,
            className: 'glass-card',
            style: { padding: 'clamp(20px, 4vw, 32px)', display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'flex-start', alignItems: 'center', borderRadius: 'clamp(24px, 5vw, 50px)' }
          },
            React.createElement('div', {
              className: 'icon-box',
              style: { textAlign: 'center', backgroundPosition: 'center center' }
            }, iconSvgs[i]),
            React.createElement('h3', { style: { fontWeight: 700, fontSize: 18, textAlign: 'center' } }, c.title),
            React.createElement('p', { style: { color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.6, textAlign: 'center' } }, c.desc)
          );
        })
      )
    )
  );
}

/* ══════════════════ STATS ══════════════════ */
function Stats() {
  var ref = useReveal();
  var stats = [
    { value: '3s', label: 'Tiempo de respuesta' },
    { value: '24/7', label: 'Disponibilidad' },
    { value: '98%', label: 'Tasa de resolución' },
    { value: '+500', label: 'Conversaciones mensuales' }
  ];

  return React.createElement('div', {
    className: 'reveal',
    ref: ref,
    style: {
      background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)',
      padding: '48px 24px'
    }
  },
    React.createElement('div', {
      style: { maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32, textAlign: 'center' }
    },
      stats.map(function (s, i) {
        return React.createElement('div', { key: i },
          React.createElement('div', {
            className: 'grad-text-cp',
            style: { fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }
          }, s.value),
          React.createElement('div', {
            className: 'mono',
            style: { fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }
          }, s.label)
        );
      })
    )
  );
}

/* ══════════════════ DIAGNÓSTICO ══════════════════ */
function Diagnostico() {
  var ref = useReveal();
  var _step = useState(0); var step = _step[0]; var setStep = _step[1];
  var _answers = useState([]); var answers = _answers[0]; var setAnswers = _answers[1];
  var _showResult = useState(false); var showResult = _showResult[0]; var setShowResult = _showResult[1];

  var questions = [
    { q: '¿Cuántas consultas recibís por WhatsApp por día?', opts: ['Menos de 20', '20 a 50', '50 a 100', 'Más de 100'] },
    { q: '¿Cuánto tardás en promedio en responder?', opts: ['Menos de 5 min', '5 a 30 min', 'Más de 1 hora', 'A veces no respondo'] },
    { q: '¿Qué porcentaje de consultas son preguntas repetitivas?', opts: ['Menos del 30%', '30% a 60%', 'Más del 60%'] },
    { q: '¿Perdiste alguna venta por no responder a tiempo?', opts: ['Sí, varias', 'Alguna vez', 'No estoy seguro', 'No'] }
  ];

  var handleSelect = function (optIdx) {
    var newAnswers = [].concat(answers, [optIdx]);
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setTimeout(function () { setStep(step + 1); }, 300);
    } else {
      setTimeout(function () { setShowResult(true); }, 300);
    }
  };

  var score = Math.min(98, 60 + answers.reduce(function (a, v) { return a + v * 8; }, 0));
  var reset = function () { setStep(0); setAnswers([]); setShowResult(false); };

  return React.createElement('section', { id: 'diagnostico', className: 'section' },
    React.createElement('div', { className: 'container reveal', ref: ref },
      React.createElement('div', {
        style: {
          maxWidth: 700, margin: '0 auto',
          background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: 'clamp(32px, 5vw, 56px)'
        }
      },
        !showResult
          ? React.createElement(React.Fragment, null,
              React.createElement('h2', {
                style: { fontSize: 'clamp(2.8rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: 8, lineHeight: 1.1, textWrap: 'pretty', textAlign: 'center', letterSpacing: '-0.03em' }
              },
                React.createElement('span', { className: 'grad-text section-title' }, 'Evaluá cuánto podrías ganar con Lizia')
              ),
              React.createElement('div', {
                className: 'progress-bar',
                style: { margin: '24px 0 32px' }
              },
                React.createElement('div', {
                  className: 'progress-fill',
                  style: { width: ((step + 1) / questions.length * 100) + '%' }
                })
              ),
              React.createElement('p', {
                style: { color: 'rgba(255,255,255,0.5)', fontSize: 13, marginBottom: 8 },
                className: 'mono'
              }, 'Pregunta ' + (step + 1) + ' de ' + questions.length),
              React.createElement('p', {
                style: { fontSize: 18, fontWeight: 600, marginBottom: 24, lineHeight: 1.4 }
              }, questions[step].q),
              React.createElement('div', {
                style: { display: 'flex', flexDirection: 'column', gap: 12 }
              },
                questions[step].opts.map(function (o, i) {
                  return React.createElement('div', {
                    key: i,
                    className: 'diag-option',
                    onClick: function () { handleSelect(i); },
                    style: answers[step] === i ? { borderColor: 'var(--neural-cyan)', background: 'rgba(34,211,238,0.08)' } : {}
                  }, o);
                })
              )
            )
          : React.createElement('div', { style: { textAlign: 'center' } },
              React.createElement('div', {
                className: 'grad-text-cp',
                style: { fontSize: 72, fontWeight: 800, marginBottom: 16 }
              }, score + '%'),
              React.createElement('p', {
                style: { fontSize: 14, color: 'rgba(255,255,255,0.4)', marginBottom: 16 },
                className: 'mono'
              }, 'POTENCIAL DE MEJORA'),
              React.createElement('p', {
                style: { fontSize: 17, lineHeight: 1.6, marginBottom: 32, textWrap: 'pretty', fontWeight: '500', color: 'rgb(252, 252, 252)' }
              }, 'Tu negocio podría estar ganando mucho más.\nLizia podría responder gran parte de estas consultas en segundos.\n            '),
              React.createElement('div', {
                style: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }
              },
                React.createElement('a', {
                  href: 'https://wa.me/5491165295937?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Lizia',
                  target: '_blank', rel: 'noopener',
                  style: { textDecoration: 'none' }
                },
                  React.createElement('div', { className: 'btn-wrap' },
                    React.createElement('button', { className: 'btn-gradient' }, 'Contactanos →')
                  )
                ),
                React.createElement('button', {
                  onClick: reset,
                  style: { background: 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 9999, padding: '12px 24px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontFamily: 'Inter Tight', fontSize: 14 }
                }, 'Repetir diagnóstico')
              )
            )
      )
    )
  );
}

window.SectionLabel = SectionLabel;
window.useReveal = useReveal;
window.Problema = Problema;
window.Stats = Stats;
window.Diagnostico = Diagnostico;
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
var _s2 = React;
var useState = _s2.useState;
var useEffect = _s2.useEffect;
var useRef = _s2.useRef;

/* ══════════════════ SOLUCIÓN ══════════════════ */
function Solucion() {
  var ref = useReveal();
  var _expanded = useState(null); var expanded = _expanded[0]; var setExpanded = _expanded[1];

  var nodes = [
    {
      color: 'var(--neural-cyan)',
      label: 'El cliente escribe por WhatsApp',
      icon: React.createElement('svg', { width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round' },
        React.createElement('path', { d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z', fill: 'currentColor', stroke: 'none' })
      ),
      desc: 'Captura automática desde WhatsApp Business. El cliente manda "tienen la remera negra en L?" y el sistema lo procesa al instante.'
    },
    {
      color: 'var(--neural-purple)',
      label: 'Lizia interpreta y busca en tu catálogo',
      icon: React.createElement('svg', { width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round' },
        React.createElement('path', { d: 'M12 2a8 8 0 018 8c0 3.4-2.1 6.4-5 7.6V22h-6v-4.4C6.1 16.4 4 13.4 4 10a8 8 0 018-8z' }),
        React.createElement('path', { d: 'M10 17h4' })
      ),
      desc: 'Cruza la consulta con tu catálogo, stock en tiempo real y reglas de negocio. Sabe qué recomendar, qué hay disponible y cuánto sale con envío.'
    },
    {
      color: 'var(--neural-pink)',
      label: 'Responde con precio, stock y medios de pago',
      icon: React.createElement('svg', { width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round' },
        React.createElement('path', { d: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' })
      ),
      desc: 'Responde en segundos con la info correcta: precio, stock disponible, talles, colores y medios de pago.'
    },
    {
      color: '#22d3ee',
      label: 'Cliente decide comprar',
      icon: React.createElement('svg', { width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('circle', { cx: '9', cy: '21', r: '1' }),
        React.createElement('circle', { cx: '20', cy: '21', r: '1' }),
        React.createElement('path', { d: 'M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6' })
      ),
      desc: 'El cliente confirma la compra. Lizia le facilita el link de pago (Mercado Pago, transferencia) y confirma la orden.'
    },
    {
      color: 'var(--neural-purple)',
      label: 'Lizia deriva el pedido',
      icon: React.createElement('svg', { width: '28', height: '28', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
        React.createElement('rect', { x: '1', y: '3', width: '15', height: '13', rx: '2' }),
        React.createElement('path', { d: 'M16 8h4l3 3v5h-7V8z' }),
        React.createElement('circle', { cx: '5.5', cy: '18.5', r: '2.5' }),
        React.createElement('circle', { cx: '18.5', cy: '18.5', r: '2.5' })
      ),
      desc: 'El pedido se registra automáticamente y se escala a tu equipo para preparar el envío. Todo sin intervención manual.'
    }
  ];

  return React.createElement('section', { id: 'solucion', className: 'section' },
    React.createElement('div', { className: 'container reveal', ref: ref },
      React.createElement('div', { style: { textAlign: 'center', marginBottom: 64 } },
        React.createElement(SectionLabel, { text: 'Arquitectura // Solución' }),
        React.createElement('h2', {
          style: { fontSize: 'clamp(2.8rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', maxWidth: 700, margin: '0 auto', width: '100%' }
        },
          React.createElement('span', { className: 'grad-text section-title', style: { lineHeight: '1.1', textAlign: 'center' } }, 'Así funciona Lizia')
        )
      ),

      /* Nodes flow — circuit */
      React.createElement('div', {
        className: 'nodes-flow',
        style: { display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginBottom: 48, gap: 0, margin: '0px 0px 78px', justifyContent: 'center' }
      },
        nodes.map(function (n, i) {
          return React.createElement(React.Fragment, { key: i },
            React.createElement('div', {
              onClick: function () { setExpanded(expanded === i ? null : i); },
              style: {
                width: 100, textAlign: 'center', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10
              }
            },
              React.createElement('div', {
                style: {
                  width: 70, height: 70, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)',
                  border: '1px solid color-mix(in srgb, ' + n.color + ' 30%, transparent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: n.color, transition: 'box-shadow 0.4s, transform 0.4s',
                  boxShadow: expanded === i ? '0 0 30px color-mix(in srgb, ' + n.color + ' 30%, transparent)' : 'none',
                  transform: expanded === i ? 'scale(1.1)' : 'scale(1)'
                }
              }, n.icon),
              React.createElement('p', {
                style: { fontSize: 12, lineHeight: 1.3, color: 'rgb(250, 250, 250)', fontWeight: '600', maxWidth: 100 }
              }, n.label)
            ),
            i < 4 && React.createElement('div', {
              className: 'connector hide-mobile',
              style: { height: 3, opacity: 0.8, minWidth: 30, background: 'linear-gradient(90deg, var(--neural-cyan), var(--neural-purple), var(--neural-pink))', boxShadow: '0 0 12px rgba(34,211,238,0.4)' }
            }),
            i < 4 && React.createElement('div', {
              className: 'connector-v-mobile',
              style: { display: 'none' }
            })
          );
        })
      ),

      /* Feedback loop arrow */
      React.createElement('div', {
        style: { maxWidth: 700, margin: '-20px auto 32px', textAlign: 'center', position: 'relative', width: '90%' }
      },
        React.createElement('svg', {
          width: '100%', height: '40', viewBox: '0 0 700 40', preserveAspectRatio: 'none', fill: 'none'
        },
          React.createElement('path', {
            d: 'M600 5 C650 5, 670 20, 650 35 L50 35 C30 35, 10 20, 50 5',
            stroke: 'url(#loopGrad)', strokeWidth: '2', strokeDasharray: '6 4', fill: 'none', opacity: '0.5'
          }),
          React.createElement('defs', null,
            React.createElement('linearGradient', { id: 'loopGrad', x1: '0', y1: '0', x2: '700', y2: '0', gradientUnits: 'userSpaceOnUse' },
              React.createElement('stop', { offset: '0', stopColor: 'var(--neural-purple)' }),
              React.createElement('stop', { offset: '1', stopColor: 'var(--neural-cyan)' })
            )
          ),
          React.createElement('polygon', {
            points: '55,0 45,5 55,10', fill: 'var(--neural-cyan)', opacity: '0.6', transform: 'translate(-5,30)'
          })
        ),
        React.createElement('p', {
          style: { fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }
        }, 'El ciclo se repite con cada consulta')
      ),

      /* Expanded description */
      expanded !== null && React.createElement('div', {
        className: 'glass-card',
        style: { maxWidth: 600, margin: '0 auto 48px', padding: 32, textAlign: 'center', animation: 'heroFadeIn 0.4s ease-out' }
      },
        React.createElement('p', {
          style: { color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: 15 }
        }, nodes[expanded].desc)
      ),

      /* Capabilities */
      React.createElement('div', {
        className: 'glass-card',
        style: { maxWidth: 600, margin: '0 auto 48px', padding: 'clamp(20px, 4vw, 32px)', width: '100%' }
      },
        React.createElement('h3', {
          style: { marginBottom: 20, textAlign: 'center', fontWeight: '500', fontSize: '0px', lineHeight: '0', width: '0px', opacity: '0' }
        }, 'LO QUE HACE POR TU NEGOCIO'),
        ['Responde preguntas de stock y precios', 'Recomienda productos del catálogo', 'Envía medios de pago', 'Gestiona consultas de envío (AMBA e interior)', 'Organiza pedidos y los escala a tu equipo'].map(function (c, i) {
          return React.createElement('div', {
            key: i,
            style: { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none', fontWeight: '700', fontSize: '18px' }
          },
            React.createElement('div', {
              style: { width: 6, height: 6, borderRadius: '50%', background: 'var(--neural-cyan)', flexShrink: 0 }
            }),
            React.createElement('span', { style: { color: 'rgba(255,255,255,0.7)', fontSize: 15 } }, c)
          );
        })
      ),

      /* Stats bar */
      React.createElement('div', { style: { padding: '48px 24px', marginBottom: 48 } },
        React.createElement('div', {
          style: {
            maxWidth: 800, margin: '0 auto',
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px 24px',
            textAlign: 'center'
          },
          className: 'grid-stats-4'
        },
          [
            { value: '3s', label: 'Tiempo de respuesta' },
            { value: '24/7', label: 'Disponibilidad' },
            { value: '98%', label: 'Tasa de resolución' },
            { value: '+500', label: 'Conversaciones resueltas' }
          ].map(function (s, i) {
            return React.createElement('div', {
              key: i,
              style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }
            },
              React.createElement('div', {
                className: 'grad-text-cp',
                style: { fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }
              }, s.value),
              React.createElement('div', {
                className: 'mono',
                style: { fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 6, letterSpacing: '0.08em', textTransform: 'uppercase' }
              }, s.label)
            );
          })
        )
      ),

      React.createElement('div', { style: { textAlign: 'center' } },
        React.createElement('a', {
          href: 'https://wa.me/5491165295937?text=Hola%2C%20quiero%20una%20consultoria%20para%20evaluar%20si%20Lizia%20aplica%20a%20mi%20negocio',
          target: '_blank', rel: 'noopener',
          style: { textDecoration: 'none' }
        },
          React.createElement('div', { className: 'btn-wrap' },
            React.createElement('button', { className: 'btn-gradient' }, 'Solicitá consultoría sin costo →')
          )
        )
      )
    )
  );
}

/* ══════════════════ CASOS DE USO ══════════════════ */
function Casos() {
  var ref = useReveal();
  var cases = [
    {
      title: 'Indumentaria y moda',
      icon: React.createElement('svg', { width: '22', height: '22', viewBox: '0 0 24 24', fill: 'none', stroke: '#0a0a1a', strokeWidth: '2', strokeLinecap: 'round' },
        React.createElement('path', { d: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z' }),
        React.createElement('line', { x1: '3', y1: '6', x2: '21', y2: '6' }),
        React.createElement('path', { d: 'M16 10a4 4 0 01-8 0' })
      ),
      before: 'Respondemos talle por talle, color por color, todo manual',
      after: 'El asistente responde stock, talle, precio y manda opciones de pago en 3 segundos'
    },
    {
      title: 'Suplementos y salud',
      icon: React.createElement('svg', { width: '22', height: '22', viewBox: '0 0 24 24', fill: 'none', stroke: '#0a0a1a', strokeWidth: '2', strokeLinecap: 'round' },
        React.createElement('path', { d: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z' })
      ),
      before: 'Nos preguntan lo mismo 50 veces por día: dosis, ingredientes, envíos',
      after: 'Lizia responde con la info técnica exacta y sugiere productos complementarios'
    },
    {
      title: 'Accesorios y electrónica',
      icon: React.createElement('svg', { width: '22', height: '22', viewBox: '0 0 24 24', fill: 'none', stroke: '#0a0a1a', strokeWidth: '2', strokeLinecap: 'round' },
        React.createElement('rect', { x: '5', y: '2', width: '14', height: '20', rx: '2', ry: '2' }),
        React.createElement('line', { x1: '12', y1: '18', x2: '12.01', y2: '18' })
      ),
      before: 'Los clientes preguntan compatibilidad, garantía, formas de pago — todo manual',
      after: 'El asistente cruza compatibilidad, informa garantía y cierra la venta'
    },
    {
      title: 'Tiendas con catálogo grande (+200 SKUs)',
      icon: React.createElement('svg', { width: '22', height: '22', viewBox: '0 0 24 24', fill: 'none', stroke: '#0a0a1a', strokeWidth: '2', strokeLinecap: 'round' },
        React.createElement('path', { d: 'M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z' })
      ),
      before: 'Imposible que alguien se acuerde de todo el catálogo para responder rápido',
      after: 'Lizia busca en todo el catálogo al instante y recomienda lo más relevante'
    }
  ];

  return React.createElement('section', { id: 'casos', className: 'section' },
    React.createElement('div', { className: 'container reveal', ref: ref },
      React.createElement('div', { style: { textAlign: 'center', marginBottom: 64 } },
        React.createElement(SectionLabel, { text: 'Casos de uso' }),
        React.createElement('h2', {
          style: { fontSize: 'clamp(2.8rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }
        },
          React.createElement('span', { className: 'grad-text section-title' }, 'Aplica a todo negocio que reciba consultas online')
        )
      ),
      React.createElement('div', {
        className: 'grid-2col',
        style: { textAlign: 'left', margin: '60px auto', maxWidth: 900 }
      },
        cases.map(function (c, i) {
          return React.createElement('div', {
            key: i,
            className: 'glass-card',
            style: { padding: 'clamp(20px, 4vw, 32px)', display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'left', alignItems: 'center', justifyContent: 'flex-start', borderRadius: 'clamp(24px, 5vw, 50px)' }
          },
            React.createElement('div', { className: 'icon-box' }, c.icon),
            React.createElement('h3', { style: { fontWeight: 700, fontSize: 17 } }, c.title),
            React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
              React.createElement('div', { style: { display: 'flex', gap: 8, alignItems: 'flex-start' } },
                React.createElement('span', { style: { color: 'rgba(255,255,255,0.3)', fontSize: 13, fontWeight: 600, flexShrink: 0, marginTop: 2 } }, 'ANTES'),
                React.createElement('p', { style: { color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.5, fontStyle: 'italic' } }, '"' + c.before + '"')
              ),
              React.createElement('div', { style: { display: 'flex', gap: 8, alignItems: 'flex-start' } },
                React.createElement('span', { style: { color: 'var(--neural-cyan)', fontSize: 13, fontWeight: 600, flexShrink: 0, marginTop: 2 } }, 'DESPUÉS'),
                React.createElement('p', { style: { color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.5 } }, c.after)
              )
            )
          );
        })
      )
    )
  );
}

/* ══════════════════ PROCESO ══════════════════ */
function Proceso() {
  var ref = useReveal();
  var steps = [
    { n: '01', title: 'Evaluamos cómo funciona tu atención actual', desc: 'Revisamos tu catálogo, tus consultas más frecuentes y cómo operás hoy por WhatsApp.' },
    { n: '02', title: 'Entrenamos a tu asistente', desc: 'Cargamos tu catálogo, precios, reglas de envío y el tono con el que hablás a tus clientes.' },
    { n: '03', title: 'Tu WhatsApp responde solo', desc: 'El asistente empieza a responder consultas. Vos te dedicás a la estrategia de tu negocio.' }
  ];

  return React.createElement('section', { className: 'section' },
    React.createElement('div', { className: 'container reveal', ref: ref },
      React.createElement('div', { style: { textAlign: 'center', marginBottom: 64 } },
        React.createElement(SectionLabel, { text: 'Implementación' }),
        React.createElement('h2', {
          style: { fontSize: 'clamp(2.8rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }
        },
          React.createElement('span', { className: 'grad-text section-title' }, 'Empezar es más simple de lo que parece')
        )
      ),
      React.createElement('div', {
        style: { display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }
      },
        steps.map(function (s, i) {
          return React.createElement(React.Fragment, { key: i },
            React.createElement('div', {
              style: { flex: '1 1 260px', maxWidth: 340, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }
            },
              React.createElement('div', {
                style: {
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--neural-cyan), var(--neural-purple))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: 20, color: 'var(--neural-base)',
                  boxShadow: '0 0 24px var(--glow-cyan)'
                }
              }, s.n),
              React.createElement('div', {
                className: 'glass-card',
                style: { padding: 'clamp(20px, 4vw, 28px)', width: '100%', minHeight: 183 }
              },
                React.createElement('h3', {
                  style: { fontWeight: 700, fontSize: 17, marginBottom: 12, color: 'rgb(190, 141, 241)' }
                }, s.title),
                React.createElement('p', {
                  style: { fontSize: 15, lineHeight: 1.6, color: 'rgb(252, 252, 252)' }
                }, s.desc)
              )
            ),
            i < 2 && React.createElement('div', {
              className: 'connector hide-mobile',
              style: { alignSelf: 'center', marginTop: -40 }
            })
          );
        })
      )
    )
  );
}

/* ══════════════════ DEMO VIDEO (lazy-loaded) ══════════════════ */
function Demo() {
  var ref = useReveal();
  var _loaded = useState(false); var loaded = _loaded[0]; var setLoaded = _loaded[1];
  var sectionRef = useRef(null);

  useEffect(function () {
    var el = sectionRef.current;
    if (!el) return;
    var obs = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        setLoaded(true);
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return function () { obs.disconnect(); };
  }, []);

  return React.createElement('section', { id: 'demo', className: 'section', ref: sectionRef },
    React.createElement('div', { className: 'container reveal', ref: ref },
      React.createElement('div', { style: { textAlign: 'center', marginBottom: 48 } },
        React.createElement(SectionLabel, { text: 'Demo en vivo' }),
        React.createElement('h2', {
          style: { fontSize: 'clamp(2.8rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }
        },
          React.createElement('span', { className: 'grad-text section-title' }, 'Mirá a Lizia en acción')
        ),
        React.createElement('p', {
          style: { color: 'rgba(255,255,255,0.55)', fontSize: 16, marginTop: 16, maxWidth: 500, margin: '16px auto 0' }
        }, 'Una conversación real por WhatsApp. Sin edición, sin trucos.')
      ),
      /* Phone mockup */
      React.createElement('div', { style: { display: 'flex', justifyContent: 'center' } },
        React.createElement('div', {
          style: {
            width: 'min(320px, 85vw)', aspectRatio: '9/16',
            borderRadius: 36, overflow: 'hidden', position: 'relative',
            border: '4px solid rgba(255,255,255,0.1)',
            boxShadow: '0 0 60px rgba(34,211,238,0.15), 0 20px 60px rgba(0,0,0,0.4)',
            background: '#000',
          }
        },
          /* Notch */
          React.createElement('div', {
            style: {
              position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
              width: 120, height: 28, background: '#000', borderRadius: '0 0 16px 16px', zIndex: 2,
            }
          }),
          loaded
            ? React.createElement('iframe', {
                src: 'https://www.youtube.com/embed/IY6Hi5Kbz0E?autoplay=1&mute=1&loop=1&playlist=IY6Hi5Kbz0E&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1',
                style: { width: '100%', height: '100%', border: 'none' },
                allow: 'autoplay; encrypted-media',
                allowFullScreen: true,
                title: 'Demo Lizia WhatsApp'
              })
            : React.createElement('div', {
                style: {
                  width: '100%', height: '100%', background: '#000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer'
                },
                onClick: function () { setLoaded(true); }
              },
                React.createElement('div', {
                  style: {
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.3s'
                  }
                },
                  React.createElement('svg', {
                    width: '28', height: '28', viewBox: '0 0 24 24', fill: '#fff'
                  },
                    React.createElement('polygon', { points: '6 3 20 12 6 21 6 3' })
                  )
                )
              )
        )
      )
    )
  );
}

window.Solucion = Solucion;
window.Casos = Casos;
window.Proceso = Proceso;
window.Demo = Demo;
var _s3 = React;
var useState = _s3.useState;

/* ══════════════════ CRM UPSELL ══════════════════ */
function CrmUpsell() {
  var ref = useReveal();
  return React.createElement('section', { className: 'section' },
    React.createElement('div', { className: 'container reveal', ref: ref },
      React.createElement('div', { style: { textAlign: 'center', marginBottom: 64 } },
        React.createElement(SectionLabel, { text: 'Integraciones' }),
        React.createElement('h2', {
          style: { fontSize: 'clamp(2.8rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }
        },
          React.createElement('span', { className: 'grad-text section-title' }, 'Lizia se conecta a tus herramientas.')
        )
      ),
      React.createElement('div', {
        className: 'grid-2col',
        style: { alignItems: 'stretch', justifyContent: 'center', position: 'relative', maxWidth: 900, margin: '0 auto' }
      },
        /* Card 1 */
        React.createElement('div', {
          className: 'glass-card grad-border-top',
          style: { padding: 'clamp(20px, 4vw, 32px)' }
        },
          React.createElement('h3', { style: { fontWeight: 700, fontSize: 20, marginBottom: 12 } }, 'Integración con tu CRM'),
          React.createElement('p', {
            style: { color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.6, marginBottom: 24 }
          }, 'Nos conectamos con cualquier CRM que uses.\nTu catálogo se sincroniza automáticamente.\n            '),
          React.createElement('div', { style: { display: 'flex', gap: 16, flexWrap: 'wrap' } },
            ['Tiendanube', 'Shopify', 'WooCommerce', 'HubSpot'].map(function (l) {
              return React.createElement('span', {
                key: l,
                style: { padding: '8px 16px', borderRadius: 8, color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 500, opacity: '1', border: '1px solid rgba(255, 255, 255, 0.06)' }
              }, l);
            })
          )
        ),

        /* Divider O */
        React.createElement('div', {
          style: { position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', zIndex: 5, display: 'none' },
          className: 'or-divider'
        },
          React.createElement('div', {
            className: 'glass-pill',
            style: { fontSize: '0px', lineHeight: '0', width: '0px', height: '0px', gap: '0px', padding: '0px 0px 0px 20px', borderWidth: '0px 0px 0px 0.8px', borderRadius: '0px' }
          },
            React.createElement('span', { className: 'grad-text-cp', style: { fontWeight: 700, fontSize: 15 } }, 'O')
          )
        ),

        /* Card 2 */
        React.createElement('div', {
          className: 'glass-card grad-border-top grad-border-top-pink',
          style: { padding: 'clamp(20px, 4vw, 32px)' }
        },
          React.createElement('h3', { style: { fontWeight: 700, fontSize: 20, marginBottom: 12 } }, 'CRM Lizia'),
          React.createElement('p', {
            style: { color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.6, marginBottom: 24 }
          }, 'Si no tenés CRM, te hosteamos uno propio.\nCargás tu catálogo, gestionás clientes y tenés todo en un solo lugar.\n            '),
          React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
            ['Panel de control', 'Historial de conversaciones', 'Gestión de pedidos', 'Métricas de atención'].map(function (f, i) {
              return React.createElement('div', {
                key: i,
                style: { display: 'flex', alignItems: 'center', gap: 10 }
              },
                React.createElement('div', {
                  style: { width: 6, height: 6, borderRadius: '50%', background: 'var(--neural-purple)', flexShrink: 0 }
                }),
                React.createElement('span', { style: { color: 'rgba(255,255,255,0.6)', fontSize: 14 } }, f)
              );
            })
          )
        )
      )
    ),
    React.createElement('style', null, '@media(min-width:769px){.or-divider{display:flex !important}}')
  );
}

/* ══════════════════ FAQ ══════════════════ */
function FAQ() {
  var ref = useReveal();
  var _open = useState(null); var open = _open[0]; var setOpen = _open[1];
  var items = [
    { q: '¿Cómo funciona exactamente?', a: 'Conectamos un asistente inteligente a tu WhatsApp Business. Se entrena con tu catálogo, precios y reglas de negocio. Cuando un cliente escribe, responde automáticamente con la información correcta.' },
    { q: '¿Cuánto tarda la implementación?', a: 'Entre 5 y 10 días hábiles dependiendo del tamaño de tu catálogo.' },
    { q: '¿Cumple con las políticas de WhatsApp?', a: 'Sí. Usamos la API oficial de WhatsApp Business. Todo dentro de las reglas de Meta.' },
    { q: '¿Qué pasa con los datos de mis clientes?', a: 'Tus datos son tuyos. No los compartimos, no los usamos para otra cosa. Cumplimos con todas las normativas de protección de datos.' },
    { q: '¿Cuánto sale?', a: 'Depende del volumen de consultas y las integraciones que necesites. Arrancamos con una consultoría gratuita para darte un presupuesto preciso.' },
    { q: '¿Se puede integrar con Mercado Pago y Tiendanube?', a: 'Sí. Nos integramos con Mercado Pago para links de cobro y con Tiendanube para sincronizar catálogo y stock en tiempo real.' }
  ];

  return React.createElement('section', { id: 'faq', className: 'section' },
    React.createElement('div', { className: 'container reveal', ref: ref },
      React.createElement('div', { style: { textAlign: 'center', marginBottom: 64 } },
        React.createElement(SectionLabel, { text: 'Preguntas frecuentes' }),
        React.createElement('h2', {
          style: { fontSize: 'clamp(2.8rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }
        },
          React.createElement('span', { className: 'grad-text section-title' }, '¿Tenés dudas?\nSelecciona algunas de ellas.')
        )
      ),
      React.createElement('div', {
        className: 'glass-card',
        style: { maxWidth: 750, margin: '0 auto', padding: 'clamp(16px, 4vw, 36px)', display: 'flex', flexDirection: 'column', gap: 12, minHeight: 400 }
      },
        items.map(function (it, i) {
          return React.createElement('div', {
            key: i,
            className: 'faq-item' + (open === i ? ' open' : ''),
            style: Object.assign({}, open === i ? { background: 'rgba(255,255,255,0.02)' } : {}, { textAlign: 'left', borderWidth: '0.8px', width: '100%' })
          },
            React.createElement('div', {
              className: 'faq-header',
              onClick: function () { setOpen(open === i ? null : i); },
              style: { alignItems: 'center', padding: '18px clamp(14px, 3vw, 28px)', justifyContent: 'space-between', width: '100%', display: 'flex' }
            },
              React.createElement('span', { style: { fontWeight: 600, fontSize: 16, flex: 1, textAlign: 'left' } }, it.q),
              React.createElement('span', {
                style: { fontSize: 20, transition: 'transform 0.3s', transform: open === i ? 'rotate(45deg)' : 'rotate(0)', color: 'rgb(252, 252, 252)', flexShrink: 0, marginLeft: 12 }
              }, '+')
            ),
            React.createElement('div', { className: 'faq-body' },
              React.createElement('p', {
                style: { color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.7, textAlign: 'left', padding: '0 clamp(14px, 3vw, 28px)' }
              }, it.a)
            )
          );
        })
      )
    )
  );
}

/* ══════════════════ CTA FINAL ══════════════════ */
function CtaFinal() {
  var ref = useReveal();
  return React.createElement('section', {
    id: 'contacto', className: 'section',
    style: { paddingBottom: 80 }
  },
    React.createElement('div', {
      className: 'container reveal',
      ref: ref,
      style: { textAlign: 'center', maxWidth: 700 }
    },
      React.createElement('div', {
        className: 'glass-pill',
        style: { marginBottom: 24, fontSize: '18px' }
      },
        React.createElement('span', {
          style: { color: 'rgb(255, 255, 255)', opacity: '2', fontFamily: '"Inter Tight"', fontWeight: '600', fontSize: '18px' }
        }, 'Asistente virtual Lizia.\n          ')
      ),
      React.createElement('h2', {
        style: { fontSize: 'clamp(2.8rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24 }
      },
        React.createElement('span', { className: 'grad-text section-title' }, '¿Listo para que tu negocio venda mientras dormís?')
      ),
      React.createElement('p', {
        style: { marginBottom: 40, lineHeight: 1.6, color: 'rgb(255, 255, 255)', fontSize: '19px', fontWeight: '400' }
      }, 'La tecnología ya está lista. Solo falta tu decisión para ganar más ventas.'),
      React.createElement('a', {
        href: 'https://wa.me/5491165295937?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Lizia',
        target: '_blank', rel: 'noopener',
        style: { textDecoration: 'none' }
      },
        React.createElement('div', { className: 'btn-wrap' },
          React.createElement('button', {
            className: 'btn-gradient',
            style: { fontSize: 18, padding: '18px 40px' }
          }, 'Contactanos →')
        )
      ),
      React.createElement('p', {
        style: { marginTop: 16, color: 'rgb(255, 255, 255)', fontSize: '13px' }
      }, 'Respuesta en menos de 24 horas.')
    )
  );
}

/* ══════════════════ FOOTER ══════════════════ */
function Footer() {
  return React.createElement('footer', {
    style: { background: 'rgba(10,10,26,0.5)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '32px 24px' }
  },
    React.createElement('div', {
      className: 'footer-inner',
      style: { maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center' }
    },
      React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } },
        React.createElement('span', { style: { fontWeight: 800, fontSize: 18, color: '#fff' } }, 'Lizia'),
        React.createElement('span', {
          style: { width: 5, height: 5, borderRadius: '50%', background: 'linear-gradient(135deg, var(--neural-cyan), var(--neural-purple))', display: 'inline-block' }
        })
      ),
      React.createElement('p', {
        style: { color: 'rgb(255, 255, 255)', fontWeight: '500', fontSize: '14px' }
      }, '© 2025 Lizia. Automatización inteligente y Estrategia Digital para negocios.')
    )
  );
}

window.CrmUpsell = CrmUpsell;
window.FAQ = FAQ;
window.CtaFinal = CtaFinal;
window.Footer = Footer;
function VideoBackground() {
  var ref = React.useRef(null);
  var _isMobile = React.useState(false); var isMobile = _isMobile[0]; var setIsMobile = _isMobile[1];

  React.useEffect(function () {
    var mobile = window.innerWidth <= 768;
    setIsMobile(mobile);

    var v = ref.current;
    if (v) {
      v.setAttribute('playsinline', '');
      v.setAttribute('muted', '');
      v.setAttribute('autoplay', '');
      v.muted = true;
      v.play().catch(function () {
        var retry = function () { v.play().catch(function () {}); document.removeEventListener('touchstart', retry); };
        document.addEventListener('touchstart', retry, { once: true });
      });
    }
  }, []);

  return React.createElement('div', {
    style: { position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }
  },
    React.createElement('video', {
      ref: ref,
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      style: {
        width: '100%', height: '100%', objectFit: 'cover',
        opacity: isMobile ? 0.35 : 0.5,
      },
      src: 'Image 1 — Hero Background V2.mp4'
    }),
    React.createElement('div', {
      style: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 20%, var(--neural-base) 70%)' }
    })
  );
}

function WhatsAppFloat() {
  return React.createElement('a', {
    href: 'https://wa.me/5491165295937?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Lizia',
    target: '_blank',
    rel: 'noopener',
    className: 'whatsapp-float',
    'aria-label': 'Contactar por WhatsApp'
  },
    React.createElement('svg', {
      viewBox: '0 0 24 24', width: '28', height: '28', fill: '#fff'
    },
      React.createElement('path', {
        d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'
      })
    )
  );
}

function App() {
  return React.createElement(React.Fragment, null,
    React.createElement(VideoBackground),
    React.createElement('div', { style: { position: 'relative', zIndex: 1 } },
      React.createElement(Nav),
      React.createElement(Hero),
      React.createElement(LogoCloud),
      React.createElement(Problema),
      React.createElement(Diagnostico),
      React.createElement(Solucion),
      React.createElement(Demo),
      React.createElement(Casos),
      React.createElement(Proceso),
      React.createElement(CrmUpsell),
      React.createElement(FAQ),
      React.createElement(CtaFinal),
      React.createElement(Footer)
    ),
    React.createElement(WhatsAppFloat)
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
