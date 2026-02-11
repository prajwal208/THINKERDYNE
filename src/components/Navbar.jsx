import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { routes, serviceRoutes } from '../constants/images';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to={routes.home} className="navbar__brand" onClick={closeMenu}>
          {/* <span className="navbar__logo-placeholder" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="14" cy="14" r="3" fill="currentColor" />
              <circle cx="7" cy="7" r="1.5" fill="currentColor" />
              <circle cx="21" cy="7" r="1.5" fill="currentColor" />
              <circle cx="7" cy="21" r="1.5" fill="currentColor" />
              <circle cx="21" cy="21" r="1.5" fill="currentColor" />
              <line x1="14" y1="11" x2="14" y2="4" stroke="currentColor" strokeWidth="1.2" />
              <line x1="14" y1="17" x2="14" y2="24" stroke="currentColor" strokeWidth="1.2" />
              <line x1="11" y1="14" x2="4" y2="14" stroke="currentColor" strokeWidth="1.2" />
              <line x1="17" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" />
              <line x1="12" y1="12" x2="8.5" y2="8.5" stroke="currentColor" strokeWidth="1" />
              <line x1="16" y1="12" x2="19.5" y2="8.5" stroke="currentColor" strokeWidth="1" />
              <line x1="12" y1="16" x2="8.5" y2="19.5" stroke="currentColor" strokeWidth="1" />
              <line x1="16" y1="16" x2="19.5" y2="19.5" stroke="currentColor" strokeWidth="1" />
            </svg>
          </span> */}
          <span className="navbar__logo">THINKERDYNE</span>
        </Link>

        <button
          type="button"
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <nav className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`}>
          <ul className="navbar__list">
            <li>
              <Link to={routes.home} className="navbar__link" onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="navbar__link" onClick={closeMenu}>
                ABOUT US
              </Link>
            </li>
            <li className="navbar__dropdown" ref={dropdownRef}>
              <button
                type="button"
                className={`navbar__link navbar__link--trigger ${dropdownOpen ? 'navbar__link--open' : ''}`}
                onClick={() => setDropdownOpen((prev) => !prev)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                ENGINEERING SERVICES
                <span className="navbar__dropdown-chevron" aria-hidden="true" />
              </button>
              <ul className={`navbar__dropdown-menu ${dropdownOpen ? 'navbar__dropdown-menu--open' : ''}`}>
                {serviceRoutes.map((service) => (
                  <li key={service.title}>
                    <Link to={service.path} className="navbar__dropdown-link" onClick={closeMenu}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <Link to="/contact" className="navbar__link navbar__contact" onClick={closeMenu}>
            CONTACT US
          </Link>
        </nav>
      </div>
    </header>
  );
}
