import React from "react";
import about1 from "../assets/img/about1.jpg";
import about2 from "../assets/img/about2.jpg";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        {/* About text */}
        <div className="about__data">
          <h2 className="section__title about__title">
            About <br /> One Aim Performance
          </h2>

          <p className="about__description">
            We are a sports science firm that primarily focuses on athletes at the grassroots level to enhance performance. The designed programs are evidence-based and athlete-centric, which helps athletes level up their performance in their respective sport while reducing the chance of injuries.
          </p>

          <div className="about__vision-mission">
            <div className="about__vision">
              <h3 className="about__subtitle">Vision</h3>
              <ul className="about__list">
                <li>To Guide athletes at the grassroot level</li>
                <li>To unlock their true athletic potential through scientific and result-oriented approach</li>
              </ul>
            </div>

            <div className="about__mission">
              <h3 className="about__subtitle">Mission</h3>
              <ul className="about__list">
                <li>Provide quality fitness experiences for everyone</li>
                <li>Customize programs to meet each member's needs</li>
                <li>Cultivate a supportive and uplifting fitness community</li>
              </ul>
            </div>
          </div>

          <a href="#contact" className="button">
            Get Started
          </a>
        </div>

        {/* About images */}
        <div className="about__img">
          <div className="about__img-overlay">
            <img src={about1} alt="Athlete Training" className="about__img-one" />
          </div>

          <div className="about__img-overlay">
            <img src={about2} alt="Performance Enhancement" className="about__img-two" />
          </div>
        </div>
      </div>
    </section>
  );
}
