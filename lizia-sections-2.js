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
