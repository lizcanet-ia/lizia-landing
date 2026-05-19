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
