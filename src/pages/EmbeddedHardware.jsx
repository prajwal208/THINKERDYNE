import PageHero from '../components/PageHero';
import { images } from '../constants/images';
import imgEmbeddedHardware from '../assets/embedd_ hardware.jpg';
import './ServicePage.css';

const CAPABILITIES = [
  'Processor, MCU, SoC, and FPGA-based Hardware Design',
  'System Architecture and Circuit Development',
  'High-Speed Interface Design (DDR, PCIe, USB, Ethernet, CAN, SPI, I2C, UART)',
  'Power Management and Mixed-Signal Hardware Design',
  'Multilayer, High-Density PCB Implementation',
  'Design Optimization for Signal Integrity and Power Integrity',
  'Manufacturing Documentation and Production Support',
];

const PLATFORM_EXPERTISE = [
  'Texas Instruments (TI) Processors and Controllers',
  'ARM Cortex-based Embedded Systems',
  'STM32, NXP, and Microchip Platforms',
  'FPGA and High-Performance Embedded Systems',
];

const ENGINEERING_APPROACH = [
  'System Architecture and Component Selection',
  'Schematic Design and Hardware Engineering',
  'PCB Implementation and Design Optimization',
  'Manufacturing Support and Production Enablement',
];

export default function EmbeddedHardware() {
  return (
    <>
      <PageHero
        title="Engineering Services:"
        serviceName="Hardware Design"
        backgroundImage={images.pcbDesign}
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={imgEmbeddedHardware} alt="Embedded hardware design" />
              </div>
              <div className="service-page__content">
                <p className="service-page__lead">
                  Thinkerdyne Technologies delivers advanced embedded hardware design solutions for high-performance electronic systems. We specialize in developing processor-based hardware platforms that meet demanding requirements for performance, reliability, and manufacturability.
                </p>
                <p className="service-page__lead">
                  From system architecture to production support, we design robust and scalable hardware tailored for industrial, IoT, automotive, and communication applications. Our engineering approach ensures optimized performance, stable operation, and seamless integration into production environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="service-page__two-cols">
              <div className="service-page__col">
                <h2 className="service-page__h2">Our Capabilities:</h2>
                <ul className="service-page__list">
                  {CAPABILITIES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="service-page__col service-page__col--border">
                <h2 className="service-page__h2">Platform and Technology Expertise:</h2>
                <p className="service-page__lead">
                  We work with industry-leading embedded technologies, including:
                </p>
                <ul className="service-page__list">
                  {PLATFORM_EXPERTISE.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>Our designs support complex, high-speed, and mission-critical applications.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <h2 className="service-page__h2">Engineering Approach</h2>
            <p className="service-page__lead">
              We follow a structured, engineering-driven process to ensure reliable and production-ready hardware:
            </p>
            <ul className="service-page__list">
              {ENGINEERING_APPROACH.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="service-page__h2">Delivering Reliable Hardware Solutions</h2>
            <p className="service-page__lead" style={{ maxWidth: '100%' }}>
              We focus on developing hardware that meets performance targets, reduces development risk, and ensures successful manufacturing. Our commitment to engineering excellence enables customers to accelerate product development and deliver reliable electronic systems to market.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
