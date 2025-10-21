import React from "react";

export default function Programs() {
  return (
    <section className="programs section" id="programs">
      <div className="programs__container container">
        <h2 className="section__title programs__title">
          Our Training Programs
        </h2>
        <p className="programs__subtitle">
          Experience the transformative power of personalized, science-backed training and rehabilitation that empowers you to surpass your limits and achieve your goals.
        </p>

        <div className="programs__grid grid">
          <div className="programs__card">
            <div className="programs__card-number">01</div>
            <h3 className="programs__card-title">Athlete Fitness</h3>
            <p className="programs__card-description">
              Comprehensive fitness programs designed specifically for athletes to enhance performance and reduce injury risk.
            </p>
            <a href="#contact" className="programs__card-button">Learn More</a>
          </div>

          <div className="programs__card">
            <div className="programs__card-number">02</div>
            <h3 className="programs__card-title">Strength Training</h3>
            <p className="programs__card-description">
              Specialized strength training programs tailored to individual sport requirements and performance goals.
            </p>
            <a href="#contact" className="programs__card-button">Learn More</a>
          </div>

          <div className="programs__card">
            <div className="programs__card-number">03</div>
            <h3 className="programs__card-title">Conditioning</h3>
            <p className="programs__card-description">
              Sport-specific conditioning programs to improve endurance, speed, and overall athletic performance.
            </p>
            <a href="#contact" className="programs__card-button">Learn More</a>
          </div>

          <div className="programs__card">
            <div className="programs__card-number">04</div>
            <h3 className="programs__card-title">Injury Screening</h3>
            <p className="programs__card-description">
              Comprehensive movement assessments to identify potential injury risks and develop preventive strategies.
            </p>
            <a href="#contact" className="programs__card-button">Learn More</a>
          </div>

          <div className="programs__card">
            <div className="programs__card-number">05</div>
            <h3 className="programs__card-title">Post Surgery Rehabilitation</h3>
            <p className="programs__card-description">
              Specialized rehabilitation programs to help athletes recover and return to peak performance after surgery.
            </p>
            <a href="#contact" className="programs__card-button">Learn More</a>
          </div>

          <div className="programs__card">
            <div className="programs__card-number">06</div>
            <h3 className="programs__card-title">Injury Management</h3>
            <p className="programs__card-description">
              Comprehensive injury management programs to minimize downtime and optimize recovery.
            </p>
            <a href="#contact" className="programs__card-button">Learn More</a>
          </div>

          <div className="programs__card">
            <div className="programs__card-number">07</div>
            <h3 className="programs__card-title">Return-to-Play Program</h3>
            <p className="programs__card-description">
              Structured programs to safely return athletes to competition after injury or extended breaks.
            </p>
            <a href="#contact" className="programs__card-button">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

