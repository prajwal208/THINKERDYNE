import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { images } from "../constants/images";
import "./AboutPage.css";

const MISSION_TEXT =
  "To deliver innovative, reliable, and production-ready electronics product development solutions that help our customers transform ideas into successful products";
const VISION_TEXT =
  "To empower global innovation by delivering cutting-edge electronics product development solutions with uncompromising quality and engineering excellence";
const VALUES_TEXT =
  "Our values are built on trust, technical excellence, innovation, and a client-first approach, ensuring quality and reliability in every engagement";

const MissionIcon = () => (
  <span className="about-page__pillar-icon-svg" aria-hidden="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0d47a1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  </span>
);

const VisionIcon = () => (
  <span className="about-page__pillar-icon-svg" aria-hidden="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0d47a1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  </span>
);

const ValuesIcon = () => (
  <span className="about-page__pillar-icon-svg" aria-hidden="true">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0d47a1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  </span>
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
              <h2 className="about-page__h2">Our Evolution</h2>
              <p className="about-page__lead">
                Established in 2024, <strong>THINKERDYNE Technologies</strong>{" "}
                is a Bengaluru-based electronics engineering services company
                specializing in electronics product development. We are driven
                by a commitment to innovation, precision, and engineering
                excellence, delivering reliable and production-ready solutions
                for modern electronic systems across industries including
                industrial automation, embedded systems, power electronics, IoT,
                and advanced electronic products.
              </p>
              <p className="about-page__lead">
                Founded by engineers with over two decades of combined industry
                experience, THINKERDYNE brings deep technical expertise and
                practical insight into every project. Our team is experienced in
                developing complex and high-performance electronic products,
                covering hardware design, PCB development, system integration,
                and manufacturing support. We focus on delivering efficient,
                scalable, and cost-effective solutions that meet global quality
                standards and support our customers from concept through
                production.
              </p>
            </div>
          </div>
        </section>
        <section className="about-page__section section about-page__pillars">
          <div className="container">
            <div className="about-page__pillars-grid">
              <div className="about-page__pillar">
                <MissionIcon />
                <h3 className="about-page__pillar-title">Mission</h3>
                <p className="about-page__pillar-text">{MISSION_TEXT}</p>
              </div>
              <div className="about-page__pillar">
                <VisionIcon />
                <h3 className="about-page__pillar-title">Vision</h3>
                <p className="about-page__pillar-text">{VISION_TEXT}</p>
              </div>
              <div className="about-page__pillar">
                <ValuesIcon />
                <h3 className="about-page__pillar-title">Values</h3>
                <p className="about-page__pillar-text">{VALUES_TEXT}</p>
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
