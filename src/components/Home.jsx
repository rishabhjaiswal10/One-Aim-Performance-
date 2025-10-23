import React from "react";
import home1 from "../assets/img/home1.jpg";

export default function Home() {
  return (
    <section className="home" id="home">
      {/* Background Image */}
      <img src={home1} alt="Athlete Training" className="home__img" />

      <div className="home__container container grid">
        {/* Left side text */}
        <div className="home__data">
          <span className="home__data-subtitle">Unlock Your Athletic Potential</span>
          <h1 className="home__data-title">
            One Aim <br /> <b>Performance</b> <br /> Excellence
          </h1>
          <p className="home__data-description">
            We are a sports science firm that focuses on athletes at the grassroots level to enhance performance through evidence-based, athlete-centric programs.
          </p>
          <a href="#programs" className="button">Explore Programs</a>
        </div>

        {/* Social media links */}
        <div className="home__social">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="home__social-link">
            <i className="ri-facebook-box-fill"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="home__social-link">
            <i className="ri-instagram-fill"></i>
          </a>
          <a href="https://wa.me/919890860102" target="_blank" rel="noreferrer" className="home__social-link">
            <i className="ri-whatsapp-fill"></i>
          </a>
        </div>

        {/* Home Info section */}
        <div className="home__info">
          <div>
            <span className="home__info-title">Our Services</span>
            <a href="#services" className="button button--flex button--link home__info-button">
              Learn More <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          <div className="home__info-overlay">
            <div className="home__info-stats">
              <div className="home__info-stat">
                <span className="home__info-number">6+</span>
                <span className="home__info-label">Years Experience</span>
              </div>
              <div className="home__info-stat">
                <span className="home__info-number">100+</span>
                <span className="home__info-label">Athletes Trained</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
