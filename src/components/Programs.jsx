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
            <h3 className="programs__card-title">Athlete Performance</h3>
            <p className="programs__card-description">
              At OAP the program is driven towards Performance Enhancement and Injury Reduction.
            </p>
            <ul className="programs__card-features">
              <li>Assessment & Profiling</li>
              <li>Periodization & Programming</li>
              <li>Power, Speed & Strength Development</li>
              <li>Injury Reduction strategies</li>
              <li>Technology & Data Driven approach</li>
              <li>Nutritional support</li>
              <li>Sports Specific Training</li>
            </ul>
            <a href="#contact" className="programs__card-button">Learn More</a>
          </div>

          <div className="programs__card">
            <div className="programs__card-number">02</div>
            <h3 className="programs__card-title">Youth Athlete Development Program</h3>
            <p className="programs__card-description">
              Comprehensive long-term development programs designed to nurture young athletes and build a strong foundation for future success.
            </p>
            <ul className="programs__card-features">
              <li>Long Term Athlete Development Program (LTAD)</li>
              <li>Peak Height Velocity Monitoring</li>
              <li>Parent & Coach Education</li>
              <li>Injury Reduction program</li>
              <li>Power, Speed, & Strength Development</li>
              <li>Periodized training programs</li>
            </ul>
            <a href="#contact" className="programs__card-button">Learn More</a>
          </div>

          <div className="programs__card">
            <div className="programs__card-number">03</div>
            <h3 className="programs__card-title">Physiotherapy & Rehabilitation</h3>
            <p className="programs__card-description">
              Specialized rehabilitation programs to help athletes recover from injuries and return to peak performance.
            </p>
            <ul className="programs__card-features">
              <li>Post surgery Rehabilitation</li>
              <li>Return-to-sport training pathway</li>
              <li>Rehabilitation program</li>
              <li>Pain management</li>
            </ul>
            <a href="#contact" className="programs__card-button">Learn More</a>
          </div>

          <div className="programs__card">
            <div className="programs__card-number">04</div>
            <h3 className="programs__card-title">Recovery</h3>
            <p className="programs__card-description">
              Comprehensive recovery support to optimize performance and maintain peak physical condition.
            </p>
            <ul className="programs__card-features">
              <li>Sports Massage Therapy</li>
              <li>Nutritional Support</li>
              <li>Cognitive & Psychological support</li>
              <li>Load monitoring</li>
              <li>Athlete Education</li>
            </ul>
            <a href="#contact" className="programs__card-button">Learn More</a>
          </div>

          <div className="programs__card">
            <div className="programs__card-number">05</div>
            <h3 className="programs__card-title">Remote Program</h3>
            <p className="programs__card-description">
              Don't worry if you cannot train in person with us. We have got your back.
            </p>
            <ul className="programs__card-features">
              <li>Remote program recommendations</li>
            </ul>
            <a href="#contact" className="programs__card-button">Learn More</a>
          </div>

          <div className="programs__card">
            <div className="programs__card-number">06</div>
            <h3 className="programs__card-title">Assessment & Profiling</h3>
            <p className="programs__card-description">
              Technology-driven assessments to understand your strengths, weaknesses, and create personalized training programs.
            </p>
            <ul className="programs__card-features">
              <li>Technology driven Assessment & Profiling</li>
              <li>Know your strengths & weaknesses</li>
              <li>Get your program to train by yourself</li>
            </ul>
            <a href="#contact" className="programs__card-button">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

