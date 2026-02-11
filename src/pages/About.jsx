import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { images } from '../constants/images';
import './AboutPage.css';

export default function About() {
  return (
    <>
      <PageHero
        title="ABOUT US"
        subtitle="We are passionate about electronic circuit design and manufacturing"
        backgroundImage={images.about}
      />
      <div className="about-page">
        <section className="about-page__section section section--alt">
          <div className="container about-page__section-inner about-page__section-inner--expertise">
            <div className="about-page__img-wrap" aria-hidden="true">
              <img src={images.aboutStory} alt="" />
            </div>
            <div className="about-page__text">
              <h2 className="about-page__h2">Our Evolution</h2>
              <p className="about-page__lead">
                Founded in 2017, <strong>THINKERDYNE Technologies</strong> has grown into a trusted name in the electronics service industry. Located in <strong>Bengaluru, Karnataka, India</strong>, our company is built on a strong foundation of innovation, quality, and technical excellence.
              </p>
              <p>
                <strong>THINKERDYNE</strong> was established by a team of visionary leaders with over 14 years of hands-on experience in the <strong>Design and Manufacturing of Printed Circuit Boards (PCBs)</strong>. With deep-rooted expertise in cutting-edge technology, we deliver custom PCB design and layout for analog, digital, mixed-signal and power supply boards for a wide range of electronic systems and applications.
              </p>
            </div>
          </div>
        </section>

        <section className="about-page__section section about-page__pillars">
          <div className="container">
            <div className="about-page__pillars-grid">
              <div className="about-page__pillar">
                <h3 className="about-page__pillar-title">Vision</h3>
                <p className="about-page__pillar-text">To be a trusted Design & Manufacturing partner, delivering innovative and future-ready solutions that drive sustainable progress.</p>
              </div>
              <div className="about-page__pillar">
                <h3 className="about-page__pillar-title">Mission</h3>
                <p className="about-page__pillar-text">We deliver technology-driven solutions built on expertise, reliability, and client-focused innovation for lasting partnerships.</p>
              </div>
              <div className="about-page__pillar">
                <h3 className="about-page__pillar-title">Values</h3>
                <p className="about-page__pillar-text">We prioritize clients, integrity, transparency, excellence, collaboration, and innovation in every engagement.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page__section section about-page__infra-placeholder">
          <div className="container">
            <h3 className="about-page__h2">Our Infrastructure</h3>
            <div className="about-page__infra-img-placeholder" aria-hidden="true">
              <span>Add image placeholder (below Vision / Mission / Values)</span>
            </div>
          </div>
        </section>

        <section className="about-page__section section section--dark about-page__cta">
          <div className="container about-page__cta-inner">
            <h2 className="about-page__h2 about-page__h2--light">Your vision, our engineering,<br />let's make it happen...</h2>
            <Link to="/contact" className="btn btn--light">Contact Us</Link>
          </div>
        </section>

        <section className="about-page__section section section--dark about-page__find">
          <div className="container">
            <div className="about-page__find-grid">
              <div className="about-page__find-content">
                <h3 className="about-page__find-heading">Find Us</h3>
                <p className="about-page__find-company">THINKERDYNE Technologies</p>
                <address className="about-page__address">
                  NO: 59, 60, NL Arcade, Second Main, Vinayaka Layout, Shanthipura, Electronic City, Phase II, Bangalore, Karnataka. 560100
                </address>
                <p className="about-page__contact">
                  <strong>Phone:</strong> <a href="tel:+919677510113">+91 9677510113</a><br />
                  <strong>Mail:</strong> <a href="mailto:info@thinkerdyne.com">info@thinkerdyne.com</a>
                </p>
              </div>
              <div className="about-page__find-visual" aria-hidden="true">
                <img src={images.circuitBoard} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
