import React from "react";
import home1 from "../assets/img/home1.jpg";
import home2 from "../assets/img/home2.jpg";

export default function Home() {
  return (
    <section className="home" id="home">
      {/* Background Image */}
      <img src={home1} alt="Beach" className="home__img" />

      <div className="home__container container grid">
        {/* Left side text */}
        <div className="home__data">
          <span className="home__data-subtitle">Discover your place</span>
          <h1 className="home__data-title">
            Explore The <br /> Best <b>Beautiful <br /> Beaches</b>
          </h1>
          <a href="#" className="button">Explore</a>
        </div>

        {/* Social media links */}
        <div className="home__social">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="home__social-link">
            <i className="ri-facebook-box-fill"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="home__social-link">
            <i className="ri-instagram-fill"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="home__social-link">
            <i className="ri-twitter-fill"></i>
          </a>
        </div>

        {/* Home Info section */}
        <div className="home__info">
          <div>
            <span className="home__info-title">5 best places to visit</span>
            <a href="#" className="button button--flex button--link home__info-button">
              More <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          <div className="home__info-overlay">
            <img src={home2} alt="Beach Info" className="home__info-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
