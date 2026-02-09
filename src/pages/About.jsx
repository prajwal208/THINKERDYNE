import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { images, serviceRoutes } from '../constants/images';
import './AboutPage.css';

const SERVICE_DESCRIPTIONS = {
  'PCB Design': '"Thinkerdyne" is a premier provider of PCB design services.',
  'PCB Analysis': '"Thinkerdyne" will take your PCB through a set of comprehensive tests.',
  'Manufacturing Service': '"Thinkerdyne" offer complete electronics manufacturing services.',
  'Reverse Engineering': '"Thinkerdyne" is equipped to provide world class PCB reverse engineering.',
};

export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Welcome to THINKERDYNE – PCB Design Service and Manufacturing company in Bangalore, India."
        backgroundImage={images.about}
      />
      <div className="about-page">
        <section className="section section--alt">
          <div className="container">
            <h2 className="about-page__h2">Welcome to THINKERDYNE</h2>
            <p className="about-page__lead">
              Thinkerdyne is a rapidly growing, PCB Design Service and Manufacturing company located in Bangalore, India. We provide custom printed circuit board design and layout for analog, digital, mixed signal and Power Supply boards for a variety of electronic systems and applications.
            </p>
            <p>
              With highly-skilled and experienced staff, we are well positioned to provide quality PCB design services.
            </p>
            <p>
              Our experienced team of engineers and designers can help you create products that are optimized for performance, reliability, and scalability.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="about-page__h2">Core Services</h2>
            <p className="about-page__subtitle">We have the best value for you</p>
            <div className="about-page__services">
              {serviceRoutes.map((service) => (
                <Link key={service.title} to={service.path} className="about-page__card">
                  <h3 className="about-page__card-title">{service.title}</h3>
                  <p className="about-page__card-desc">{SERVICE_DESCRIPTIONS[service.title]}</p>
                  <span className="about-page__card-link">Know more</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt section--dark about-page__find">
          <div className="container">
            <div className="about-page__find-grid">
              <div className="about-page__find-content">
                <h2 className="about-page__h2 about-page__h2--light">Find Us</h2>
                <address className="about-page__address">
                  <strong>THINKERDYNE Technologies</strong><br />
                  NO: 59, 60, NL Arcade, First floor,<br />
                  Door No. 7, Second Main,<br />
                  Vinayaka Layout, Shanthipura,<br />
                  Electronic City, Phase II,<br />
                  Bangalore, Karnataka. 560100
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
