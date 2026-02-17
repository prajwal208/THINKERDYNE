import PageHero from '../components/PageHero';
import { images } from '../constants/images';
import imgEmbeddedFirmware from '../assets/embedded_firmware.jpg';
import './ServicePage.css';

const EXPERTISE_ITEMS = [
  'Microcontroller and microprocessor firmware development (ARM Cortex-M, ESP32, PIC, AVR, STM32, and more)',
  'Hardware bring-up, board initialization, and low-level firmware development',
  'Device driver development for sensors, displays, memory, and peripheral devices',
  'Communication protocol implementation including UART, SPI, I2C, CAN, USB, Ethernet, BLE, and Wi-Fi',
  'Real-time firmware using RTOS and bare-metal architectures for time-critical applications',
  'Bootloader development and secure firmware update mechanisms, including OTA updates',
  'Firmware debugging, validation, and performance optimization',
  'Power management and low-power firmware design for energy-efficient systems',
  'Integration with IoT platforms, wireless modules, and cloud connectivity',
];

const APPLICATIONS = [
  'Industrial automation and control systems',
  'IoT and connected devices',
  'Consumer electronics',
  'Medical and healthcare devices',
  'Automotive and mobility electronics',
  'Smart devices and embedded control systems',
];

export default function EmbeddedFirmware() {
  return (
    <>
      <PageHero
        title="Engineering Services:"
        serviceName="Firmware Development"
        backgroundImage={images.pcbAnalysis}
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={imgEmbeddedFirmware} alt="Embedded firmware development" />
              </div>
              <div className="service-page__content">
                <p className="service-page__lead">
                  At THINKERDYNE Technologies, we develop high-performance embedded firmware that serves as the intelligence behind modern electronic products. Our firmware solutions are designed to ensure precise control, reliable operation, and seamless interaction between hardware components, sensors, and communication interfaces. We focus on building stable, efficient, and scalable firmware that supports both prototype validation and high-volume production.
                </p>
                <p className="service-page__lead">
                  Our engineering team works closely with hardware designers from the early stages of development to ensure smooth hardware bring-up, faster debugging, and optimized system performance. We follow structured development practices, thorough testing, and proven design methodologies to deliver firmware that performs reliably in real-world operating environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="service-page__h2">Our Expertise Includes:</h2>
            <ul className="service-page__list">
              {EXPERTISE_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <h2 className="service-page__h2">Our Development Approach:</h2>
            <p className="service-page__lead">
              We emphasize clean architecture, modular design, and maintainable code to ensure long-term reliability and scalability. Our team conducts comprehensive testing, validation, and optimization to ensure firmware stability across various operating conditions. From prototype to production, we deliver firmware that is robust, efficient, and ready for deployment.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="service-page__h2">Applications We Support:</h2>
            <ul className="service-page__list">
              {APPLICATIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
