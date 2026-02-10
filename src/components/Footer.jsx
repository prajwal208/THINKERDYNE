import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes, serviceRoutes } from '../constants/images';
import './sections/Footer.css';

const CORE_SERVICES = [
  'PCB DESIGN',
  'PCB ANALYSIS',
  'MANUFACTURING SERVICES',
  'REVERSE ENGINEERING',
];

const QUICK_LINKS = [
  { label: 'HOME', to: routes.home },
  { label: 'ABOUT US', to: '/about' },
  { label: 'ENGINEERING SERVICES', to: routes.home },
  { label: 'CONTACT US', to: `${routes.home}#contact` },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="contact" className="footer">
      <div className="footer__bg" aria-hidden="true" />
      <div className="container footer__inner">
        <div className="footer__col footer__find">
          <h3 className="footer__heading">Find Us</h3>
          <address className="footer__address">
            <p className="footer__line">
              <span className="footer__icon" aria-hidden="true">📍</span>
              THINKERDYNE TECHNOLOGIES NO: 59,60, NL ARCADE, SECOND MAIN, VINAYAKA LAYOUT, SHANTHIPURA ELECTRONIC CITY, PHASE II, BANGALORE, KARNATAKA. 560100
            </p>
            <p className="footer__line">
              <span className="footer__icon" aria-hidden="true">📞</span>
              <a href="tel:+919677510113">+91 9677510113</a>
            </p>
            <p className="footer__line">
              <span className="footer__icon" aria-hidden="true">✉</span>
              <a href="mailto:info@thinkerdyne.com">info@thinkerdyne.com</a>
            </p>
          </address>
        </div>
        <div className="footer__col">
          <h3 className="footer__heading">Core Services</h3>
          <ul className="footer__list">
            {CORE_SERVICES.map((item) => (
              <li key={item}>
                <Link to={routes.home}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__list">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                {link.label === 'CONTACT US' ? (
                  <a href={`${routes.home}#contact`}>{link.label}</a>
                ) : link.to.startsWith('http') ? (
                  <a href={link.to} target="_blank" rel="noopener noreferrer">{link.label}</a>
                ) : (
                  <Link to={link.to}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col footer__follow">
          <h3 className="footer__heading">Follow Us</h3>
          <p className="footer__line">
            <a
              href="https://www.linkedin.com/company/thinkerdyne"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
            >
              LINKEDIN
            </a>
          </p>
          <p className="footer__copy">
            © THINKERDYNE, All Right Reserved.
          </p>
        </div>
      </div>
      {showScrollTop && (
        <button
          type="button"
          className="footer__scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
}
