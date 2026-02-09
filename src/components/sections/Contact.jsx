import { useState, useRef } from 'react';
import { useFadeInUp } from '../../hooks/useScrollAnimation';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  useFadeInUp({ ref: sectionRef });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact section section--dark" ref={sectionRef}>
      <div className="container">
        <h2 className="contact__title">Connect with Us</h2>
        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" name="name" required placeholder="Your name" />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-email">Email Address</label>
              <input id="contact-email" type="email" name="email" required placeholder="your@email.com" />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message">Enter your Query</label>
              <textarea id="contact-message" name="message" rows={4} placeholder="Your message" />
            </div>
            <button type="submit" className="btn btn--light contact__submit">
              Send Message
            </button>
            {submitted && (
              <p className="contact__feedback contact__feedback--success">
                Thank you! Your submission has been received!
              </p>
            )}
            {error && (
              <p className="contact__feedback contact__feedback--error">
                Oops! Something went wrong while submitting the form.
              </p>
            )}
          </form>
          <div className="contact__info">
            <p>Get in touch with our expert team. We are just a click away.</p>
            <a href="#hero" className="btn btn--secondary contact__cta">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
