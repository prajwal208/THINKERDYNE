import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useFadeInUp, useStaggerChildren } from '../../hooks/useScrollAnimation';
import { serviceRoutes, images } from '../../constants/images';
import './Services.css';

const SERVICE_DESCRIPTIONS = {
  'PCB Design': '"Thinkerdyne" is a premier provider of PCB design services.',
  'PCB Analysis': '"Thinkerdyne" will take your PCB through a set of comprehensive tests.',
  'Manufacturing Service': '"Thinkerdyne" offer complete electronics manufacturing services.',
  'Reverse Engineering': '"Thinkerdyne" is equipped to provide world class PCB reverse engineering.',
};

const SERVICE_IMAGES = {
  'PCB Design': images.circuitBoard,
  'PCB Analysis': images.lab,
  'Manufacturing Service': images.factory,
  'Reverse Engineering': images.electronics,
};

export default function Services() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  useFadeInUp({ ref: headerRef });
  useStaggerChildren({ containerRef: gridRef, selector: '.services__card' });

  return (
    <section
      id="services"
      className="services section"
      style={{ backgroundImage: `url(${images.servicesBg})` }}
    >
      <div className="services__overlay" aria-hidden="true" />
      <div className="container services__content">
        <div className="services__header" ref={headerRef}>
          <h2 className="services__title">Core Services</h2>
          <p className="services__subtitle">We have the best value for you</p>
        </div>
        <div className="services__grid" ref={gridRef}>
          {serviceRoutes.map((service) => (
            <Link
              key={service.title}
              to={service.path}
              className="services__card"
            >
              <div className="services__card-img-wrap" aria-hidden="true">
                <img src={SERVICE_IMAGES[service.title]} alt="" />
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">
                {SERVICE_DESCRIPTIONS[service.title]}
              </p>
              <span className="services__card-link">Know more</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
