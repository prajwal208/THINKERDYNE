import './CaeSoftwares.css';

const CAE_LOGOS = [
  { name: 'Altium', className: 'cae-softwares__logo--altium' },
  { name: 'KiCad', className: '' },
];

export default function CaeSoftwares() {
  return (
    <section className="cae-softwares" aria-label="CAE Softwares">
      <h2 className="cae-softwares__title">Software Infrastructure</h2>
      <p className="cae-softwares__subtitle">Software We Use</p>
      <div className="cae-softwares__scroll-wrap">
        <div className="cae-softwares__track">
          <div className="cae-softwares__logos">
            {CAE_LOGOS.map((logo) => (
              <span
                key={logo.name}
                className={`cae-softwares__logo ${logo.className}`}
              >
                {logo.name}
              </span>
            ))}
          </div>
          <div className="cae-softwares__logos" aria-hidden="true">
            {CAE_LOGOS.map((logo) => (
              <span
                key={`dup-${logo.name}`}
                className={`cae-softwares__logo ${logo.className}`}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
