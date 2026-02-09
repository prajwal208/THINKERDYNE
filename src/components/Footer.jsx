import { Link } from 'react-router-dom';
import { routes, serviceRoutes } from '../constants/images';
import './sections/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to={routes.home} className="footer__logo">
            THINKERDYNE
          </Link>
          <p className="footer__tagline">
            PCB Design | Electronics Prototyping | Electronics Manufacturing | Reverse Engineering
          </p>
        </div>
        <nav className="footer__nav" aria-label="Footer navigation">
          <p className="footer__nav-title">Our Services</p>
          <ul className="footer__list">
            {serviceRoutes.map((service) => (
              <li key={service.title}>
                <Link to={service.path}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__contact">
          <a href={`${routes.home}#contact`} className="btn btn--primary btn--sm">
            Contact Us
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} THINKERDYNE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
