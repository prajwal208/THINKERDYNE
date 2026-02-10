import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useFadeInUp, useStaggerChildren } from '../../hooks/useScrollAnimation';
import { serviceRoutes, images } from '../../constants/images';
import './Services.css';

const SERVICE_DESCRIPTIONS = {
  'PCB Design':
    'Thinkerdyne is a premier provider of PCB design services for UK, Europe and beyond. Our customers trust us for reliable, high-quality designs and many of our new customers come from referrals. OEMs and engineering teams depend on us for their PCB requirements, from schematic capture through to manufacturing-ready layouts. We leverage industry-standard CAE tools and best practices to deliver designs that meet your performance, cost and timeline goals.',
  'PCB Analysis':
    'Thinkerdyne takes your PCB through a comprehensive set of tests including signal integrity, power integrity and thermal analysis. Our 24-hour tech support means you can reach a live engineer whenever you need help. We are committed to personal customer service and direct interaction with CAM professionals, so you get clear answers and faster resolution. Whether you need design review, DFM checks or failure analysis, our team is equipped to support you around the clock.',
  'Manufacturing Service':
    'Thinkerdyne offers complete electronics manufacturing services with our own state-of-the-art facility. We ensure consistent quality, after-sales support and review of engineering files at no extra charge for custom PCB fabrication. Our goal is to meet and exceed customer expectations for both prototype and volume production. From assembly to testing and logistics, we provide end-to-end manufacturing solutions for the UK, Europe and global customers.',
  'Reverse Engineering':
    'Thinkerdyne is equipped to provide world-class PCB reverse engineering services. We can extract schematics, recreate layouts and document legacy boards for obsolescence management, repair or redesign. Our process is precise, confidential and tailored to your project needs. Get instant quotes, upload files and track status through our streamlined workflow. We support quick-turn reverse engineering for defence, aerospace, industrial and consumer applications.',
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
      <div className="services__content">
        <div className="container services__header-wrap">
          <div className="services__header" ref={headerRef}>
            <h2 className="services__title">Core Services</h2>
            <p className="services__subtitle">We have the best value for you</p>
          </div>
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
