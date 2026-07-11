import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <span className="logo-icon">■</span> Biodata for Marriage
        </Link>

        <nav className="nav-links">
          <a href="/#templates" className="nav-link">Templates</a>
          <a href="/#how-it-works" className="nav-link">How it works</a>
          <a href="/#guide" className="nav-link">Biodata guide</a>
          <a href="/#faq" className="nav-link">FAQ</a>
          <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>Create My Biodata</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
