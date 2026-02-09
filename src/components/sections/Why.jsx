import { useRef } from 'react';
import { useFadeInUp, useStaggerChildren } from '../../hooks/useScrollAnimation';
import { images } from '../../constants/images';
import './Why.css';

const FACTORS = [
  { title: 'Experience', description: 'Proven expertise in PCB design and electronics.' },
  { title: 'Excellence', description: 'High-quality deliverables and attention to detail.' },
  { title: 'Time To Market', description: 'Efficient processes to accelerate your product launch.' },
  { title: 'Reliable Partner', description: 'Dedicated support and long-term collaboration.' },
];

export default function Why() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  useFadeInUp({ ref: headerRef });
  useStaggerChildren({ containerRef: gridRef, selector: '.why__card' });

  return (
    <section
      id="why"
      className="why section"
      style={{ backgroundImage: `url(${images.whyBg})` }}
    >
      <div className="why__overlay" aria-hidden="true" />
      <div className="container why__content">
        <div className="why__header" ref={headerRef}>
          <h2 className="why__title">Why THINKERDYNE?</h2>
          <p className="why__subtitle">Our success factors</p>
        </div>
        <div className="why__grid" ref={gridRef}>
          {FACTORS.map((factor) => (
            <div key={factor.title} className="why__card">
              <div className="why__card-icon" aria-hidden="true" />
              <h3 className="why__card-title">{factor.title}</h3>
              <p className="why__card-desc">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
