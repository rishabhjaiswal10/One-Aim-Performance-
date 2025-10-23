import React from "react";

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        {/* ===== Footer Main Content ===== */}
        <div className="footer__content grid">
          {/* One Aim Performance Logo + Description */}
          <div className="footer__data">
            <h3 className="footer__title">One Aim Performance</h3>
            <p className="footer__description">
              Unlock your athletic potential through <br /> evidence-based, athlete-centric programs.
            </p>
            <div>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer__social">
                <i className="ri-facebook-box-fill"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="footer__social">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="https://wa.me/919890860102" target="_blank" rel="noreferrer" className="footer__social">
                <i className="ri-whatsapp-fill"></i>
              </a>
            </div>
          </div>

          {/* About Links */}
          <div className="footer__data">
            <h3 className="footer__subtitle">About</h3>
            <ul>
              <li className="footer__item"><a href="#about" className="footer__link">About Us</a></li>
              <li className="footer__item"><a href="#programs" className="footer__link">Programs</a></li>
              <li className="footer__item"><a href="#services" className="footer__link">Services</a></li>
            </ul>
          </div>

          {/* Programs Links */}
          <div className="footer__data">
            <h3 className="footer__subtitle">Programs</h3>
            <ul>
              <li className="footer__item"><a href="#programs" className="footer__link">Athlete Fitness</a></li>
              <li className="footer__item"><a href="#programs" className="footer__link">Strength Training</a></li>
              <li className="footer__item"><a href="#programs" className="footer__link">Rehabilitation</a></li>
            </ul>
          </div>

          {/* Contact Links */}
          <div className="footer__data">
            <h3 className="footer__subtitle">Contact</h3>
            <ul>
              <li className="footer__item"><a href="#contact" className="footer__link">Contact Us</a></li>
              <li className="footer__item"><a href="tel:+919890860102" className="footer__link">+91 9890860102</a></li>
              <li className="footer__item"><a href="mailto:oneaimperformance@gmail.com" className="footer__link">Email Us</a></li>
            </ul>
          </div>
        </div>

        {/* ===== Footer Bottom ===== */}
        <div className="footer__rights">
          <p className="footer__copy">© 2025 One Aim Performance. All rights reserved.</p>

          <div className="footer__terms">
            <a href="#" className="footer__terms-link">Terms & Conditions</a>
            <a href="#" className="footer__terms-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
