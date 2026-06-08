import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const styles = {
  nav: (scrolled) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: scrolled ? '14px 48px' : '22px 48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: scrolled ? 'rgba(250,247,242,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    transition: 'all 0.4s ease',
  }),
  logo: {
    fontFamily: 'var(--font-display)',
    fontSize: '22px',
    fontWeight: 700,
    letterSpacing: '0.18em',
    color: 'var(--charcoal)',
    textTransform: 'uppercase',
  },
  logoAccent: {
    color: 'var(--gold)',
  },
  links: {
    display: 'flex',
    gap: '38px',
    alignItems: 'center',
  },
  link: (active) => ({
    fontFamily: 'var(--font-ui)',
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: active ? 'var(--gold)' : 'var(--charcoal)',
    position: 'relative',
    padding: '4px 0',
    transition: 'color 0.3s',
  }),
  actions: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  iconBtn: {
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--charcoal)',
    transition: 'color 0.3s',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'var(--gold)',
    border: '1.5px solid var(--ivory)',
  },
  mobileMenu: {
    display: 'none',
  },
};

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);
const BagIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);
const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'New In', path: '/' },
    { label: 'Collections', path: '/collections' },
    { label: 'Shop', path: '/shop' },
    { label: 'About', path: '/about' },
  ];

  return (
    <nav style={styles.nav(scrolled)}>
      <Link to="/" style={styles.logo}>
        M<span style={styles.logoAccent}>A</span>ISON
      </Link>

      <div style={styles.links}>
        {navLinks.map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            style={styles.link(location.pathname === path)}
          >
            {label}
          </Link>
        ))}
      </div>

      <div style={styles.actions}>
        <button style={styles.iconBtn}><SearchIcon /></button>
        <button style={styles.iconBtn}><UserIcon /></button>
        <button style={{ ...styles.iconBtn, position: 'relative' }}>
          <BagIcon />
          <span style={styles.badge} />
        </button>
      </div>
    </nav>
  );
}