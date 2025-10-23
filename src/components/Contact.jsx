import React, { useState } from "react";
import founderImage from "../assets/img/founder.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container container">
        <h2 className="section__title contact__title">
          Contact Us
        </h2>
        <p className="contact__subtitle">
          Get in touch with us to start your journey towards peak athletic performance.
        </p>

        <div className="contact__content grid">
          <div className="contact__info">
            <h3 className="contact__info-title">Get In Touch</h3>
            <p className="contact__info-description">
              Ready to unlock your athletic potential? Contact us today to learn more about our programs and how we can help you achieve your goals.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <i className="ri-phone-line contact__detail-icon"></i>
                <div className="contact__detail-content">
                  <h4 className="contact__detail-title">Phone</h4>
                  <p className="contact__detail-text">+91 9890860102</p>
                </div>
              </div>

              <div className="contact__detail">
                <i className="ri-mail-line contact__detail-icon"></i>
                <div className="contact__detail-content">
                  <h4 className="contact__detail-title">Email</h4>
                  <p className="contact__detail-text">oneaimperformance@gmail.com</p>
                </div>
              </div>

              <div className="contact__detail">
                <i className="ri-map-pin-line contact__detail-icon"></i>
                <div className="contact__detail-content">
                  <h4 className="contact__detail-title">Location</h4>
                  <p className="contact__detail-text">Mumbai, India</p>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <h4 className="contact__social-title">Follow Us</h4>
              <div className="contact__social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="contact__social-link">
                  <i className="ri-facebook-box-fill"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="contact__social-link">
                  <i className="ri-instagram-fill"></i>
                </a>
                <a href="https://wa.me/919890860102" target="_blank" rel="noreferrer" className="contact__social-link">
                  <i className="ri-whatsapp-fill"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__form-container">
            <form className="contact__form" onSubmit={handleSubmit}>
              <h3 className="contact__form-title">Send us a Message</h3>
              
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact__form-input"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact__form-input"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="button contact__form-button">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="contact__founder">
          <div className="contact__founder-content">
            <div className="contact__founder-image">
              <img src={founderImage} alt="Sumeet Urmila Krishna Jaiswal" className="contact__founder-img" />
            </div>
            <div className="contact__founder-info">
              <h3 className="contact__founder-name">Sumeet Urmila Krishna Jaiswal</h3>
              <p className="contact__founder-title">Founder and Head Coach</p>
              <p className="contact__founder-message">
                "Being an athlete and having studied the subject with coaching experience of 6+ years, I have understood the requirement and importance of a team that is needed by every athlete to level up their sport. My goal is to build this community (One Aim performance) to reach out to as many athletes as possible who lack professional guidance."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

