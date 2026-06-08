import React from 'react';

const team = [
  { name: 'Elise Moreau', role: 'Founder & Creative Director', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80' },
  { name: 'Thomas Laurent', role: 'Head of Tailoring', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
  { name: 'Amara Osei', role: 'Design Director', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80' },
];

export function About() {
  return (
    <div style={pageStyle}>
      {/* Hero */}
      <div style={heroSection}>
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
          alt="Atelier"
          style={heroBg}
          onError={e => { e.target.src = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80'; }}
        />
        <div style={heroOverlay} />
        <div style={heroContent}>
          <p style={eyebrow}>Est. 1998 · London & Paris</p>
          <h1 style={heroTitle}>The Art of<br /><em>The Long Game</em></h1>
        </div>
      </div>

      <div style={container}>
        {/* Mission */}
        <div style={missionGrid}>
          <div>
            <p style={sectionEyebrow}>Our Philosophy</p>
            <h2 style={sectionTitle}>Clothes That<br />Outlast Trends</h2>
          </div>
          <div>
            <p style={bodyText}>
              MAISON was born from a single conviction: that the most sustainable act in fashion is to buy less, but better. Founded by Elise Moreau in 1998, we have spent over two decades perfecting the art of the considered wardrobe.
            </p>
            <p style={{ ...bodyText, marginTop: '20px' }}>
              Each piece in our collection is designed to be worn for decades, not seasons. We work with the same ateliers, the same fabric suppliers, and the same master craftspeople we have always worked with — relationships built on trust, shared values, and a mutual obsession with quality.
            </p>
          </div>
        </div>

        <div style={divider} />

        {/* Values */}
        <div style={valuesSection}>
          <p style={sectionEyebrow}>What We Stand For</p>
          <h2 style={{ ...sectionTitle, textAlign: 'center', marginBottom: '56px' }}>Our Values</h2>
          <div style={valuesGrid}>
            {[
              { num: '01', title: 'Slow Fashion', desc: 'Two collections per year. No more. We take the time to get things right.' },
              { num: '02', title: 'Ethical Sourcing', desc: 'Every fabric is certified, every supplier audited, every worker fairly paid.' },
              { num: '03', title: 'Master Craftsmanship', desc: 'Our ateliers have been honed over generations. Quality you can feel.' },
              { num: '04', title: 'Zero Waste Commitment', desc: 'All offcuts are repurposed. All packaging is recyclable. Always.' },
            ].map(v => (
              <div key={v.num} style={valueCard}>
                <div style={valueNum}>{v.num}</div>
                <h3 style={valueTitle}>{v.title}</h3>
                <p style={valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={divider} />

        {/* Team */}
        <div style={teamSection}>
          <p style={sectionEyebrow}>The People Behind MAISON</p>
          <h2 style={{ ...sectionTitle, marginBottom: '48px' }}>Our Creative Team</h2>
          <div style={teamGrid}>
            {team.map(member => (
              <div key={member.name} style={memberCard}>
                <div style={memberImage}>
                  <img
                    src={member.image} alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
                    onError={e => { e.target.src = 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80'; }}
                  />
                </div>
                <div style={memberInfo}>
                  <h3 style={memberName}>{member.name}</h3>
                  <p style={memberRole}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const pageStyle = { background: 'var(--ivory)', paddingBottom: '100px' };

const heroSection = {
  height: '80vh', minHeight: '560px',
  position: 'relative', display: 'flex',
  alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
};

const heroBg = {
  position: 'absolute', inset: 0, width: '100%', height: '100%',
  objectFit: 'cover', filter: 'contrast(1.05) saturate(0.7)',
};

const heroOverlay = {
  position: 'absolute', inset: 0,
  background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 100%)',
};

const heroContent = {
  position: 'relative', zIndex: 1, textAlign: 'center',
};

const eyebrow = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  letterSpacing: '0.3em', textTransform: 'uppercase',
  color: 'var(--gold)', marginBottom: '20px',
};

const heroTitle = {
  fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 7vw, 88px)',
  fontWeight: 700, color: '#fff', lineHeight: 1.1, textAlign: 'center',
};

const container = {
  maxWidth: '1280px', margin: '0 auto', padding: '0 48px',
};

const missionGrid = {
  display: 'grid', gridTemplateColumns: '1fr 1fr',
  gap: '80px', alignItems: 'start',
  padding: '80px 0',
};

const sectionEyebrow = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  letterSpacing: '0.3em', textTransform: 'uppercase',
  color: 'var(--gold)', marginBottom: '16px',
};

const sectionTitle = {
  fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 3.5vw, 48px)',
  fontWeight: 700, lineHeight: 1.15, color: 'var(--charcoal)',
};

const bodyText = {
  fontFamily: 'var(--font-body)', fontSize: '19px', fontWeight: 300,
  lineHeight: 1.8, color: 'var(--warm-gray)',
};

const divider = {
  height: '1px', background: 'var(--border)',
};

const valuesSection = {
  padding: '80px 0', textAlign: 'left',
};

const valuesGrid = {
  display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px',
};

const valueCard = {
  padding: '36px 28px',
  border: '1px solid var(--border)',
  background: 'var(--cream)',
  transition: 'box-shadow 0.3s',
};

const valueNum = {
  fontFamily: 'var(--font-display)', fontSize: '36px',
  fontWeight: 700, color: 'var(--gold)',
  marginBottom: '16px', lineHeight: 1,
};

const valueTitle = {
  fontFamily: 'var(--font-display)', fontSize: '20px',
  fontWeight: 600, color: 'var(--charcoal)', marginBottom: '12px',
};

const valueDesc = {
  fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 300,
  lineHeight: 1.6, color: 'var(--warm-gray)',
};

const teamSection = { padding: '80px 0' };

const teamGrid = {
  display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px',
};

const memberCard = { cursor: 'pointer' };

const memberImage = {
  height: '420px', overflow: 'hidden',
  marginBottom: '20px',
  background: 'var(--cream)',
};

const memberInfo = {};

const memberName = {
  fontFamily: 'var(--font-display)', fontSize: '22px',
  fontWeight: 600, color: 'var(--charcoal)', marginBottom: '4px',
};

const memberRole = {
  fontFamily: 'var(--font-ui)', fontSize: '11px',
  letterSpacing: '0.15em', textTransform: 'uppercase',
  color: 'var(--warm-gray)',
};