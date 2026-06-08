import React from 'react';

const brands = ['VALENTINO', 'JACQUEMUS', 'CELINE', 'THE ROW', 'TOTEME', 'LEMAIRE', 'BOTTEGA', 'LOEWE'];

export function BrandStrip() {
  return (
    <section style={section}>
      <div style={label}>
        <span>Featured In</span>
      </div>
      <div style={track}>
        <div style={inner}>
          {[...brands, ...brands].map((brand, i) => (
            <span key={i} style={brandItem}>
              {brand}
              <span style={dot}>·</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes slideBrands {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

const section = {
  borderTop: '1px solid var(--border)',
  borderBottom: '1px solid var(--border)',
  padding: '22px 0',
  background: 'var(--cream)',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  gap: '32px',
};

const label = {
  flexShrink: 0,
  padding: '0 32px',
  fontFamily: 'var(--font-ui)',
  fontSize: '9px',
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: 'var(--warm-gray)',
  borderRight: '1px solid var(--border)',
  whiteSpace: 'nowrap',
};

const track = {
  overflow: 'hidden',
  flex: 1,
};

const inner = {
  display: 'flex',
  whiteSpace: 'nowrap',
  animation: 'slideBrands 22s linear infinite',
  width: 'max-content',
};

const brandItem = {
  fontFamily: 'var(--font-display)',
  fontSize: '13px',
  fontWeight: 500,
  letterSpacing: '0.25em',
  color: 'var(--warm-gray)',
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0 4px',
};

const dot = {
  margin: '0 20px',
  color: 'var(--gold)',
  fontSize: '18px',
};