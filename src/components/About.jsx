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
            More Information <br /> About The Best Beaches
          </h2>

          <p className="about__description">
            You can find the most beautiful and pleasant places at the best
            prices with special discounts. You choose the place — we will guide
            you all the way. Get your place now!
          </p>

          <a href="#" className="button">
            Reserve a place
          </a>
        </div>

        {/* About images */}
        <div className="about__img">
          <div className="about__img-overlay">
            <img src={about1} alt="About one" className="about__img-one" />
          </div>

          <div className="about__img-overlay">
            <img src={about2} alt="About two" className="about__img-two" />
          </div>
        </div>
      </div>
    </section>
  );
}
