import { useRef } from 'react';
import { useFadeInUp, useStaggerChildren } from '../../hooks/useScrollAnimation';
import { images } from '../../constants/images';
import './Why.css';

const FACTORS = [
  { title: 'Experience', description: 'Proven expertise in PCB design and electronics.', image: images.whyExperience },
  { title: 'Excellence', description: 'High-quality deliverables and attention to detail.', image: images.whyGlobalReach },
  { title: 'Time To Market', description: 'Efficient processes to accelerate your product launch.', image: images.whyTimeToMarket },
  { title: 'Reliable Partner', description: 'Dedicated support and long-term collaboration.', image: images.whyReliable },
  { title: 'Innovation', description: 'Cutting-edge technology and forward-thinking methodologies.', image: images.whyInnovation },
  { title: 'Quality Assurance', description: 'Rigorous testing and validation at every stage.', image: images.whyReliable },
  { title: 'Customer Focus', description: 'Tailored solutions built around your unique requirements.', image: images.whyCustomerFocus },
  { title: 'Global Reach', description: 'Serving clients worldwide with scalable solutions.', image: images.whyGlobalReach },
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
          <h2 className="why__title">Our Competitive Advantage</h2>
          <p className="why__subtitle">Our Core Strengths &amp; Values</p>
        </div>
        <div className="why__grid" ref={gridRef}>
          {FACTORS.map((factor) => (
            <div key={factor.title} className="why__card">
              <div className="why__card-img-wrap" aria-hidden="true">
                <img src={factor.image} alt="" />
              </div>
              <h3 className="why__card-title">{factor.title}</h3>
              <p className="why__card-desc">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
