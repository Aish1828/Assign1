import React, { useState } from 'react';

const collections = [
  {
    id: 1,
    season: 'SS 2025',
    name: 'The Art of Restraint',
    desc: 'A meditation on what remains when everything superfluous is stripped away. Clean silhouettes, considered palettes, enduring quality.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80',
    pieces: 42,
    highlight: true,
  },
  {
    id: 2,
    season: 'AW 2024',
    name: 'Shadow Garden',
    desc: 'Inspired by Japanese wabi-sabi philosophy. Dark, contemplative, and strangely comforting.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80',
    pieces: 38,
    highlight: false,
  },
  {
    id: 3,
    season: 'Resort 2025',
    name: 'Azure Coastline',
    desc: 'Light fabrics, nautical references, the effortless ease of Mediterranean living distilled into wearable art.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80',
    pieces: 28,
    highlight: false,
  },
  {
    id: 4,
    season: 'Pre-Fall 2025',
    name: 'The Gentle Power',
    desc: 'Power dressing, reimagined. Strength expressed through refined tailoring and unexpected softness.',
    image: 'https://images.unsplash.com/photo-1566479179817-c0b14e24b42e?w=900&q=80',
    pieces: 34,
    highlight: false,
  },
];

export function Collections() {
  return (
    <div style={pageStyle}>
      {/* Header */}
      <div style={pageHeader}>
        <div style={headerContent}>
          <p style={breadcrumb}>Home / Collections</p>
          <h1 style={pageTitle}>Our Collections</h1>
          <p style={pageSubtitle}>Each season, a new chapter in the MAISON story</p>
        </div>
      </div>

      <div style={container}>
        {/* Featured collection */}
        <FeaturedCollection collection={collections[0]} />

        {/* Grid of others */}
        <div style={{ marginTop: '80px' }}>
          <h2 style={sectionHeading}>Past Seasons</h2>
          <div style={collectionsGrid}>
            {collections.slice(1).map(col => (
              <CollectionCard key={col.id} collection={col} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedCollection({ collection }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={featuredCard}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={featuredImage}>
        <img src={collection.image} alt={collection.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.8s cubic-bezier(.16,1,.3,1)',
            filter: 'contrast(1.05) saturate(0.75)',
          }}
          onError={e => { e.target.src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80'; }}
        />
        <div style={featuredOverlay} />
      </div>
      <div style={featuredContent}>
        <div style={featuredTag}>
          <span style={tagLine} />{collection.season} — Current Season
        </div>
        <h2 style={featuredTitle}>{collection.name}</h2>
        <p style={featuredDesc}>{collection.desc}</p>
        <div style={featuredMeta}>
          <span style={metaItem}>{collection.pieces} pieces</span>
          <button style={exploreBtn}>
            Explore Collection
            <svg style={{ marginLeft: '10px' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function CollectionCard({ collection }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={colCard}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={colImage}>
        <img src={collection.image} alt={collection.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.7s cubic-bezier(.16,1,.3,1)',
            filter: 'contrast(1.05) saturate(0.75)',
          }}
          onError={e => { e.target.src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80'; }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
      </div>
      <div style={colContent}>
        <p style={colSeason}>{collection.season}</p>
        <h3 style={colTitle}>{collection.name}</h3>
        <p style={colDesc}>{collection.desc}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
          <span style={colPieces}>{collection.pieces} pieces</span>
          <a href="#" style={colLink}>View →</a>
        </div>
      </div>
    </div>
  );
}

const pageStyle = { background: 'var(--ivory)', paddingBottom: '100px' };
const pageHeader = {
  height: '340px',
  background: 'linear-gradient(135deg, #0d1520 0%, #1a2535 100%)',
  display: 'flex', alignItems: 'flex-end',
  position: 'relative',
};
const headerContent = {
  maxWidth: '1280px', width: '100%', margin: '0 auto',
  padding: '0 48px 56px', position: 'relative', zIndex: 1,
};
const breadcrumb = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  letterSpacing: '0.2em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.35)', marginBottom: '12px',
};
const pageTitle = {
  fontFamily: 'var(--font-display)', fontSize: '60px',
  fontWeight: 700, color: '#fff', marginBottom: '8px',
};
const pageSubtitle = {
  fontFamily: 'var(--font-body)', fontStyle: 'italic',
  fontSize: '18px', color: 'rgba(255,255,255,0.45)',
};
const container = {
  maxWidth: '1280px', margin: '0 auto', padding: '60px 48px 0',
};
const sectionHeading = {
  fontFamily: 'var(--font-display)', fontSize: '32px',
  fontWeight: 600, color: 'var(--charcoal)', marginBottom: '36px',
};
const featuredCard = {
  display: 'grid', gridTemplateColumns: '1.2fr 1fr',
  height: '520px', overflow: 'hidden', cursor: 'pointer',
  border: '1px solid var(--border)',
};
const featuredImage = { position: 'relative', overflow: 'hidden' };
const featuredOverlay = {
  position: 'absolute', inset: 0,
  background: 'linear-gradient(to right, transparent 60%, var(--cream) 100%)',
};
const featuredContent = {
  background: 'var(--cream)',
  padding: '56px 52px',
  display: 'flex', flexDirection: 'column', justifyContent: 'center',
  borderLeft: '1px solid var(--border)',
};
const featuredTag = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  letterSpacing: '0.25em', textTransform: 'uppercase',
  color: 'var(--gold)', marginBottom: '20px',
  display: 'flex', alignItems: 'center', gap: '10px',
};
const tagLine = { display: 'inline-block', width: '20px', height: '1px', background: 'var(--gold)' };
const featuredTitle = {
  fontFamily: 'var(--font-display)', fontSize: '46px',
  fontWeight: 700, lineHeight: 1.1, color: 'var(--charcoal)',
  marginBottom: '20px',
};
const featuredDesc = {
  fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 300,
  lineHeight: 1.7, color: 'var(--warm-gray)', marginBottom: '36px',
};
const featuredMeta = { display: 'flex', alignItems: 'center', justifyContent: 'space-between' };
const metaItem = {
  fontFamily: 'var(--font-ui)', fontSize: '11px',
  letterSpacing: '0.15em', textTransform: 'uppercase',
  color: 'var(--warm-gray)',
};
const exploreBtn = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase',
  padding: '13px 28px',
  background: 'var(--charcoal)', color: '#fff',
  border: 'none', cursor: 'pointer',
  display: 'flex', alignItems: 'center',
};
const collectionsGrid = {
  display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px',
};
const colCard = {
  cursor: 'pointer',
  border: '1px solid var(--border)',
  overflow: 'hidden',
  transition: 'box-shadow 0.3s',
};
const colImage = { position: 'relative', height: '320px', overflow: 'hidden' };
const colContent = { padding: '28px' };
const colSeason = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  letterSpacing: '0.2em', textTransform: 'uppercase',
  color: 'var(--gold)', marginBottom: '8px',
};
const colTitle = {
  fontFamily: 'var(--font-display)', fontSize: '24px',
  fontWeight: 600, color: 'var(--charcoal)', marginBottom: '10px',
};
const colDesc = {
  fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 300,
  color: 'var(--warm-gray)', lineHeight: 1.6,
};
const colPieces = {
  fontFamily: 'var(--font-ui)', fontSize: '11px',
  letterSpacing: '0.1em', color: 'var(--warm-gray)',
};
const colLink = {
  fontFamily: 'var(--font-ui)', fontSize: '11px',
  letterSpacing: '0.15em', textTransform: 'uppercase',
  color: 'var(--charcoal)',
  borderBottom: '1px solid var(--charcoal)',
  paddingBottom: '2px',
};