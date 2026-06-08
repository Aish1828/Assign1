import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "MAISON has completely redefined my relationship with fashion. Every piece feels like it was made specifically for me — the craftsmanship is simply unmatched.",
    author: "Isabelle Fontaine",
    role: "Creative Director, Paris",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
    rating: 5,
  },
  {
    id: 2,
    quote: "I've shopped at countless luxury boutiques, but MAISON consistently delivers something rare: clothing that tells a story. My wardrobe has never felt more intentional.",
    author: "Amara Osei",
    role: "Architect, London",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
    rating: 5,
  },
  {
    id: 3,
    quote: "The attention to detail is extraordinary. From the packaging to the finishing of each garment, you can feel the love that goes into every single piece.",
    author: "Sophia Keller",
    role: "Stylist, Milan",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80",
    rating: 5,
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(a => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section style={sectionStyle}>
      {/* Decorative background */}
      <div style={bgDecor} />

      <div style={container}>
        <div style={innerGrid}>
          {/* Left visual */}
          <div style={visualSide}>
            <div style={largeQuote}>"</div>
            <div style={avatarStack}>
              {testimonials.map((item, i) => (
                <div
                  key={item.id}
                  onClick={() => setActive(i)}
                  style={avatarItem(i === active, i, active)}
                >
                  <img
                    src={item.avatar}
                    alt={item.author}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                    onError={e => { e.target.src = 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80'; }}
                  />
                  {i === active && <div style={avatarRing} />}
                </div>
              ))}
            </div>
            <div style={statBlock}>
              <div style={statNum}>98%</div>
              <div style={statLabel}>Customer Satisfaction</div>
            </div>
          </div>

          {/* Right content */}
          <div style={contentSide}>
            <p style={eyebrow}>What Our Clients Say</p>
            <h2 style={heading}>The MAISON<br /><em>Experience</em></h2>

            {/* Stars */}
            <div style={stars}>
              {[...Array(t.rating)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>

            <blockquote style={quoteStyle} key={active}>
              {t.quote}
            </blockquote>

            <div style={authorRow}>
              <div>
                <p style={authorName}>{t.author}</p>
                <p style={authorRole}>{t.role}</p>
              </div>
            </div>

            {/* Controls */}
            <div style={controls}>
              <button style={arrowBtn} onClick={prev} aria-label="Previous">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <div style={progressBar}>
                {testimonials.map((_, i) => (
                  <div key={i} style={progressDot(i === active)} onClick={() => setActive(i)} />
                ))}
              </div>
              <button style={arrowBtn} onClick={next} aria-label="Next">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        blockquote { animation: fadeUp 0.5s ease forwards; }
      `}</style>
    </section>
  );
}

const sectionStyle = {
  padding: '120px 0',
  background: 'var(--charcoal)',
  position: 'relative',
  overflow: 'hidden',
};

const bgDecor = {
  position: 'absolute', top: '-40%', right: '-10%',
  width: '600px', height: '600px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(184,147,63,0.08) 0%, transparent 70%)',
  pointerEvents: 'none',
};

const container = {
  maxWidth: '1280px', margin: '0 auto', padding: '0 48px',
};

const innerGrid = {
  display: 'grid', gridTemplateColumns: '1fr 1.4fr',
  gap: '80px', alignItems: 'center',
};

const visualSide = {
  position: 'relative',
};

const largeQuote = {
  fontFamily: 'var(--font-display)', fontSize: '200px',
  fontWeight: 700, lineHeight: 0.7,
  color: 'rgba(184,147,63,0.15)',
  position: 'absolute', top: '-20px', left: '-20px',
  pointerEvents: 'none',
  userSelect: 'none',
};

const avatarStack = {
  display: 'flex', gap: '16px', marginBottom: '48px',
  paddingTop: '40px',
};

const avatarItem = (active, i, activeIdx) => ({
  width: active ? '72px' : '52px',
  height: active ? '72px' : '52px',
  borderRadius: '50%',
  overflow: 'hidden',
  cursor: 'pointer',
  position: 'relative',
  flexShrink: 0,
  opacity: active ? 1 : 0.5,
  transition: 'all 0.4s ease',
  alignSelf: 'center',
});

const avatarRing = {
  position: 'absolute', inset: '-3px',
  borderRadius: '50%',
  border: '2px solid var(--gold)',
  pointerEvents: 'none',
};

const statBlock = {
  padding: '24px 28px',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  display: 'inline-block',
};

const statNum = {
  fontFamily: 'var(--font-display)', fontSize: '48px',
  fontWeight: 700, color: 'var(--gold)',
  lineHeight: 1,
};

const statLabel = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  letterSpacing: '0.2em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.4)', marginTop: '6px',
};

const contentSide = {};

const eyebrow = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  letterSpacing: '0.3em', textTransform: 'uppercase',
  color: 'var(--gold)', marginBottom: '16px',
};

const heading = {
  fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 3.5vw, 50px)',
  fontWeight: 700, color: '#fff', lineHeight: 1.15,
  marginBottom: '28px',
};

const stars = {
  display: 'flex', gap: '4px', marginBottom: '28px',
};

const quoteStyle = {
  fontFamily: 'var(--font-body)', fontSize: '22px',
  fontWeight: 300, fontStyle: 'italic',
  lineHeight: 1.7, color: 'rgba(255,255,255,0.75)',
  marginBottom: '36px',
  borderLeft: '2px solid var(--gold)',
  paddingLeft: '24px',
};

const authorRow = {
  display: 'flex', alignItems: 'center', gap: '16px',
  marginBottom: '44px',
};

const authorName = {
  fontFamily: 'var(--font-body)', fontSize: '17px',
  fontWeight: 600, color: '#fff',
};

const authorRole = {
  fontFamily: 'var(--font-ui)', fontSize: '11px',
  letterSpacing: '0.1em', color: 'rgba(255,255,255,0.45)',
};

const controls = {
  display: 'flex', alignItems: 'center', gap: '20px',
};

const arrowBtn = {
  width: '44px', height: '44px',
  border: '1px solid rgba(255,255,255,0.2)',
  background: 'none', color: 'rgba(255,255,255,0.6)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', transition: 'all 0.3s',
};

const progressBar = {
  display: 'flex', gap: '8px', alignItems: 'center',
};

const progressDot = (active) => ({
  width: active ? '24px' : '6px',
  height: '6px', borderRadius: '3px',
  background: active ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
  transition: 'all 0.4s ease',
  cursor: 'pointer',
});