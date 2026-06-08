import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Ready to Wear',
    sub: '124 pieces',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
    span: 'wide',
  },
  {
    id: 2,
    name: 'Accessories',
    sub: '89 pieces',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    span: 'tall',
  },
  {
    id: 3,
    name: 'Eveningwear',
    sub: '56 pieces',
    image: 'https://images.unsplash.com/photo-1566479179817-c0b14e24b42e?w=600&q=80',
    span: 'normal',
  },
  {
    id: 4,
    name: 'Outerwear',
    sub: '43 pieces',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80',
    span: 'normal',
  },
];

export function Categories() {
  return (
    <section style={sectionStyle}>
      <div style={container}>
        {/* Header */}
        <div style={headerRow}>
          <div>
            <p style={eyebrow}>Shop by Category</p>
            <h2 style={heading}>
              Curated for<br />
              <em>Every Occasion</em>
            </h2>
          </div>
          <Link to="/collections" style={viewAllLink}>
            View All Categories
            <svg style={{ marginLeft: '8px' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div style={gridStyle}>
          {categories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ cat }) {
  const [hovered, setHovered] = useState(false);

  const cardStyles = {
    position: 'relative', overflow: 'hidden',
    cursor: 'pointer',
    gridColumn: cat.span === 'wide' ? 'span 2' : 'span 1',
    gridRow: cat.span === 'tall' ? 'span 2' : 'span 1',
    aspectRatio: cat.span === 'wide' ? '2/1' : cat.span === 'tall' ? '1/2' : '1/1',
    transform: hovered ? 'scale(1.01)' : 'scale(1)',
    transition: 'transform 0.5s cubic-bezier(.16,1,.3,1)',
    boxShadow: hovered ? '0 24px 64px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.06)',
  };

  return (
    <div
      style={cardStyles}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={cat.image}
        alt={cat.name}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.7s cubic-bezier(.16,1,.3,1)',
          filter: 'contrast(1.05) saturate(0.8)',
        }}
        onError={e => { e.target.src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80'; }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%)'
          : 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 60%)',
        transition: 'background 0.4s ease',
      }} />

      {/* Text */}
      <div style={{
        position: 'absolute', bottom: '28px', left: '28px', right: '28px',
      }}>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '6px' }}>
          {cat.sub}
        </p>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: cat.span === 'wide' ? '32px' : '24px', fontWeight: 600, color: '#fff', lineHeight: 1.1 }}>
          {cat.name}
        </h3>
        <div style={{
          marginTop: '14px', display: 'flex', alignItems: 'center', gap: '8px',
          opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(8px)',
          transition: 'all 0.35s ease',
        }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-pale)' }}>
            Explore
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold-pale)" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

const sectionStyle = {
  padding: '100px 0',
  background: 'var(--ivory)',
};

const container = {
  maxWidth: '1280px', margin: '0 auto', padding: '0 48px',
};

const headerRow = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
  marginBottom: '52px',
};

const eyebrow = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  letterSpacing: '0.3em', textTransform: 'uppercase',
  color: 'var(--gold)', marginBottom: '12px',
};

const heading = {
  fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 52px)',
  fontWeight: 700, lineHeight: 1.15, color: 'var(--charcoal)',
};

const viewAllLink = {
  fontFamily: 'var(--font-ui)', fontSize: '11px',
  letterSpacing: '0.18em', textTransform: 'uppercase',
  color: 'var(--charcoal)',
  display: 'flex', alignItems: 'center',
  paddingBottom: '2px', borderBottom: '1px solid var(--charcoal)',
  transition: 'color 0.3s',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'auto auto',
  gap: '16px',
};