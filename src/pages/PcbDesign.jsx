import PageHero from '../components/PageHero';
import { images } from '../constants/images';
import './ServicePage.css';

const LIBRARY_SERVICES = [
  'Rapid Library Creation Support',
  'Symbol and Footprint Development',
  'Customized Footprint Creation',
  'Component 3D Model Integration',
  'Library Maintenance and Verification',
  'Library Conversion',
];

const PCB_DESIGN_FEATURES = [
  'Schematic Capture – Flat & Hierarchical Schematic Create',
  'Analog Design, Digital Design, RF Design and High Power Designs',
  'Rigid Design, Flex Design and Rigid Flex Design',
  'Multi Board – Backplane / Peripheral Boards',
  'High Layer count and Ultra High-density PCB layout design Services',
  'Impedance controlled PCB Layout Design with delay matching',
  'Micro Vias, Blind Vias, Buried Vias, and Back Drill | Design',
];

export default function PcbDesign() {
  return (
    <>
      <PageHero
        title="PCB Design"
        subtitle="Premier PCB design services from schematic to layout. Library development and full design lifecycle."
        backgroundImage={images.pcbDesign}
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <h2 className="service-page__h2">Library Development</h2>
            <p className="service-page__lead">
              Thinkerdyne is highly experienced in library management, provides the most comprehensive & accurate library services. Our library review process ensures zero defect on the component- Symbol & Footprints. Our end-to-end library creation and maintenance services are in line with the latest IPC 7351 Standards, and our thorough review process of PCB Footprint guarantees zero-defect footprints.
            </p>
            <h3 className="service-page__h3">Library Services:</h3>
            <ul className="service-page__list">
              {LIBRARY_SERVICES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__content">
                <h2 className="service-page__h2">PCB Design</h2>
                <p className="service-page__lead">
                  Thinkerdyne is a premier provider of PCB design services. We are well prepared to undertake your printed circuit board design challenges ranging from simple to complex designs.
                </p>
                <ul className="service-page__list">
                  {PCB_DESIGN_FEATURES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="service-page__media">
                <img src={images.circuitBoard} alt="PCB design and layout" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
