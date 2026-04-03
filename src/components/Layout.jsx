import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronRight, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import Watermark from './Watermark';
import './Layout.css';

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0); // scroll to top on nav
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="layout-wrapper">
      {/* Top Bar for Desktop */}
      <div className="top-bar hidden-mobile">
        <div className="container top-bar-content">
          <div className="top-bar-item">
            <MapPin size={16} /> Serving Downingtown, West Chester & Chester County
          </div>
          <div className="top-bar-item">
            <Clock size={16} /> Mon-Sat: 8am - 6pm
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">S&S</span>
            <div className="logo-text">
              <span className="brand-name">Shine & Shield</span>
              <span className="brand-tag">Mobile Detailing</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav hidden-mobile">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header CTA */}
          <div className="header-cta hidden-mobile">
            <a href="tel:5550198" className="btn btn-outline">
              <Phone size={18} /> (555) 019-8822
            </a>
            <Link to="/contact" className="btn btn-primary">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn hidden-desktop"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name} <ChevronRight size={20} />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-footer">
            <div className="contact-info-block">
              <MapPin size={24} className="text-accent" />
              <p>Mobile Service to Your Driveway in Chester County, PA</p>
            </div>
            <Link to="/contact" className="btn btn-primary w-full">
              Get Your Free Quote
            </Link>
            <a href="tel:5550198" className="btn btn-outline w-full" style={{ marginTop: '1rem' }}>
              <Phone size={20} /> Call (555) 019-8822
            </a>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col brand-col">
              <div className="logo footer-logo">
                <span className="logo-icon white">S&S</span>
                <div className="logo-text">
                  <span className="brand-name white">Shine & Shield</span>
                  <span className="brand-tag light">Mobile Detailing</span>
                </div>
              </div>
              <p className="footer-desc">
                Premium mobile auto detailing delivered directly to your driveway or workplace in Chester County, Pennsylvania.
              </p>
            </div>

            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Services</h3>
              <ul className="footer-links">
                <li><Link to="/services">Exterior Detail</Link></li>
                <li><Link to="/services">Interior Detail</Link></li>
                <li><Link to="/services">Full Showroom Detail</Link></li>
                <li><Link to="/services">Ceramic Coating</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Contact Us</h3>
              <ul className="footer-contact">
                <li><Phone size={18} /> (555) 019-8822</li>
                <li><MapPin size={18} /> Downingtown, PA & Surrounding Areas</li>
                <li><Clock size={18} /> Mon - Sat: 8:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Shine & Shield Mobile Detailing. All rights reserved.</p>
            <p className="concept-note">This is a concept demonstration website.</p>
          </div>
        </div>
      </footer>

      {/* Watermark */}
      <Watermark />
    </div>
  );
};

export default Layout;
