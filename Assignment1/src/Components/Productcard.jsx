import React, { useState } from 'react';

export function Productcard({ product, featured = false }) {
  const [hovered, setHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div
      style={cardStyle(hovered, featured)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div style={imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          style={imageStyle(hovered)}
          onError={e => { e.target.src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80'; }}
        />
        {product.hover_image && (
          <img
            src={product.hover_image}
            alt={product.name + ' alt'}
            style={{ ...imageStyle(false), position: 'absolute', inset: 0, opacity: hovered ? 1 : 0, transition: 'opacity 0.6s ease' }}
            onError={e => { e.target.style.display = 'none'; }}
          />
        )}

        {/* Overlay */}
        <div style={overlayStyle(hovered)}>
          <button style={quickAddBtn}>
            Quick Add
          </button>
        </div>

        {/* Badges */}
        <div style={badgesRow}>
          {product.badge && (
            <span style={badgeStyle(product.badge)}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          style={wishlistBtn(hovered, wishlisted)}
          onClick={(e) => { e.stopPropagation(); setWishlisted(w => !w); }}
          aria-label="Wishlist"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      {/* Info */}
      <div style={infoStyle}>
        <div style={topRow}>
          <div>
            <p style={categoryLabel}>{product.category}</p>
            <h3 style={productName}>{product.name}</h3>
          </div>
          <div style={priceBlock}>
            {product.original_price && (
              <span style={originalPrice}>£{product.original_price}</span>
            )}
            <span style={priceStyle(!!product.original_price)}>£{product.price}</span>
          </div>
        </div>

        {/* Color swatches */}
        {product.colors && (
          <div style={swatchRow}>
            {product.colors.map((color, i) => (
              <div key={i} style={swatch(color)} title={color} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const cardStyle = (hovered, featured) => ({
  background: 'var(--ivory)',
  cursor: 'pointer',
  transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
  transition: 'transform 0.4s cubic-bezier(.16,1,.3,1)',
  gridRow: featured ? 'span 2' : 'span 1',
});

const imageWrapper = {
  position: 'relative',
  overflow: 'hidden',
  aspectRatio: '3/4',
  background: 'var(--cream)',
};

const imageStyle = (hovered) => ({
  width: '100%', height: '100%',
  objectFit: 'cover',
  transform: hovered ? 'scale(1.06)' : 'scale(1)',
  transition: 'transform 0.7s cubic-bezier(.16,1,.3,1)',
});

const overlayStyle = (hovered) => ({
  position: 'absolute', inset: 0,
  background: 'rgba(26,26,24,0.25)',
  display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
  paddingBottom: '24px',
  opacity: hovered ? 1 : 0,
  transition: 'opacity 0.3s ease',
});

const quickAddBtn = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase',
  padding: '12px 28px',
  background: 'var(--ivory)',
  color: 'var(--charcoal)',
  border: 'none', cursor: 'pointer',
  transition: 'background 0.2s',
};

const badgesRow = {
  position: 'absolute', top: '14px', left: '14px',
  display: 'flex', flexDirection: 'column', gap: '6px',
};

const badgeStyle = (badge) => ({
  fontFamily: 'var(--font-ui)', fontSize: '9px',
  fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase',
  padding: '4px 10px',
  background: badge === 'New' ? 'var(--charcoal)' : badge === 'Sale' ? '#c0392b' : 'var(--gold)',
  color: '#fff',
  display: 'inline-block',
});

const wishlistBtn = (hovered, wishlisted) => ({
  position: 'absolute', top: '14px', right: '14px',
  width: '34px', height: '34px',
  borderRadius: '50%',
  background: 'rgba(250,247,242,0.9)',
  backdropFilter: 'blur(4px)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: wishlisted ? '#c0392b' : 'var(--charcoal)',
  opacity: hovered || wishlisted ? 1 : 0,
  transition: 'opacity 0.3s, color 0.2s',
  cursor: 'pointer',
  border: 'none',
});

const infoStyle = {
  padding: '18px 4px 8px',
};

const topRow = {
  display: 'flex', justifyContent: 'space-between',
  alignItems: 'flex-start', gap: '12px',
};

const categoryLabel = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  fontWeight: 400, letterSpacing: '0.18em',
  textTransform: 'uppercase', color: 'var(--warm-gray)',
  marginBottom: '4px',
};

const productName = {
  fontFamily: 'var(--font-body)', fontSize: '16px',
  fontWeight: 500, color: 'var(--charcoal)',
  letterSpacing: '0.01em', lineHeight: 1.3,
};

const priceBlock = {
  textAlign: 'right', flexShrink: 0,
};

const originalPrice = {
  fontFamily: 'var(--font-ui)', fontSize: '12px',
  color: 'var(--warm-gray)',
  textDecoration: 'line-through',
  display: 'block',
};

const priceStyle = (hasOriginal) => ({
  fontFamily: 'var(--font-body)', fontSize: '17px',
  fontWeight: 500,
  color: hasOriginal ? '#c0392b' : 'var(--charcoal)',
});

const swatchRow = {
  display: 'flex', gap: '6px', marginTop: '12px',
};

const swatch = (color) => ({
  width: '14px', height: '14px',
  borderRadius: '50%',
  background: color,
  border: '1px solid var(--border)',
  cursor: 'pointer',
  transition: 'transform 0.2s',
});
