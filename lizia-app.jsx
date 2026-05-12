function VideoBackground() {
  const ref = React.useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);

    const v = ref.current;
    if (v) {
      v.setAttribute('playsinline', '');
      v.setAttribute('muted', '');
      v.setAttribute('autoplay', '');
      v.muted = true;
      v.play().catch(() => {
        // Retry on user interaction for strict autoplay policies
        const retry = () => { v.play().catch(() => {}); document.removeEventListener('touchstart', retry); };
        document.addEventListener('touchstart', retry, { once: true });
      });
    }
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <video ref={ref} autoPlay muted loop playsInline
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          opacity: isMobile ? 0.35 : 0.5,
        }}
        src="Image 1 — Hero Background V2.mp4"></video>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 20%, var(--neural-base) 70%)' }}></div>
    </div>
  );
}

function App() {
  return (
    <>
      <VideoBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <Nav />
      <Hero />
      <LogoCloud />
      <Problema />
      <Diagnostico />
      <Solucion />
      <Casos />
      <Proceso />
      <CrmUpsell />
      <FAQ />
      <CtaFinal />
      <Footer />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
