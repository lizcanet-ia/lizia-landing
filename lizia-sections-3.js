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
