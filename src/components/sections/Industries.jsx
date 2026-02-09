import { useRef } from 'react';
import { useFadeInUp, useStaggerChildren } from '../../hooks/useScrollAnimation';
import './Industries.css';

const INDUSTRIES = [
  'Defense',
  'Aerospace',
  'Automotive',
  'Telecommunication',
  'Industrial',
  'Consumer Electronics',
];

export default function Industries() {
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  useFadeInUp({ ref: titleRef });
  useStaggerChildren({ containerRef: gridRef, selector: '.industries__item' });

  return (
    <section id="industries" className="industries section section--alt">
      <div className="container">
        <h2 className="industries__title" ref={titleRef}>Industries We Serve</h2>
        <div className="industries__grid" ref={gridRef}>
          {INDUSTRIES.map((industry) => (
            <div key={industry} className="industries__item">
              <span className="industries__item-name">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
