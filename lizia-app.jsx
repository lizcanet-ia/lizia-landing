function VideoBackground() {
  const ref = React.useRef(null);
  React.useEffect(() => { if (ref.current) ref.current.play().catch(() => {}); }, []);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <video ref={ref} autoPlay muted loop playsInline style={{
        width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'screen', opacity: 0.5,
      }} src="uploads/Image 1 - Hero Background_v2.mp4"></video>
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
