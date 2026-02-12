import PageHero from '../components/PageHero';
import { images } from '../constants/images';
import imgPcbDesign from '../assets/pcb_design.jpg';
import './ServicePage.css';

const LIBRARY_BULLETS = [
  'Creation of schematic symbols with correct pin mapping',
  'Development of PCB footprints based on manufacturer datasheets and IPC standards',
  'Creation of accurate 3D models for mechanical integration and clearance verification',
  'Library verification to prevent footprint and connectivity errors',
  'Organized and centralized component library management',
  'Standard naming conventions for consistency across projects',
  'Continuous library validation and maintenance',
];

const PCB_LAYOUT_BULLETS = [
  'Schematic capture and circuit design based on product requirements',
  'PCB layout for single-layer, multi-layer, and high-density designs',
  'High-speed PCB design with controlled impedance and signal integrity focus',
  'Analog, digital, mixed-signal, and power electronics PCB layout',
  'Optimized component placement for proper signal flow and thermal performance',
  'Differential pair routing, length matching, and impedance-controlled routing',
  'Power plane and grounding design for stable and low-noise operation',
  'Stack-up definition based on electrical and manufacturing requirements',
  'Compact and optimized layout for space-efficient designs',
  'Implementation of DFM, DFA, and DFT for reliable manufacturing and testing',
];

const PCB_ANALYSIS_BULLETS = [
  'Signal integrity analysis to ensure clean and stable signal transmission',
  'Power integrity analysis for reliable and efficient power distribution',
  'Thermal analysis to improve heat dissipation and component reliability',
  'Design Rule Check (DRC) and Electrical Rule Check (ERC) verification',
  'EMI/EMC-aware layout practices to reduce interference and improve compliance',
  'Stack-up and grounding validation for improved performance',
  'Layout review and design optimization to prevent potential issues',
];

const MANUFACTURING_BULLETS = [
  'Gerber and fabrication files',
  'Bill of Materials (BOM) with verified component details',
  'Pick and Place files and assembly data',
  'Assembly drawings and PCB documentation',
  '3D PCB models for mechanical integration',
  'Engineering support during fabrication and assembly',
];

function SectionSplit({ image, imageAlt, children }) {
  return (
    <div className="service-page__split">
      <div className="service-page__media">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="service-page__content">{children}</div>
    </div>
  );
}

export default function PcbDesign() {
  return (
    <>
      <PageHero
        title="Engineering Services:"
        serviceName="PCB Design & Analysis"
        backgroundImage={images.pcbDesign}
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <SectionSplit
              image={imgPcbDesign}
              imageAlt="PCB design and analysis"
            >
              <p className="service-page__lead">
                THINKERDYNE Technologies offers professional PCB design, engineering analysis, and component library management services to support the development of reliable, high-performance electronic products. With over two decades of combined engineering experience, our team delivers precision PCB layouts that ensure strong electrical performance, signal integrity, thermal reliability, and smooth manufacturability.
              </p>
              <p className="service-page__lead">
                We support the complete PCB development cycle—from schematic design and verified library creation to layout, analysis, and manufacturing documentation—ensuring every design is accurate, optimized, and ready for production.
              </p>
            </SectionSplit>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionSplit
              image={images.libraryManagement}
              imageAlt="Component library"
            >
              <h2 className="service-page__h2">Component Library Creation and Management:</h2>
              <p className="service-page__lead">
                We develop and maintain accurate, verified component libraries to ensure consistency, accuracy, and efficient PCB design.
              </p>
              <ul className="service-page__list">
                {LIBRARY_BULLETS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>Proper library management improves design accuracy, reduces errors, and ensures smooth manufacturing.</p>
            </SectionSplit>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <SectionSplit
              image={imgPcbDesign}
              imageAlt="PCB layout"
            >
              <h2 className="service-page__h2">PCB Design and Layout:</h2>
              <p className="service-page__lead">
                Our engineers design high-quality PCB layouts tailored to meet product performance, reliability, and manufacturing requirements.
              </p>
              <ul className="service-page__list">
                {PCB_LAYOUT_BULLETS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionSplit>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionSplit
              image={images.pcbLayout}
              imageAlt="PCB analysis"
            >
              <h2 className="service-page__h2">PCB Analysis and Validation:</h2>
              <p className="service-page__lead">
                We perform detailed analysis and validation to ensure the PCB meets performance, reliability, and production requirements.
              </p>
              <ul className="service-page__list">
                {PCB_ANALYSIS_BULLETS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>This validation process ensures the PCB design is reliable, efficient, and production-ready.</p>
            </SectionSplit>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <SectionSplit
              image={images.manufacturingDocs}
              imageAlt="Manufacturing documentation"
            >
              <h2 className="service-page__h2">Manufacturing Outputs and Support</h2>
              <p className="service-page__lead">
                We provide complete manufacturing documentation to ensure seamless PCB fabrication and assembly.
              </p>
              <ul className="service-page__list">
                {MANUFACTURING_BULLETS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionSplit>
          </div>
        </section>
      </div>
    </>
  );
}
