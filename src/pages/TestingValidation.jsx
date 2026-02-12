import PageHero from '../components/PageHero';
import { images } from '../constants/images';
import './ServicePage.css';

const FUNCTIONAL_TESTING_BULLETS = [
  'Power-up testing and verification of voltage rails',
  'Functional testing of microcontrollers, processors, and embedded systems',
  'Verification of onboard peripherals, sensors, and modules',
  'Communication interface testing including UART, SPI, I2C, CAN, USB, and others',
  'Signal measurement and waveform verification',
  'System-level functionality and operational testing',
];

const ELECTRICAL_TESTING_BULLETS = [
  'Continuity and connectivity testing',
  'Detection of short circuits, open circuits, and assembly faults',
  'Voltage, current, and power verification',
  'Signal integrity and timing verification',
  'Identification and debugging of electrical and hardware issues',
  'Root cause analysis and corrective action support',
];

const VISUAL_INSPECTION_BULLETS = [
  'Component placement and orientation verification',
  'Solder joint inspection and quality validation',
  'Identification of assembly defects or inconsistencies',
  'Inspection using magnification tools for accuracy',
  'Verification against assembly and design documentation',
];

export default function TestingValidation() {
  return (
    <>
      <PageHero
        title="Engineering Services:"
        serviceName="PCB Testing & Validation"
        backgroundImage={images.lab}
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={images.pcbTesting} alt="PCB testing" />
              </div>
              <div className="service-page__content">
                <p className="service-page__lead">
                  THINKERDYNE Technologies provides comprehensive PCB testing and validation services to ensure your electronic boards meet functional, electrical, and performance requirements before deployment or production. Our engineering team performs structured testing and verification to confirm design integrity, identify potential issues, and ensure reliable operation under real-world conditions.
                </p>
                <p className="service-page__lead">
                  We support validation across all stages of development, including prototype evaluation, design verification, and pre-production testing, ensuring every PCB is fully verified and ready for integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={images.lab} alt="Functional testing" />
              </div>
              <div className="service-page__content">
                <h2 className="service-page__h2">Functional and System-Level Testing</h2>
                <p className="service-page__lead">
                  We verify that the PCB operates according to its intended design and functional requirements.
                </p>
                <ul className="service-page__list">
                  {FUNCTIONAL_TESTING_BULLETS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={images.chipCloseup} alt="Electrical testing" />
              </div>
              <div className="service-page__content">
                <h2 className="service-page__h2">Electrical Testing and Debugging</h2>
                <p className="service-page__lead">
                  We perform detailed electrical testing to ensure circuit integrity and stable performance.
                </p>
                <ul className="service-page__list">
                  {ELECTRICAL_TESTING_BULLETS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h2 className="service-page__h2">Visual Inspection and Assembly Validation</h2>
                <p className="service-page__lead">
                  We verify assembly quality to ensure the PCB meets manufacturing and quality standards.
                </p>
                <ul className="service-page__list">
                  {VISUAL_INSPECTION_BULLETS.map((item) => (
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
