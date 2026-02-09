import PageHero from '../components/PageHero';
import { images } from '../constants/images';
import './ServicePage.css';

const RE_SERVICES = [
  'Schematic Re-Generation',
  'PCB CAD File Re-Generation',
  'Re-engineering an old PCB design to current standards',
  'Re-engineering for Cost Reduction & Part Obsolescence',
];

export default function ReverseEngineering() {
  return (
    <>
      <PageHero
        title="Reverse Engineering"
        subtitle="World-class PCB reverse engineering from bare board or assembled board to full design and documentation."
        backgroundImage={images.reverseEngineering}
      />
      <div className="service-page">
        <section className="section section--alt">
          <div className="container">
            <p className="service-page__lead">
              Thinkerdyne is equipped to provide world-class PCB reverse engineering services. We can take an existing board from a bare board, an assembled board, existing drawings, and we can re-create a new design with all supporting documentation.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="service-page__split">
              <div className="service-page__content">
                <h2 className="service-page__h2">Reverse Engineering</h2>
                <ul className="service-page__list">
                  {RE_SERVICES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="service-page__media">
                <img src={images.electronics} alt="Reverse engineering" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
