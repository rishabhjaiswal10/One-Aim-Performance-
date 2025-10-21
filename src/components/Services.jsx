import React from "react";

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="services__container container">
        <h2 className="section__title services__title">
          Our Services & Facilities
        </h2>
        <p className="services__subtitle">
          We provide comprehensive support to help athletes reach their full potential through our state-of-the-art facilities and expert services.
        </p>

        <div className="services__content">
          <div className="services__strategies">
            <h3 className="services__strategies-title">Our Strategies</h3>
            <div className="services__strategies-grid">
              <div className="services__strategy-item">
                <i className="ri-focus-3-line services__strategy-icon"></i>
                <h4 className="services__strategy-title">Holistic Approach</h4>
                <p className="services__strategy-description">
                  Comprehensive training that addresses all aspects of athletic performance
                </p>
              </div>

              <div className="services__strategy-item">
                <i className="ri-trophy-line services__strategy-icon"></i>
                <h4 className="services__strategy-title">Performance Enhancement</h4>
                <p className="services__strategy-description">
                  Science-based methods to maximize athletic potential and competitive edge
                </p>
              </div>

              <div className="services__strategy-item">
                <i className="ri-shield-check-line services__strategy-icon"></i>
                <h4 className="services__strategy-title">Injury Reduction</h4>
                <p className="services__strategy-description">
                  Preventive strategies to minimize injury risk and maintain peak performance
                </p>
              </div>

              <div className="services__strategy-item">
                <i className="ri-heart-pulse-line services__strategy-icon"></i>
                <h4 className="services__strategy-title">Recovery Strategies</h4>
                <p className="services__strategy-description">
                  Advanced recovery techniques to optimize training adaptation and performance
                </p>
              </div>
            </div>
          </div>

          <div className="services__facilities">
            <h3 className="services__facilities-title">Our Facilities</h3>
            <div className="services__facilities-grid">
              <div className="services__facility-item">
                <i className="ri-dumbbell-line services__facility-icon"></i>
                <h4 className="services__facility-title">Strength And Conditioning</h4>
                <p className="services__facility-description">
                  State-of-the-art equipment for comprehensive strength and conditioning training
                </p>
              </div>

              <div className="services__facility-item">
                <i className="ri-medicine-bottle-line services__facility-icon"></i>
                <h4 className="services__facility-title">Sports Physiotherapy</h4>
                <p className="services__facility-description">
                  Professional physiotherapy services for injury treatment and prevention
                </p>
              </div>

              <div className="services__facility-item">
                <i className="ri-hand-heart-line services__facility-icon"></i>
                <h4 className="services__facility-title">Sports Massage Therapy</h4>
                <p className="services__facility-description">
                  Specialized massage therapy to enhance recovery and performance
                </p>
              </div>

              <div className="services__facility-item">
                <i className="ri-restaurant-line services__facility-icon"></i>
                <h4 className="services__facility-title">Sports Nutrition</h4>
                <p className="services__facility-description">
                  Expert nutritional guidance to fuel performance and optimize recovery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

