import { useRef } from 'react';
import { useFadeInUp, useStaggerChildren } from '../../hooks/useScrollAnimation';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Ashok Rathod',
    role: 'Client',
    text: "We've been working with Thinkerdyne for the past 4 years on multiple PCB design projects, and the experience has been exceptional. Their team combines deep technical knowledge with a commitment to quality and on-time delivery. From schematic capture to layout design and DFM checks, every step was handled with precision. Highly recommended for a reliable and skilled PCB design partner.",
    rating: 5,
    initial: 'A',
  },
  {
    name: 'Client',
    role: 'Engineering Lead',
    text: 'Professional team with deep expertise in signal integrity and power design. Our go-to partner for critical electronics projects.',
    rating: 5,
    initial: 'C',
  },
];

export default function Testimonials() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  useFadeInUp({ ref: headerRef });
  useStaggerChildren({ containerRef: gridRef, selector: '.testimonials__card' });

  return (
    <section id="testimonials" className="testimonials section section--alt">
      <div className="container">
        <div className="testimonials__header" ref={headerRef}>
          <h2 className="testimonials__title">TESTIMONIALS</h2>
          <p className="testimonials__subtitle">EVERY WORD COMES FROM REAL EXPERIENCE</p>
        </div>
        <div className="testimonials__grid" ref={gridRef}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonials__card">
              <div className="testimonials__card-body">
                <div className="testimonials__avatar" aria-hidden="true">
                  <span>{t.initial}</span>
                </div>
                <p className="testimonials__card-name">{t.name}</p>
                <div className="testimonials__card-rating" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="testimonials__star" aria-hidden="true">★</span>
                  ))}
                </div>
                <p className="testimonials__card-text">"{t.text}"</p>
                <p className="testimonials__card-role">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
