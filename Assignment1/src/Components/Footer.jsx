import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const footerLinks = {
  'The House': ['Our Story', 'Craftmanship', 'Sustainability', 'Careers', 'Press'],
  'Shop': ['New Arrivals', 'Ready to Wear', 'Accessories', 'Eveningwear', 'Sale'],
  'Client Services': ['Shipping & Returns', 'Size Guide', 'Care Instructions', 'Gift Cards', 'FAQs'],
};

const socials = [
  { name: 'Instagram', icon: InstagramIcon },
  { name: 'Pinterest', icon: PinterestIcon },
  { name: 'Facebook', icon: FacebookIcon },
  { name: 'TikTok', icon: TikTokIcon },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer style={footerStyle}>
      {/* Top marquee strip */}
      <div style={marqueeStrip}>
        <div style={marqueeTrack}>
          {[...Array(6)].map((_, i) => (
            <span key={i} style={marqueeItem}>
              New Season Arrivals <span style={{ color: 'var(--gold)', margin: '0 24px' }}>✦</span>
              Free Shipping over £200 <span style={{ color: 'var(--gold)', margin: '0 24px' }}>✦</span>
              Members Get Early Access <span style={{ color: 'var(--gold)', margin: '0 24px' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <div style={container}>
        {/* Newsletter */}
        <div style={newsletterRow}>
          <div>
            <h3 style={newsletterHeading}>Join the Inner Circle</h3>
            <p style={newsletterSub}>Be first to discover new arrivals, exclusive offers, and editorial content.</p>
          </div>
          <form style={formStyle} onSubmit={handleSubscribe}>
            {subscribed ? (
              <div style={successMsg}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Welcome to MAISON. You're on the list.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  style={inputStyle}
                  required
                />
                <button type="submit" style={subscribeBtn}>Subscribe</button>
              </>
            )}
          </form>
        </div>

        <div style={divider} />

        {/* Main links grid */}
        <div style={linksGrid}>
          {/* Brand column */}
          <div style={brandCol}>
            <Link to="/" style={logoStyle}>
              M<span style={{ color: 'var(--gold)' }}>A</span>ISON
            </Link>
            <p style={brandDesc}>
              Crafting timeless luxury since 1998. Each piece is a testament to the enduring power of exceptional design and uncompromising quality.
            </p>
            <div style={socialsRow}>
              {socials.map(({ name, icon: Icon }) => (
                <a key={name} href="#" style={socialIcon} title={name}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={colHeading}>{category}</h4>
              <ul style={{ listStyle: 'none' }}>
                {links.map(link => (
                  <li key={link} style={{ marginBottom: '12px' }}>
                    <a href="#" style={footerLink}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={divider} />

        {/* Bottom bar */}
        <div style={bottomBar}>
          <p style={copyright}>© 2025 MAISON. All rights reserved.</p>
          <div style={bottomLinks}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(item => (
              <a key={item} href="#" style={footerLinkSmall}>{item}</a>
            ))}
          </div>
          <p style={copyright}>Made with care in London & Paris</p>
        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
}

const footerStyle = {
  background: 'var(--dark)',
  color: '#fff',
  overflow: 'hidden',
};

const marqueeStrip = {
  background: 'rgba(184,147,63,0.12)',
  borderTop: '1px solid rgba(184,147,63,0.2)',
  borderBottom: '1px solid rgba(184,147,63,0.2)',
  padding: '12px 0',
  overflow: 'hidden',
};

const marqueeTrack = {
  display: 'flex',
  whiteSpace: 'nowrap',
  animation: 'marqueeScroll 28s linear infinite',
  width: 'max-content',
};

const marqueeItem = {
  fontFamily: 'var(--font-ui)',
  fontSize: '11px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.55)',
};

const container = {
  maxWidth: '1280px', margin: '0 auto', padding: '0 48px',
};

const newsletterRow = {
  display: 'flex', justifyContent: 'space-between',
  alignItems: 'center', gap: '48px',
  padding: '64px 0 52px',
};

const newsletterHeading = {
  fontFamily: 'var(--font-display)', fontSize: '28px',
  fontWeight: 600, color: '#fff', marginBottom: '8px',
};

const newsletterSub = {
  fontFamily: 'var(--font-body)', fontSize: '16px',
  color: 'rgba(255,255,255,0.45)', maxWidth: '400px',
};

const formStyle = {
  display: 'flex', gap: '0', flexShrink: 0,
};

const inputStyle = {
  width: '280px', padding: '14px 20px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRight: 'none',
  color: '#fff', fontFamily: 'var(--font-ui)', fontSize: '13px',
  outline: 'none',
};

const subscribeBtn = {
  padding: '14px 28px',
  background: 'var(--gold)',
  color: '#fff', fontFamily: 'var(--font-ui)',
  fontSize: '10px', fontWeight: 500,
  letterSpacing: '0.2em', textTransform: 'uppercase',
  border: '1px solid var(--gold)', cursor: 'pointer',
  transition: 'background 0.3s',
  flexShrink: 0,
};

const successMsg = {
  display: 'flex', alignItems: 'center', gap: '10px',
  fontFamily: 'var(--font-body)', fontSize: '16px', fontStyle: 'italic',
  color: 'rgba(255,255,255,0.7)', padding: '14px 0',
};

const divider = {
  height: '1px', background: 'rgba(255,255,255,0.08)',
};

const linksGrid = {
  display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
  gap: '48px', padding: '64px 0',
};

const brandCol = {};

const logoStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: '22px', fontWeight: 700,
  letterSpacing: '0.18em', textTransform: 'uppercase',
  color: '#fff', display: 'block', marginBottom: '20px',
};

const brandDesc = {
  fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 300,
  color: 'rgba(255,255,255,0.4)', lineHeight: 1.7,
  marginBottom: '28px', maxWidth: '280px',
};

const socialsRow = {
  display: 'flex', gap: '14px',
};

const socialIcon = {
  width: '38px', height: '38px',
  border: '1px solid rgba(255,255,255,0.12)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: 'rgba(255,255,255,0.5)',
  transition: 'all 0.3s',
};

const colHeading = {
  fontFamily: 'var(--font-ui)', fontSize: '10px',
  letterSpacing: '0.25em', textTransform: 'uppercase',
  color: 'var(--gold)', marginBottom: '24px',
};

const footerLink = {
  fontFamily: 'var(--font-body)', fontSize: '16px',
  color: 'rgba(255,255,255,0.45)',
  transition: 'color 0.2s',
};

const bottomBar = {
  display: 'flex', justifyContent: 'space-between',
  alignItems: 'center', padding: '24px 0',
  gap: '24px',
};

const copyright = {
  fontFamily: 'var(--font-ui)', fontSize: '11px',
  letterSpacing: '0.1em', color: 'rgba(255,255,255,0.25)',
};

const bottomLinks = {
  display: 'flex', gap: '28px',
};

const footerLinkSmall = {
  fontFamily: 'var(--font-ui)', fontSize: '11px',
  letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)',
  transition: 'color 0.2s',
};

function InstagramIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>;
}
function PinterestIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83l1.17-4.96s-.3-.6-.3-1.49c0-1.4.81-2.44 1.82-2.44.86 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.35-.24 1 .49 1.81 1.47 1.81 1.76 0 2.93-2.27 2.93-4.97 0-2.05-1.38-3.58-3.88-3.58-2.82 0-4.58 2.11-4.58 4.46 0 .81.24 1.38.61 1.82"/></svg>;
}
function FacebookIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
}
function TikTokIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>;
}