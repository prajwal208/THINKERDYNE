import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { images } from "../constants/images";
import "./AboutPage.css";

const MISSION_TEXT =
  "To deliver innovative, production-ready electronics product development that help our customers transform ideas into successful products";
const VISION_TEXT =
  "To drive global innovation by delivering cutting-edge electronics development solutions with uncompromising quality and engineering excellence";

const MissionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const VisionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

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
              <img src={images.aboutEvolution} alt="" />
            </div>
            <div className="about-page__text">
              <h2 className="about-page__h2">Thinkerdyne - Engineering Beyond Expectations</h2>
              <p className="about-page__lead">
                Content to be provided. Replace this block with the final copy for this section.
              </p>
            </div>
          </div>
        </section>
        <section className="about-page__section section about-page__pillars" aria-labelledby="mission-vision-heading">
          <div className="container">
            <h2 id="mission-vision-heading" className="about-page__pillars-heading">Mission & Vision</h2>
            <div className="about-page__pillars-grid about-page__pillars-grid--two">
              <article className="about-page__pillar about-page__pillar--mission">
                <div className="about-page__pillar-icon-wrap">
                  <MissionIcon />
                </div>
                <h3 className="about-page__pillar-title">Mission</h3>
                <p className="about-page__pillar-text">{MISSION_TEXT}</p>
              </article>
              <article className="about-page__pillar about-page__pillar--vision">
                <div className="about-page__pillar-icon-wrap">
                  <VisionIcon />
                </div>
                <h3 className="about-page__pillar-title">Vision</h3>
                <p className="about-page__pillar-text">{VISION_TEXT}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="about-page__section section section--alt about-page__why-work">
          <div className="container">
            <h2 className="about-page__h2 about-page__why-work-title">Why Work With Thinkerdyne</h2>
            <p className="about-page__lead about-page__why-work-intro">
              At Thinkerdyne, we combine strong technical expertise with a manufacturing-focused approach to deliver reliable, production-ready electronics designs. We support the complete product development lifecycle, ensuring every design meets performance, quality, and manufacturability standards.
            </p>
            <h3 className="about-page__strengths-heading">Our key strengths include:</h3>
            <ul className="about-page__strengths-list">
              <li>
                <strong>Proven PCB and Hardware Design Expertise</strong> — Extensive experience in schematic design, multi-layer PCB layout, and embedded hardware development.
              </li>
              <li>
                <strong>Manufacturing-Optimized and Reliable Designs</strong> — Focused on robust, manufacturable solutions that improve reliability and reduce production risks.
              </li>
              <li>
                <strong>End-to-End Engineering Support</strong> — Complete support from concept and design to documentation and production readiness.
              </li>
              <li>
                <strong>Efficient Execution and Clear Communication</strong> — Structured workflows, fast response, and professional coordination throughout the project.
              </li>
              <li>
                <strong>Commitment to Quality and Engineering Excellence</strong> — Use of industry-standard tools and best practices to ensure high-performance, dependable designs.
              </li>
            </ul>
          </div>
        </section>

        <section className="about-page__section section about-page__infra" aria-labelledby="our-infrastructure-heading">
          <div className="container">
            <h2 id="our-infrastructure-heading" className="about-page__h2 about-page__infra-title">Our Infrastructure</h2>
            <div className="about-page__infra-grid">
              <div className="about-page__infra-col">
                <h3 className="about-page__infra-col-title">Engineering Team</h3>
                <div className="about-page__infra-frame">
                  <span className="about-page__infra-placeholder-text">Keep the photo frame – Will provide the image later</span>
                </div>
              </div>
              <div className="about-page__infra-col">
                <h3 className="about-page__infra-col-title">Electronics LAB</h3>
                <div className="about-page__infra-frame">
                  <span className="about-page__infra-placeholder-text">Keep the photo frame – Will provide the image later</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page__section section section--alt about-page__mission-full">
          <div className="container about-page__narrow">
            {/* <p className="about-page__lead">
              At THINKERDYNE Technologies, our mission is to be a trusted
              engineering partner for global electronics innovators by
              delivering high-quality, cost-effective, and technically superior
              electronics product development solutions. We are driven by a
              passion for engineering excellence and a commitment to helping our
              clients accelerate product development and achieve technological
              success.
            </p> */}
          </div>
        </section>

        {/* <section className="about-page__section section section--dark about-page__cta">
          <div className="container about-page__cta-inner">
            <h2 className="about-page__h2 about-page__h2--light">Your vision, our engineering,<br />let's make it happen...</h2>
            <Link to="/contact" className="btn btn--light">Contact Us</Link>
          </div>
        </section> */}

        {/* <section className="about-page__section section section--dark about-page__find">
          <div className="container">
            <div className="about-page__find-grid">
              <div className="about-page__find-content">
                <h3 className="about-page__find-heading">Find Us</h3>
                <p className="about-page__find-company">THINKERDYNE Technologies</p>
                <address className="about-page__address">
                  No 59, 60, NL Arcade, Second Main, Vinayaka Layout, Shanthipura, Electronic City, Phase II, Bengaluru, Karnataka, India – 560100
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
        </section> */}
      </div>
    </>
  );
}
