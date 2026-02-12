import PageHero from '../components/PageHero';
import { images } from '../constants/images';
import imgWiringHarness from '../assets/wiringharness.jpg';
import './ServicePage.css';

const WIRING_SERVICES = [
  'Custom wiring harness design tailored to your system and application requirements',
  'Selection of appropriate wires, cables, and connectors for reliable performance',
  'Connector interface definition, pinout creation, and interconnection planning',
  'Detailed wiring diagrams and complete assembly documentation',
  'Harness layout and routing optimization for efficient and organized integration',
  'Cable bundling, labeling, and structured harness organization',
  'Support for prototype development and production-ready harness solutions',
  'Coordination with trusted vendors for quality fabrication and assembly',
  'Integration support for embedded hardware and electronic systems',
  'Modification, rework, and optimization of existing wiring harnesses',
];

export default function WiringHarness() {
  return (
    <>
      <PageHero
        title="Engineering Services:"
        serviceName="Wiring Harness"
        backgroundImage={images.electronics}
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={imgWiringHarness} alt="Wiring harness solutions" />
              </div>
              <div className="service-page__content">
                <p className="service-page__lead">
                  At Thinkerdyne Technologies, we design reliable and efficient wiring harness solutions that ensure secure electrical connectivity for electronic and embedded systems. Our harness designs are developed with careful selection of wires, connectors, and routing to support stable power distribution, signal integrity, and long-term durability.
                </p>
                <p className="service-page__lead">
                  Our engineering team creates well-structured harness layouts that simplify installation, improve system reliability, and support easy integration. We also prepare detailed wiring diagrams, connector pinouts, and documentation to ensure accuracy during assembly and implementation.
                </p>
                <p className="service-page__lead">
                  We work with trusted vendors and manufacturing partners to ensure quality materials and proper fabrication, supporting both prototype and production requirements. Our wiring harness solutions are suitable for embedded hardware, control systems, and custom electronic products, ensuring dependable and production-ready interconnection solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={imgWiringHarness} alt="Wiring harness services" />
              </div>
              <div className="service-page__content">
                <h2 className="service-page__h2">Our Wiring Harness Services Include:</h2>
                <ul className="service-page__list">
                  {WIRING_SERVICES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
