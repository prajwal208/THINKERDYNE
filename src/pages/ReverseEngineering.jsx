import PageHero from '../components/PageHero';
import { images } from '../constants/images';
import imgReverseEngineering from '../assets/reverse_engineering.jpg';
import './ServicePage.css';

const RE_CAPABILITIES = [
  'Complete analysis of single-layer and double-layer PCBs',
  'Schematic reconstruction from existing PCB boards',
  'Circuit tracing and connectivity verification',
  'Identification of components and part numbers',
  'Recreation of PCB layout design files',
  'Component footprint creation and library development',
  'Verification of circuit functionality and design accuracy',
];

const DESIGN_RECOVERY = [
  'Recovery of lost or unavailable design files',
  'Replacement of obsolete or discontinued components',
  'PCB redesign and layout improvement if required',
  'Preparation of production-ready PCB design files',
  'Support for design updates and modifications',
];

const DELIVERABLES = [
  'Recreated schematic diagrams',
  'PCB layout design files',
  'Gerber files for fabrication',
  'Bill of Materials (BOM)',
  'Component libraries and footprints',
  'Manufacturing and assembly documentation',
];

export default function ReverseEngineering() {
  return (
    <>
      <PageHero
        title="Engineering Services:"
        serviceName="Reverse Engineering"
        backgroundImage={images.reverseEngineering}
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={imgReverseEngineering} alt="Reverse engineering" />
              </div>
              <div className="service-page__content">
                <h2 className="service-page__h2">Reverse Engineering:</h2>
                <p className="service-page__lead">
                  THINKERDYNE Technologies provides professional reverse engineering services for single-layer and double-layer PCBs, helping clients recover, understand, and recreate existing electronic designs.
                </p>
                <p className="service-page__lead">
                  With over two decades of combined engineering experience, our team carefully analyzes PCB hardware to extract circuit information and recreate accurate schematic and layout data.
                </p>
                <p>
                  This service is ideal when original design files are unavailable, documentation is missing, or when redesign, modification, or manufacturing support is required.
                </p>
                <h3 className="service-page__h3">Our Reverse Engineering Capabilities</h3>
                <p>We specialize in reverse engineering of single-layer and double-layer PCBs with accurate and reliable design reconstruction.</p>
                <ul className="service-page__list">
                  {RE_CAPABILITIES.map((item) => (
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
                <img src={imgReverseEngineering} alt="Design recovery" />
              </div>
              <div className="service-page__content">
                <h2 className="service-page__h2">Design Recovery and Improvement</h2>
                <p className="service-page__lead">
                  We help restore and enhance existing designs to support continued development and manufacturing.
                </p>
                <ul className="service-page__list">
                  {DESIGN_RECOVERY.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3 className="service-page__h3">Deliverables and Documentation</h3>
                <p className="service-page__lead">
                  We provide complete and accurate design data for manufacturing and future development.
                </p>
                <ul className="service-page__list">
                  {DELIVERABLES.map((item) => (
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
