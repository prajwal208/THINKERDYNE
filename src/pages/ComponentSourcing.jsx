import PageHero from '../components/PageHero';
import { images } from '../constants/images';
import './ServicePage.css';

const SUPPLIER_BULLETS = [
  'Sourcing from authorized and trusted global suppliers',
  'Ensuring genuine and original components',
  'Supplier verification and quality assurance',
  'Component traceability and documentation support',
  'Proper handling and storage to maintain component integrity',
];

const BOM_BULLETS = [
  'Bill of Materials (BOM) review and validation',
  'Complete component procurement for prototype and production builds',
  'Lead time analysis and availability planning',
  'Cost optimization and sourcing recommendations',
  'Consolidated sourcing to simplify supply chain management',
];

export default function ComponentSourcing() {
  return (
    <>
      <PageHero
        title="Engineering Services:"
        serviceName="Component Sourcing"
        backgroundImage={images.aboutSection}
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={images.componentSourcing} alt="Component sourcing" />
              </div>
              <div className="service-page__content">
                <p className="service-page__lead">
                  THINKERDYNE Technologies provides professional component sourcing and procurement services to ensure reliable, efficient, and uninterrupted electronics product development and manufacturing. With over two decades of combined engineering experience, we understand the importance of selecting the right components for performance, reliability, and long-term product support.
                </p>
                <p className="service-page__lead">
                  We work with trusted suppliers and authorized distributors to source genuine, high-quality electronic components that meet design specifications and production requirements. Our structured sourcing process helps reduce lead times, prevent counterfeit risks, and ensure consistent component availability for both prototype and production stages.
                </p>
                <h2 className="service-page__h2">Supplier Network and Quality Assurance</h2>
                <ul className="service-page__list">
                  {SUPPLIER_BULLETS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={images.bomManagement} alt="BOM management and procurement" />
              </div>
              <div className="service-page__content">
                <h2 className="service-page__h2">BOM Management and Procurement Support</h2>
                <p className="service-page__lead">
                  We provide complete BOM-based sourcing support to streamline production and reduce procurement complexity.
                </p>
                <ul className="service-page__list">
                  {BOM_BULLETS.map((item) => (
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
