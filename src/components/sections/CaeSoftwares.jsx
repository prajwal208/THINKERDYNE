import './CaeSoftwares.css';

const CAE_LOGOS = [
  { name: 'ADS', className: '' },
  { name: 'Altium', className: 'cae-softwares__logo--altium' },
  { name: 'Cadence', className: 'cae-softwares__logo--cadence' },
  { name: 'Cradle', className: 'cae-softwares__logo--cradle' },
  { name: 'Mentor Graphics', className: 'cae-softwares__logo--mentor' },
  { name: 'Valor', className: '' },
  { name: 'Zuken', className: 'cae-softwares__logo--zuken' },
];

export default function CaeSoftwares() {
  return (
    <section className="cae-softwares" aria-label="CAE Softwares">
      <h2 className="cae-softwares__title">Software We Use</h2>
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
