import React, { useState } from 'react';

export function EditorialBanner() {
  const [hovered, setHovered] = useState(false);

  return (
    <section style={sectionStyle}>
      <div style={container}>
        <div
          style={bannerGrid}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Left: tall editorial image */}
          <div style={leftImage}>
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=80"
              alt="Editorial"
              style={{ width: '100%', height: '100%', objectFit: 'cover',
                transform: hovered ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.8s cubic-bezier(.16,1,.3,1)',
                filter: 'contrast(1.05) saturate(0.75)',
              }}
              onError={e => { e.target.src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&q=80'; }}
            />
            <div style={leftOverlay} />
          </div>

          {/* Right: content */}
          <div style={rightContent}>
            <div style={rightTop}>
              <div style={seasonTag}>
                <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--gold)', marginRight: '10px', verticalAlign: 'middle' }} />
                Summer / Spring 2025
              </div>
              <h2 style={editorialTitle}>
                The Art of<br />
                <em style={{ color: 'var(--gold)' }}>Restraint</em>
              </h2>
              <p style={editorialBody}>
                This season, we explore the power of the considered edit — pieces that transcend trend, chosen with intention and worn with confidence.
              </p>
              <button style={ctaButton}>
                Discover the Collection
                <svg style={{ marginLeft: '10px' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            {/* Small second image */}
            <div style={secondImageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1566479179817-c0b14e24b42e?w=500&q=80"
                alt="Editorial 2"
                style={{ width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'contrast(1.05) saturate(0.75)',
                }}
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80'; }}
              />
              <div style={imageCaption}>
                <span style={captionNum}>01</span>
                <span style={captionText}>The Signature Silhouette</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div style={statsRow}>
          {[
            { num: '25+', label: 'Years of Craftsmanship' },
            { num: '48', label: 'Countries Worldwide' },
            { num: '100%', label: 'Ethically Sourced' },
            { num: '2k+', label: 'Bespoke Pieces Yearly' },
          ].map(stat => (
            <div key={stat.label} style={statItem}>
              <div style={statNum}>{stat.num}</div>
              <div style={statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: '0 0 100px',
  background: 'var(--ivory)',
};

const container = {
  maxWidth: '1280px', margin: '0 auto', padding: '0 48px',
};

const bannerGrid = {
  display: 'grid', gridTemplateColumns: '1fr 1fr',
  gap: '0',
  height: '680px',
  overflow: 'hidden',
  cursor: 'pointer',
};

const leftImage = {
  position: 'relative',
  overflow: 'hidden',
};

const leftOverlay = {
  position: 'absolute', inset: 0,
  background: 'linear-gradient(to right, transparent 70%, var(--ivory) 100%)',
};

const rightContent = {
  background: 'var(--cream)',
  display: 'flex', flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '60px 52px',
  borderTop: '1px solid var(--border)',
  borderRight: '1px solid var(--border)',
  borderBottom: '1px solid var(--border)',
};

const rightTop = {};

const seasonTag = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  letterSpacing: '0.25em', textTransform: 'uppercase',
  color: 'var(--warm-gray)', marginBottom: '20px',
  display: 'flex', alignItems: 'center',
};

const editorialTitle = {
  fontFamily: 'var(--font-display)', fontSize: 'clamp(38px, 4vw, 56px)',
  fontWeight: 700, lineHeight: 1.1, color: 'var(--charcoal)',
  marginBottom: '24px',
};

const editorialBody = {
  fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 300,
  lineHeight: 1.7, color: 'var(--warm-gray)',
  maxWidth: '380px', marginBottom: '36px',
};

const ctaButton = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase',
  padding: '14px 32px',
  background: 'var(--charcoal)', color: '#fff',
  border: 'none', cursor: 'pointer',
  display: 'inline-flex', alignItems: 'center',
  transition: 'background 0.3s',
};

const secondImageWrapper = {
  position: 'relative',
  height: '200px',
  overflow: 'hidden',
};

const imageCaption = {
  position: 'absolute', bottom: '16px', left: '16px',
  display: 'flex', alignItems: 'center', gap: '12px',
};

const captionNum = {
  fontFamily: 'var(--font-display)', fontSize: '12px',
  fontWeight: 700, color: 'var(--gold)',
};

const captionText = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  letterSpacing: '0.15em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.7)',
};

const statsRow = {
  display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
  border: '1px solid var(--border)',
  marginTop: '0',
};

const statItem = {
  padding: '36px 40px',
  borderRight: '1px solid var(--border)',
  textAlign: 'center',
};

const statNum = {
  fontFamily: 'var(--font-display)', fontSize: '42px',
  fontWeight: 700, color: 'var(--charcoal)',
  lineHeight: 1, marginBottom: '8px',
};

const statLabel = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  letterSpacing: '0.2em', textTransform: 'uppercase',
  color: 'var(--warm-gray)',
};