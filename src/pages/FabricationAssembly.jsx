import PageHero from "../components/PageHero";
import { images } from "../constants/images";
import "./ServicePage.css";

const FABRICATION_SUPPORT = [
  "Support for PCB fabrication through trusted and qualified manufacturing vendors",
  "Manufacturing coordination for single-layer, double-layer, and multi-layer PCB designs",
  "Guidance on PCB material selection based on electrical, thermal, and application requirements",
  "Controlled impedance and stack-up implementation to meet signal integrity and design specifications",
  "Support for prototype, pre-production, and production fabrication requirements",
  "Preparation and verification of fabrication files to ensure accurate and reliable manufacturing outcomes",
  "Engineering coordination with fabrication partners to ensure design compliance and manufacturing readiness",
];

const ASSEMBLY_SUPPORT = [
  "Coordination with trusted assembly vendors for SMT, through-hole, and mixed-technology PCB assemblies",
  "Quick turnaround support for prototype and engineering validation builds",
  "Assembly support for prototype, pre-production, and volume manufacturing",
  "BOM verification and component readiness coordination for efficient assembly",
  "Preparation and validation of Pick and Place data and assembly documentation",
  "Support for assembly of fine-pitch and high-density PCB designs",
  "Support for assembly of fine-pitch and high-density PCB designs",
  "Assembly support to ensure reliable and production-ready PCB boards",
];

const PCB_REWORK = [
  "Component replacement, correction of assembly defects, and solder rework",
  "PCB modifications to implement design updates, engineering changes, or component revisions",
  "Rework support for prototype, engineering validation, and production boards",
  "Repair and restoration of faulty, damaged, or non-functional PCB assemblies",
  "Removal and replacement of SMT and through-hole components with proper handling and precision",
  "Support for rework of fine-pitch and sensitive components using controlled processes",
  "Engineering validation and functional verification after rework to ensure reliable operation",
];

export default function FabricationAssembly() {
  return (
    <>
      <PageHero
        title="Engineering Services:"
        serviceName="PCB Fabrication & Assembly"
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <div className="service-page__panel">
              <h2 className="service-page__panel-title">
                Fabrication, Assembly, and PCB Rework
              </h2>
              <p className="service-page__lead" style={{ maxWidth: "100%" }}>
                Thinkerdyne provides professional PCB fabrication, assembly, and
                rework support to ensure reliable and efficient manufacturing of
                electronic products. We work closely with trusted and qualified
                fabrication and assembly vendors to deliver high-quality PCB
                boards that meet design specifications, performance
                requirements, and production standards.
              </p>
              <p className="service-page__lead" style={{ maxWidth: "100%" }}>
                Our engineering-driven approach ensures accurate manufacturing
                preparation, component coordination, and assembly support,
                enabling a seamless transition from design to prototype and
                production. In addition, we provide PCB rework and modification
                support to correct issues, implement design updates, and restore
                functionality, helping extend product lifecycle and ensure
                manufacturing reliability.
              </p>

              <h3
                className="service-page__h3"
                style={{ color: "var(--color-text)", marginTop: "1.25rem" }}
              >
                PCB Fabrication Support
              </h3>
              <ul className="service-page__arrowlist">
                {FABRICATION_SUPPORT.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__media">
                <img src={images.assembly} alt="PCB fabrication and assembly" />
              </div>
              <div className="service-page__panel">
                <h3
                  className="service-page__h3"
                  style={{ color: "var(--color-text)", marginTop: 0 }}
                >
                  PCB Assembly Support
                </h3>
                <ul className="service-page__arrowlist">
                  {ASSEMBLY_SUPPORT.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>

                <div style={{ height: "1rem" }} />

                <h3
                  className="service-page__h3"
                  style={{ color: "var(--color-text)", marginTop: 0 }}
                >
                  PCB Rework
                </h3>
                <ul className="service-page__arrowlist">
                  {PCB_REWORK.map((i) => (
                    <li key={i}>{i}</li>
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
