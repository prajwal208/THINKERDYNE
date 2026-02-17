import { useState } from "react";
import PageHero from "../components/PageHero";
import { images } from "../constants/images";
import "./ContactPage.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
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
        subtitle="Delivering reliable solutions backed by engineering expertise."
        backgroundImage={images.contactBg}
      />
      <div className="contact-page">
        {/* <section className="contact-page__intro section section--alt">
          <div className="container contact-page__intro-inner">
            <p className="contact-page__lead contact-page__lead--tagline">
              Delivering reliable solutions backed by engineering expertise.
            </p>
          </div>
        </section> */}

        <section className="contact-page__main section">
          <div className="container contact-page__main-inner">
            <div className="contact-page__info">
              <h3 className="contact-page__info-heading">Contact Address</h3>
              <p className="contact-page__address">
                THINKERDYNE TECHNOLOGIES PRIVATE LIMITED
                <br />
                No 59, 60, NL Arcade, Second Main, Vinayaka Layout, Shanthipura,
                Electronic City, Phase II, Bengaluru, Karnataka, India – 560100.
              </p>

              <h3 className="contact-page__info-heading">Let's Talk</h3>
              <p className="contact-page__phones">
                <a href="tel:+919677510113">+91 9000000000</a>
              </p>

              <h3 className="contact-page__info-heading">Email Us</h3>
              <p className="contact-page__emails">
                <a href="mailto:info@thinkerdyne.com">info@thinkerdyne.com</a>{" "}
                <br />
                <a href="mailto:info@thinkerdyne.com">sales@thinkerdyne.com</a>
              </p>
              <p className="contact-page__emails"></p>

              <h3 className="contact-page__info-heading">Working Hours</h3>
              <p className="contact-page__hours">
                Monday to Saturday
                <br />
                09:30 am to 06:30 pm
              </p>
            </div>

            <div className="contact-page__form-wrap">
              <h2 className="contact-page__form-title">
                Discuss Your Project Requirements
              </h2>
              <p className="contact-page__form-subtitle">
                We operate in an industry built on trust. This can only be
                achieved through communication and experience.
              </p>
              <p className="contact-page__form-cta">Request a Call Back!</p>

              {submitted ? (
                <div className="contact-page__feedback contact-page__feedback--success">
                  Thank you! We have received your request and will get back to
                  you soon.
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
                  <div className="contact-page__row">
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
                  </div>
                  <div className="contact-page__field">
                    <label htmlFor="comments">Comments</label>
                    <textarea
                      id="comments"
                      name="comments"
                      rows={3}
                      value={formData.comments}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <div className="contact-page__response-note-wrap">
                    <p className="contact-page__response-note">
                      We typically respond within 12 hours. Our experienced engineering team brings decades of combined expertise in hardware design, PCB development, and system integration.
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn--primary contact-page__submit"
                  >
                    Submit Form
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="contact-page__map-section section section--alt">
          <div className="contact-page__map-wrap contact-page__map-wrap--full">
            <iframe
              title="Thinkerdyne Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9316968373914!2d77.68266419999999!3d12.847688099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d000dfa568b%3A0xfb0e30d0878a2ada!2sThinkerdyne%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1771261621792!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9316968373914!2d77.68266419999999!3d12.847688099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d000dfa568b%3A0xfb0e30d0878a2ada!2sThinkerdyne%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1771261621792!5m2!1sen!2sin"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
        </section>
      </div>
    </>
  );
}
