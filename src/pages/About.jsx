import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { images, serviceRoutes } from '../constants/images';
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
          <div className="container">
            <h2 className="about-page__h2">OUR STORY</h2>
            <p className="about-page__lead">
              <strong>THINKERDYNE Technologies</strong> has grown into a trusted name in the electronics service industry. Located in <strong>Bengaluru, Karnataka, India</strong>, our company is built on a strong foundation of innovation, quality, and technical excellence.
            </p>
            <p>
              Thinkerdyne was established by a team with a strong professional background in electronics and hands-on experience in the <strong>Design and Manufacturing of Printed Circuit Boards (PCBs)</strong>. With deep-rooted expertise in cutting-edge technology, we deliver custom PCB design and layout for analog, digital, mixed-signal and power supply boards for a wide range of electronic systems and applications.
            </p>
          </div>
        </section>

        <section className="about-page__section section">
          <div className="container">
            <h2 className="about-page__h2">OUR TEAM</h2>
            <p className="about-page__lead">
              Behind every successful project at Thinkerdyne is a team of passionate experts. We are powered by a highly skilled and <strong>multidisciplinary</strong> team of Engineers, Designers, and Industry Leaders, each bringing a wealth of experience and technical expertise in the fields of <strong>Design and Manufacturing</strong>.
            </p>
            <p>
              Every team member plays a vital role in transforming innovative concepts into high-performance solutions, driving our mission forward with <strong>precision</strong>, <strong>reliability</strong>, and <strong>innovation</strong>. Together, we are committed to <strong>Excellence</strong>, <strong>Collaboration</strong>, and delivering <strong>Measurable Impact</strong> across every project we undertake.
            </p>
            <ul className="about-page__highlights">
              <li>Successfully completed 1,000+ Designing (Hardware Design & PCB Design) and Manufacturing (PCB Fabrication, Components Sourcing and Assembly) projects with 99% on-time delivery.</li>
              <li>Recognized in the industry for excellence in PCB Design. Our team has a proven track record of successfully achieving challenging PCB design targets, including high-density multi-layer boards, RF-integrated boards, power boards, and complex analog and digital boards.</li>
              <li>We consistently deliver solutions that meet stringent client requirements. By overcoming complex constraints in signal integrity, thermal management, and compliance, we reinforce our reputation as a trusted partner in electronics design services.</li>
              <li>We have successfully established hardware design projects centered on microcontroller technologies, enabling innovative solutions across embedded systems, IoT, and automation.</li>
            </ul>
          </div>
        </section>

        <section className="about-page__section section section--alt">
          <div className="container">
            <h2 className="about-page__h2">VISION</h2>
            <p className="about-page__lead">
              To be a trusted and forward-thinking <strong>Design & Manufacturing</strong> partner, delivering innovative and future-ready solutions that drive sustainable progress and create meaningful impact. We aspire to set new benchmarks in excellence through <strong>innovation, adaptability, and visionary thinking</strong>, ensuring every solution reflects quality, relevance, and long-term value.
            </p>
          </div>
        </section>

        <section className="about-page__section section">
          <div className="container">
            <h2 className="about-page__h2">MISSION</h2>
            <p className="about-page__lead">
              At Thinkerdyne, we deliver <strong>technology-driven solutions</strong> built on expertise, reliability, and <strong>client-focused innovation</strong>. Our goal is to form lasting partnerships by understanding unique challenges and aligning advanced capabilities to create meaningful results. Through <strong>excellence and adaptability</strong>, we ensure every engagement reflects quality and long-term value.
            </p>
          </div>
        </section>

        <section className="about-page__section section section--alt">
          <div className="container">
            <h2 className="about-page__h2">VALUES</h2>
            <p className="about-page__lead">
              We prioritize <strong>clients</strong> by understanding their goals and building trust through responsiveness and reliability. <strong>Integrity</strong> drives every decision, reflecting <strong>transparency</strong> and <strong>strong ethics</strong>. We pursue excellence in every task, foster collaboration through open communication, and embrace innovation to adapt and improve. With accountability and adaptability, we ensure tailored solutions that deliver lasting value.
            </p>
          </div>
        </section>

        <section className="about-page__section section section--dark about-page__find">
          <div className="container">
            <h2 className="about-page__h2 about-page__h2--light">Your vision, our engineering — let's make it happen</h2>
            <Link to="/contact" className="btn btn--light">Contact Us</Link>
            <div className="about-page__find-grid">
              <div className="about-page__find-content">
                <h3 className="about-page__find-heading">Find Us</h3>
                <address className="about-page__address">
                  <strong>THINKERDYNE Technologies</strong><br />
                  NO: 59, 60, NL Arcade, Second Main, Vinayaka Layout, Shanthipura, Electronic City, Phase II, Bangalore, Karnataka. 560100
                </address>
                <p className="about-page__contact">
                  <a href="tel:+919677510113">+91 9677510113</a><br />
                  <a href="mailto:info@thinkerdyne.com">info@thinkerdyne.com</a>
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
