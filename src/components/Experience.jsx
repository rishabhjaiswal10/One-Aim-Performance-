import React from "react";
import experience1 from "../assets/img/experience1.jpg";
import experience2 from "../assets/img/experience2.jpg";

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">
        With Our Experience <br /> We Will Serve You
      </h2>

      <div className="experience__container container grid">
        {/* Numbers / Stats */}
        <div className="experience__content grid">
          <div className="experience__data">
            <h2 className="experience__number">20</h2>
            <span className="experience__description">
              Year <br /> Experience
            </span>
          </div>

          <div className="experience__data">
            <h2 className="experience__number">75</h2>
            <span className="experience__description">
              Complete <br /> Tours
            </span>
          </div>

          <div className="experience__data">
            <h2 className="experience__number">650+</h2>
            <span className="experience__description">
              Tourist <br /> Destination
            </span>
          </div>
        </div>

        {/* Images */}
        <div className="experience__img grid">
          <div className="experience__overlay">
            <img
              src={experience1}
              alt="Tour Experience 1"
              className="experience__img-one"
            />
          </div>

          <div className="experience__overlay">
            <img
              src={experience2}
              alt="Tour Experience 2"
              className="experience__img-two"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
