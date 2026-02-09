import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { images } from '../../constants/images';
import './Hero.css';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const INDUSTRIES = [
  'Defense',
  'Aerospace',
  'Automotive',
  'Telecommunication',
  'Industrial',
  'Consumer Electronics',
];

export default function Hero() {
  const titleRef = useRef(null);
  const sublineRef = useRef(null);
  const tagsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = titleRef.current;
    const sub = sublineRef.current;
    const tags = tagsRef.current;
    const cta = ctaRef.current;
    if (!el) return;

    gsap.fromTo(
      [el, sub, tags, cta],
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 0.2,
      }
    );
  }, []);

  return (
    <section id="hero" className="hero section section--lg" style={{ backgroundImage: `url(${images.heroBg})` }}>
      <div className="container hero__container">
        <h1 className="hero__title" ref={titleRef}>
          <span className="hero__title-line">Tailored PCB Solutions</span>
        </h1>
        <p className="hero__subline" ref={sublineRef}>
          Custom PCB designs crafted to meet your specific project needs, ensuring top performance and reliability.
        </p>
        <div className="hero__tags" role="list" ref={tagsRef}>
          {INDUSTRIES.map((industry) => (
            <span key={industry} className="hero__tag" role="listitem">
              {industry}
            </span>
          ))}
        </div>
        <a href="#contact" className="btn btn--primary hero__cta" ref={ctaRef}>
          Discover More
        </a>
      </div>
    </section>
  );
}
