import { useState } from "react";
import { useRef } from "react";
import {
  useFadeInUp,
  useStaggerChildren,
} from "../../hooks/useScrollAnimation";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    name: "Arindam Ghosh",
    role: "Client",
    text: "Extremely professional and talent team. We rely on this team completely for PCB services. Our design included an auto grade camera FPDlink module and quad core ARM processor based edge computing unit. It was a first pass success, thanks to this team. Would highly recommend.",
    rating: 5,
    initial: "AR",
    platform: "G",
  },
  {
    name: "Sathish Kumar",
    role: "Verified User in Consulting · Owner at Small-Business (50 or fewer emp.)",
    text: "Expert in multi-layer Hi Speed mixed signal PCB design and providing turnkey product service with end-to-end tech.",
    rating: 5,
    initial: "C",
    platform: "G",
  },
  {
    name: "Feraud O.",
    role: "Engineering Lead",
    text: "Professional team with deep expertise in signal integrity and power design. Our go-to partner for critical electronics projects. Delivery has always been on time with clear communication throughout.",
    rating: 5,
    initial: "FO",
    platform: "G",
  },
  {
    name: "Daniel Armendariz",
    role: "Technical Director",
    text: "We have partnered with Thinkerdyne for embedded hardware and firmware development. Their engineering approach and quality of deliverables are excellent. Strong recommendation for complex product development.",
    rating: 5,
    initial: "DA",
    platform: null,
  },
  {
    name: "Ajay Sahoo",
    role: "Product Manager",
    text: "Thinkerdyne delivered our PCB fabrication and assembly project with great attention to detail. The team was responsive and the final boards met all our specifications. We will use them again for future builds.",
    rating: 5,
    initial: "AS",
    platform: "P",
  },
];

function TestimonialCard({ t, isExpanded, onToggle }) {
  const truncateLength = 120;
  const isLong = t.text.length > truncateLength;
  const displayText =
    isExpanded || !isLong ? t.text : t.text.slice(0, truncateLength) + "...";

  return (
    <div className="testimonials__card">
      {t.platform && (
        <span className="testimonials__card-platform" aria-hidden="true">
          {t.platform}
        </span>
      )}
      <div className="testimonials__card-body">
        <div className="testimonials__card-header">
          <div className="testimonials__avatar" aria-hidden="true">
            <span>{t.initial}</span>
          </div>
          <div className="testimonials__card-meta">
            <p className="testimonials__card-name">{t.name}</p>
            <p className="testimonials__card-role">{t.role}</p>
          </div>
        </div>
        <div
          className="testimonials__card-rating"
          aria-label={`${t.rating} out of 5 stars`}
        >
          {Array.from({ length: t.rating }).map((_, i) => (
            <span key={i} className="testimonials__star" aria-hidden="true">
              ★
            </span>
          ))}
        </div>
        <p className="testimonials__card-text">"{displayText}"</p>
        {/* {isLong && (
          <button
            type="button"
            className="testimonials__read-more"
            onClick={onToggle}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )} */}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [expandedId, setExpandedId] = useState(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  useFadeInUp({ ref: headerRef });
  useStaggerChildren({
    containerRef: gridRef,
    selector: ".testimonials__card",
  });

  return (
    <section id="testimonials" className="testimonials section section--alt">
      <div className="container">
        <div className="testimonials__header" ref={headerRef}>
          <h2 className="testimonials__title">Reviews</h2>
          <p className="testimonials__subtitle">
            What our clients say about us
          </p>
        </div>
        <div className="testimonials__grid" ref={gridRef}>
          {TESTIMONIALS.map((t) => (
            <TestimonialCard
              key={t.name + t.role}
              t={t}
              isExpanded={expandedId === t.name + t.role}
              onToggle={() =>
                setExpandedId((prev) =>
                  prev === t.name + t.role ? null : t.name + t.role,
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
