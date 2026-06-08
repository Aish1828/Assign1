import React, { useEffect, useRef } from 'react';

const slides = [
  {
    id: 1,
    label: 'SS 2025 Collection',
    title: 'Timeless\nElegance',
    subtitle: 'Where craft meets couture',
    cta: 'Explore Collection',
    accent: '#b8933f',
    bg: 'linear-gradient(135deg, #1a1510 0%, #2d2418 50%, #1a1510 100%)',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    tag: 'New Arrivals',
  },
  {
    id: 2,
    label: 'Evening Wear',
    title: 'Draped in\nMoonlight',
    subtitle: 'Luxury eveningwear for the discerning woman',
    cta: 'Shop Evening',
    accent: '#8fb5c8',
    bg: 'linear-gradient(135deg, #0d1520 0%, #1a2535 50%, #0d1520 100%)',
    imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    tag: 'Limited Edition',
  },
];

export  function Hero() {
  const [active, setActive] = React.useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive(p => (p + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = slides[active];

  return (
    <section style={sectionStyle(slide.bg)}>
      {/* Background texture overlay */}
      <div style={noiseOverlay} />

      {/* Decorative vertical text */}
      <div style={verticalText}>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: '10px', letterSpacing: '0.35em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>
          MAISON — LUXURY FASHION — EST. 1998
        </span>
      </div>

      {/* Content layout */}
      <div style={contentWrapper}>
        {/* Left: text */}
        <div style={textSide}>
          <div style={tagStyle}>
            <span style={{ display: 'inline-block', width: '28px', height: '1px', background: slide.accent, marginRight: '10px', verticalAlign: 'middle' }} />
            {slide.tag}
          </div>
          <div style={labelStyle}>{slide.label}</div>
          <h1 style={titleStyle} key={active}>
            {slide.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block', animationDelay: `${i * 0.12}s` }} className="hero-line">
                {line}
              </span>
            ))}
          </h1>
          <p style={subtitleStyle}>{slide.subtitle}</p>
          <div style={ctaRow}>
            <button style={ctaBtn(slide.accent)}>
              {slide.cta}
              <svg style={{ marginLeft: '10px' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button style={ghostBtn}>View Lookbook</button>
          </div>
        </div>

        {/* Right: image */}
        <div style={imageSide} key={`img-${active}`}>
          <div style={imageFrame}>
            <img
              src={slide.imageUrl}
              alt="Fashion"
              style={imageStyle}
              onError={e => { e.target.src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80'; }}
            />
            <div style={imageOverlay(slide.accent)} />
          </div>
          {/* Floating badge */}
          <div style={floatingBadge}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '11px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>NEW</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 600, color: '#fff' }}>SEASON</div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div style={indicators}>
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            style={dot(i === active, slide.accent)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <div style={scrollCue}>
        <div style={{ fontFamily: 'var(--font-ui)', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)', marginBottom: '10px', textTransform: 'uppercase' }}>Scroll</div>
        <div style={scrollLine} />
      </div>

      <style>{`
        .hero-line { animation: fadeUp 0.7s cubic-bezier(.16,1,.3,1) both; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </section>
  );
}

const sectionStyle = (bg) => ({
  minHeight: '100vh',
  background: bg,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  transition: 'background 1s ease',
});

const noiseOverlay = {
  position: 'absolute', inset: 0,
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
  opacity: 0.4,
  pointerEvents: 'none',
};

const verticalText = {
  position: 'absolute', left: '20px', top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex', alignItems: 'center',
};

const contentWrapper = {
  width: '100%', maxWidth: '1280px',
  margin: '0 auto',
  padding: '120px 80px 80px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '60px',
  alignItems: 'center',
};

const textSide = { position: 'relative', zIndex: 2 };

const tagStyle = {
  fontFamily: 'var(--font-ui)',
  fontSize: '10px', letterSpacing: '0.3em',
  textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
  marginBottom: '20px', display: 'flex', alignItems: 'center',
};

const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '15px', fontStyle: 'italic',
  color: 'rgba(255,255,255,0.45)',
  marginBottom: '18px', letterSpacing: '0.08em',
};

const titleStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(56px, 7vw, 92px)',
  fontWeight: 700, lineHeight: 1.0,
  color: '#fff',
  letterSpacing: '-0.01em',
  marginBottom: '28px',
};

const subtitleStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '18px', fontWeight: 300,
  color: 'rgba(255,255,255,0.5)',
  marginBottom: '48px', letterSpacing: '0.04em',
};

const ctaRow = { display: 'flex', gap: '24px', alignItems: 'center' };

const ctaBtn = (accent) => ({
  fontFamily: 'var(--font-ui)', fontSize: '11px',
  fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase',
  padding: '16px 36px',
  background: accent,
  color: '#fff',
  border: `1px solid ${accent}`,
  display: 'flex', alignItems: 'center',
  transition: 'all 0.3s',
  cursor: 'pointer',
});

const ghostBtn = {
  fontFamily: 'var(--font-ui)', fontSize: '11px',
  fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.5)',
  padding: '16px 0',
  background: 'none', border: 'none',
  borderBottom: '1px solid rgba(255,255,255,0.2)',
  cursor: 'pointer',
  transition: 'color 0.3s, border-color 0.3s',
};

const imageSide = {
  position: 'relative',
  animation: 'fadeIn 1s ease forwards',
};

const imageFrame = {
  position: 'relative',
  width: '100%',
  maxWidth: '480px',
  margin: '0 auto',
  aspectRatio: '3/4',
  overflow: 'hidden',
};

const imageStyle = {
  width: '100%', height: '100%',
  objectFit: 'cover',
  filter: 'contrast(1.05) saturate(0.85)',
  transition: 'transform 1s ease',
};

const imageOverlay = (accent) => ({
  position: 'absolute', inset: 0,
  background: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%), linear-gradient(135deg, ${accent}22 0%, transparent 60%)`,
});

const floatingBadge = {
  position: 'absolute', bottom: '32px', left: '-20px',
  background: 'rgba(0,0,0,0.6)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.12)',
  padding: '14px 20px',
  textAlign: 'center',
};

const indicators = {
  position: 'absolute', bottom: '40px', left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex', gap: '10px',
};

const dot = (active, accent) => ({
  width: active ? '28px' : '8px',
  height: '8px', borderRadius: '4px',
  background: active ? accent : 'rgba(255,255,255,0.25)',
  border: 'none', cursor: 'pointer',
  transition: 'all 0.4s ease',
  padding: 0,
});

const scrollCue = {
  position: 'absolute', right: '40px', bottom: '40px',
  display: 'flex', flexDirection: 'column', alignItems: 'center',
};

const scrollLine = {
  width: '1px', height: '60px',
  background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
};