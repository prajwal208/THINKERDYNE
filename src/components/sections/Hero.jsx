import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroVideo from "../../assets/6466100-uhd_3840_2160_30fps.mp4";
import "./Hero.css";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const SERVICES = [
  "Embedded Hardware",
  "Component Sourcing",
  "Embedded Firmware",
  "PCB Fabrication & Assembly",
  "PCB Desing & Analysis",
  "PCB Testing & Validation",
  "Reverse Engineering",
  "Wiring Harness",
];

export default function Hero() {
  const titleRef = useRef(null);
  const sublineRef = useRef(null);
  const listRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = titleRef.current;
    const sub = sublineRef.current;
    const list = listRef.current;
    const cta = ctaRef.current;
    if (!el) return;

    gsap.fromTo(
      [el, sub, list, cta],
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        delay: 0.2,
      },
    );
  }, []);

  return (
    <section id="hero" className="hero section section--lg">
      <div className="hero__video-wrap" aria-hidden="true">
        <video
          className="hero__video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          tabIndex={-1}
        />
      </div>
      <div className="hero__graphics" aria-hidden="true" />
      <div className="container hero__container">
        <h1 className="hero__title" ref={titleRef}>
          <span className="hero__title-line">
            Engineering the Future of Connected Devices
          </span>
        </h1>
        <p className="hero__subline" ref={sublineRef}>
          Turning concepts into production-ready products through expert
          engineering.
        </p>
        <ul className="hero__service-list" ref={listRef} role="list">
          {SERVICES.map((service) => (
            <li key={service} className="hero__service-item">
              {service}
            </li>
          ))}
        </ul>
        <a href="#services" className="btn btn--primary hero__cta" ref={ctaRef}>
          Discover More
        </a>
      </div>
    </section>
  );
}
