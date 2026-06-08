import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';

const allProducts = [
  { id: 1, name: 'Fluid Draped Midi Dress', category: 'Dresses', price: '485', badge: 'New', colors: ['#1a1a18', '#8B7355', '#C4A882'], image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80' },
  { id: 2, name: 'Structured Wool Blazer', category: 'Tailoring', price: '780', badge: 'New', colors: ['#1a1a18', '#F5F0E8'], image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4e74?w=600&q=80' },
  { id: 3, name: 'Wide-Leg Crepe Trousers', category: 'Trousers', price: '345', original_price: '490', badge: 'Sale', colors: ['#2C2C2C', '#8B7355'], image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80' },
  { id: 4, name: 'Cashmere Knit Cardigan', category: 'Knitwear', price: '620', colors: ['#D4C5A9', '#1a1a18'], image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80' },
  { id: 5, name: 'Silk Charmeuse Blouse', category: 'Tops', price: '295', badge: 'New', colors: ['#F5E6D3', '#C4A882'], image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600&q=80' },
  { id: 6, name: 'Leather Shoulder Bag', category: 'Bags', price: '1250', colors: ['#1a1a18', '#8B5E3C'], image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80' },
  { id: 7, name: 'Tailored Linen Suit', category: 'Tailoring', price: '1150', badge: 'New', colors: ['#C4B9A0', '#1a1a18'], image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&q=80' },
  { id: 8, name: 'Merino Turtleneck', category: 'Knitwear', price: '285', colors: ['#1a1a18', '#8B7355', '#E8E0D8'], image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80' },
  { id: 9, name: 'Satin Evening Gown', category: 'Dresses', price: '1890', colors: ['#1a1a18', '#8B5E3C'], image: 'https://images.unsplash.com/photo-1566479179817-c0b14e24b42e?w=600&q=80' },
];

const filters = ['All', 'Dresses', 'Tailoring', 'Knitwear', 'Tops', 'Bags', 'Trousers'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest'];

export function Shop() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');

  const filtered = activeFilter === 'All' ? allProducts : allProducts.filter(p => p.category === activeFilter);

  return (
    <div style={pageStyle}>
      {/* Page header */}
      <div style={pageHeader}>
        <div style={headerOverlay} />
        <div style={headerContent}>
          <p style={breadcrumb}>Home / Shop</p>
          <h1 style={pageTitle}>All Collections</h1>
          <p style={pageSubtitle}>{allProducts.length} curated pieces</p>
        </div>
      </div>

      <div style={container}>
        {/* Toolbar */}
        <div style={toolbar}>
          {/* Filters */}
          <div style={filterRow}>
            {filters.map(f => (
              <button key={f} style={filterBtn(f === activeFilter)} onClick={() => setActiveFilter(f)}>
                {f}
              </button>
            ))}
          </div>
          {/* Sort */}
          <div style={sortRow}>
            <span style={sortLabel}>Sort by:</span>
            <select style={sortSelect} value={sortBy} onChange={e => setSortBy(e.target.value)}>
              {sortOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
        </div>

        {/* Grid */}
        <div style={grid}>
          {filtered.map((product, i) => (
            <div key={product.id} style={{ animation: 'fadeUp 0.5s ease both', animationDelay: `${i * 0.06}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
}

const pageStyle = { background: 'var(--ivory)', paddingBottom: '80px' };

const pageHeader = {
  height: '320px',
  background: 'linear-gradient(135deg, #1a1510 0%, #2d2418 100%)',
  display: 'flex', alignItems: 'flex-end',
  position: 'relative', overflow: 'hidden',
};

const headerOverlay = {
  position: 'absolute', inset: 0,
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
};

const headerContent = {
  maxWidth: '1280px', width: '100%', margin: '0 auto',
  padding: '0 48px 52px',
  position: 'relative', zIndex: 1,
};

const breadcrumb = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  letterSpacing: '0.2em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.35)', marginBottom: '12px',
};

const pageTitle = {
  fontFamily: 'var(--font-display)', fontSize: '56px',
  fontWeight: 700, color: '#fff', marginBottom: '8px',
};

const pageSubtitle = {
  fontFamily: 'var(--font-body)', fontStyle: 'italic',
  fontSize: '17px', color: 'rgba(255,255,255,0.45)',
};

const container = {
  maxWidth: '1280px', margin: '0 auto', padding: '0 48px',
};

const toolbar = {
  display: 'flex', justifyContent: 'space-between',
  alignItems: 'center', padding: '36px 0 24px',
  borderBottom: '1px solid var(--border)', marginBottom: '40px',
};

const filterRow = { display: 'flex', gap: '4px' };

const filterBtn = (active) => ({
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase',
  padding: '9px 18px',
  background: active ? 'var(--charcoal)' : 'transparent',
  color: active ? '#fff' : 'var(--warm-gray)',
  border: '1px solid ' + (active ? 'var(--charcoal)' : 'var(--border)'),
  cursor: 'pointer', transition: 'all 0.2s',
});

const sortRow = { display: 'flex', alignItems: 'center', gap: '12px' };

const sortLabel = {
  fontFamily: 'var(--font-ui)', fontSize: '11px',
  letterSpacing: '0.1em', color: 'var(--warm-gray)',
};

const sortSelect = {
  fontFamily: 'var(--font-ui)', fontSize: '11px',
  letterSpacing: '0.1em', color: 'var(--charcoal)',
  background: 'transparent', border: '1px solid var(--border)',
  padding: '8px 14px', cursor: 'pointer', outline: 'none',
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '28px',
};