import engineeringProcessImg from '../../assets/engineering_process.jpg';
import './EngineeringProcess.css';

const STEPS = [
  'Requirement Analysis and Technical Specification Definition',
  'Hardware Architecture Design and Component Selection',
  'Schematic Capture and Electrical Design Validation',
  'Multi-layer PCB Layout with Signal, Power, and Thermal Optimization',
  'Design Verification including DRC, ERC, and Manufacturability Checks',
  'BOM Preparation with Availability and Lifecycle Considerations',
  'Generation of Manufacturing Deliverables (Gerber, Assembly, and Fabrication Files)',
  'Engineering Documentation and Production Release Support',
];

export default function EngineeringProcess() {
  return (
    <section id="engineering-process" className="engineering-process section section--alt">
      <div className="container engineering-process__inner">
        <div className="engineering-process__content">
          <h2 className="engineering-process__title">Our Engineering Process</h2>
          <p className="engineering-process__intro">
            We follow a systematic development approach to ensure quality and reliability.
          </p>
          <ul className="engineering-process__list" role="list">
            {STEPS.map((step) => (
              <li key={step} className="engineering-process__item">
                <span className="engineering-process__arrow" aria-hidden="true">→</span>
                {step}
              </li>
            ))}
          </ul>
        </div>
        <div className="engineering-process__visual" aria-hidden="true">
          <img src={engineeringProcessImg} alt="" className="engineering-process__img" />
        </div>
      </div>
    </section>
  );
}
