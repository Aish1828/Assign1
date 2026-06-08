import React, { useState } from 'react';
import { ProductCard } from './ProductCard';

const tabs = ['All', 'New In', 'Bestsellers', 'Sale'];

const products = [
  {
    id: 1, name: 'Fluid Draped Midi Dress', category: 'Dresses',
    price: '485', badge: 'New',
    colors: ['#1a1a18', '#8B7355', '#C4A882'],
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80',
  },
  {
    id: 2, name: 'Structured Wool Blazer', category: 'Tailoring',
    price: '780', badge: 'New',
    colors: ['#1a1a18', '#F5F0E8', '#6B6B5A'],
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4e74?w=600&q=80',
  },
  {
    id: 3, name: 'Wide-Leg Crepe Trousers', category: 'Trousers',
    price: '345',
    original_price: '490',
    badge: 'Sale',
    colors: ['#2C2C2C', '#8B7355', '#E8E0D8'],
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
  },
  {
    id: 4, name: 'Cashmere Knit Cardigan', category: 'Knitwear',
    price: '620',
    colors: ['#D4C5A9', '#8B7355', '#1a1a18'],
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80',
  },
  {
    id: 5, name: 'Silk Charmeuse Blouse', category: 'Tops',
    price: '295', badge: 'New',
    colors: ['#F5E6D3', '#C4A882', '#8B7355'],
    image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600&q=80',
  },
  {
    id: 6, name: 'Leather Shoulder Bag', category: 'Bags',
    price: '1250',
    colors: ['#1a1a18', '#8B5E3C', '#C4A882'],
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
  },
];

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <section style={sectionStyle}>
      <div style={container}>
        {/* Header */}
        <div style={headerRow}>
          <div>
            <p style={eyebrow}>Hand-Picked Selection</p>
            <h2 style={heading}>
              Featured<br />
              <em>Pieces</em>
            </h2>
          </div>
          <div style={tabRow}>
            {tabs.map(tab => (
              <button
                key={tab}
                style={tabBtn(tab === activeTab)}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div style={gridStyle}>
          {products.map((product, i) => (
            <div key={product.id} style={{ animationDelay: `${i * 0.08}s`, animation: 'fadeUp 0.6s ease both' }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={ctaRow}>
          <div style={ctaDivider} />
          <a href="#" style={ctaBtn}>
            View All Products
            <svg style={{ marginLeft: '10px' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <div style={ctaDivider} />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </section>
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
  display: 'flex', justifyContent: 'space-between',
  alignItems: 'flex-end', marginBottom: '52px',
};

const eyebrow = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  letterSpacing: '0.3em', textTransform: 'uppercase',
  color: 'var(--gold)', marginBottom: '10px',
};

const heading = {
  fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 52px)',
  fontWeight: 700, lineHeight: 1.15, color: 'var(--charcoal)',
};

const tabRow = {
  display: 'flex', gap: '4px',
  background: 'var(--cream)',
  padding: '4px',
  border: '1px solid var(--border)',
};

const tabBtn = (active) => ({
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase',
  padding: '10px 20px',
  background: active ? 'var(--charcoal)' : 'transparent',
  color: active ? '#fff' : 'var(--warm-gray)',
  border: 'none', cursor: 'pointer',
  transition: 'all 0.25s ease',
});

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '28px',
};

const ctaRow = {
  marginTop: '64px',
  display: 'flex', alignItems: 'center', gap: '32px',
};

const ctaDivider = {
  flex: 1, height: '1px', background: 'var(--border)',
};

const ctaBtn = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase',
  padding: '14px 36px',
  border: '1px solid var(--charcoal)',
  color: 'var(--charcoal)',
  display: 'flex', alignItems: 'center',
  whiteSpace: 'nowrap',
  transition: 'all 0.3s',
};