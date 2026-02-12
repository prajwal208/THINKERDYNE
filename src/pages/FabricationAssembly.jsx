import PageHero from '../components/PageHero';
import { images } from '../constants/images';
import './ServicePage.css';

const FABRICATION_BULLETS = [
  'Fabrication of single-layer, double-layer, and multilayer PCBs',
  'Support for standard, complex, and high-density PCB designs',
  'Selection of appropriate PCB materials based on application requirements',
  'Stack-up definition, board thickness control, and layer configuration',
  'Surface finish options including HASL, ENIG, and lead-free finishes',
  'Solder mask, silkscreen, and board marking support',
  'Fabrication file verification before manufacturing release',
  'Prototype, low-volume, and production fabrication support',
];

const ASSEMBLY_BULLETS = [
  'Surface Mount Technology (SMT) assembly support',
  'Through-Hole assembly support',
  'Mixed-technology PCB assembly',
  'Assembly of fine-pitch and high-density components',
  'Prototype assembly and batch production support',
  'Accurate component placement and soldering',
  'Support for complex and high-reliability electronic assemblies',
];

const REWORK_BULLETS = [
  'Replacement of faulty or damaged components',
  'Removal and reinstallation of components',
  'Correction of assembly issues and soldering defects',
  'Support for engineering changes and design updates',
  'PCB modification and upgrade support',
  'Rework support during prototype and testing stages',
];

export default function FabricationAssembly() {
  return (
    <>
      <PageHero
        title="Engineering Services:"
        serviceName="PCB Fabrication & Assembly"
        backgroundImage={images.factory}
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={images.factory} alt="PCB fabrication and assembly" />
              </div>
              <div className="service-page__content">
                <p className="service-page__lead">
                  THINKERDYNE Technologies provides reliable PCB fabrication and assembly services to convert your PCB designs into high-quality, fully assembled electronic boards. We work closely with trusted and qualified manufacturing vendors to ensure precision fabrication, accurate assembly, and consistent product quality.
                </p>
                <p className="service-page__lead">
                  Our strong vendor network and engineering-driven approach ensure that every PCB meets design specifications, quality standards, and manufacturing requirements—from prototype builds to production volumes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={images.pcbFabricationService} alt="PCB fabrication services" />
              </div>
              <div className="service-page__content">
                <h2 className="service-page__h2">PCB Fabrication Services</h2>
                <p className="service-page__lead">
                  We coordinate with trusted PCB fabrication partners to ensure precision manufacturing and consistent board quality.
                </p>
                <ul className="service-page__list">
                  {FABRICATION_BULLETS.map((item) => (
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
                <img src={images.pcbLayout} alt="PCB assembly services" />
              </div>
              <div className="service-page__content">
                <h2 className="service-page__h2">PCB Assembly Services</h2>
                <p className="service-page__lead">
                  We provide complete PCB assembly coordination through experienced and qualified assembly vendors.
                </p>
                <ul className="service-page__list">
                  {ASSEMBLY_BULLETS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h2 className="service-page__h2">PCB Rework Services</h2>
                <p className="service-page__lead">
                  We provide professional PCB rework support to correct, modify, or improve existing PCB assemblies.
                </p>
                <ul className="service-page__list">
                  {REWORK_BULLETS.map((item) => (
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
