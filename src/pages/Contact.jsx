import { useState } from 'react';
import PageHero from '../components/PageHero';
import { images, serviceRoutes } from '../constants/images';
import './ContactPage.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    contactMethod: 'Email',
    service: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="CONTACT US"
        subtitle="Looking forward for great Partnership"
        backgroundImage={images.contactBg}
      />
      <div className="contact-page">
        <section className="contact-page__intro section section--alt">
          <div className="container contact-page__intro-inner">
            <h2 className="contact-page__h2">How we can HELP?</h2>
            <p className="contact-page__lead">
              We would love to work with you! You're not going to hit a ridiculously long phone menu when you call us. Your email isn't going to the inbox abyss, never to be seen or heard from again. At Thinkerdyne, we provide the exceptional service we'd want to experience ourselves!
            </p>
            <p className="contact-page__tagline">PCB Design Company In Bangalore – Thinkerdyne</p>
          </div>
        </section>

        <section className="contact-page__main section">
          <div className="container contact-page__main-inner">
            <div className="contact-page__info">
              <h3 className="contact-page__info-heading">Contact Address</h3>
              <p className="contact-page__address">
                THINKERDYNE Technologies<br />
                No 59, 60, NL Arcade, Second Main, Vinayaka Layout, Shanthipura, Electronic City, Phase II, Bengaluru, Karnataka, India – 560100.
              </p>

              <h3 className="contact-page__info-heading">Let's Talk</h3>
              <p className="contact-page__phones">
                <a href="tel:+919677510113">+91 9677510113</a>
              </p>

              <h3 className="contact-page__info-heading">Email Us</h3>
              <p className="contact-page__emails">
                <a href="mailto:info@thinkerdyne.com">info@thinkerdyne.com</a>
              </p>

              <h3 className="contact-page__info-heading">Working Hours</h3>
              <p className="contact-page__hours">
                Monday to Saturday<br />
                09:30 am to 06:30 pm
              </p>

              <div className="contact-page__map-wrap">
                <iframe
                  title="Thinkerdyne Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.370099584!2d77.6685!3d12.8486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUwJzU1LjAiTiA3N8KwNDAnMDYuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="contact-page__form-wrap">
              <h2 className="contact-page__form-title">Tell us about your PROJECT</h2>
              <p className="contact-page__form-subtitle">
                We operate in an industry built on trust. This can only be achieved through communication and experienced support – from the first contact past your ten-year anniversary.
              </p>
              <p className="contact-page__form-cta">Request a Call Back!</p>

              {submitted ? (
                <div className="contact-page__feedback contact-page__feedback--success">
                  Thank you! We have received your request and will get back to you soon.
                </div>
              ) : (
                <form className="contact-page__form" onSubmit={handleSubmit}>
                  <div className="contact-page__row">
                    <div className="contact-page__field">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="contact-page__field">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="contact-page__field">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-page__field">
                    <label htmlFor="phone">Phone / Mobile</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="contact-page__field">
                    <label>Preferred Method of Contact</label>
                    <div className="contact-page__radio-group">
                      {['Email', 'WhatsApp', 'Phone'].map((method) => (
                        <label key={method} className="contact-page__radio">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={formData.contactMethod === method}
                            onChange={handleChange}
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div> */}
                  <div className="contact-page__field">
                    <label htmlFor="service">Services</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      {serviceRoutes.map((s) => (
                        <option key={s.title} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="contact-page__field">
                    <label htmlFor="comments">Comments</label>
                    <textarea
                      id="comments"
                      name="comments"
                      rows={4}
                      value={formData.comments}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button type="submit" className="btn btn--primary contact-page__submit">
                    Submit Form
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
