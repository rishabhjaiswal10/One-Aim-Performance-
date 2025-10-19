import React from "react";

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        {/* ===== Footer Main Content ===== */}
        <div className="footer__content grid">
          {/* Travel Logo + Description */}
          <div className="footer__data">
            <h3 className="footer__title">Travel</h3>
            <p className="footer__description">
              Travel — you choose the destination, <br /> we offer you the experience.
            </p>
            <div>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer__social">
                <i className="ri-facebook-box-fill"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="footer__social">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="footer__social">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="footer__social">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>

          {/* About Links */}
          <div className="footer__data">
            <h3 className="footer__subtitle">About</h3>
            <ul>
              <li className="footer__item"><a href="#" className="footer__link">About Us</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Features</a></li>
              <li className="footer__item"><a href="#" className="footer__link">News & Blog</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer__data">
            <h3 className="footer__subtitle">Company</h3>
            <ul>
              <li className="footer__item"><a href="#" className="footer__link">Team</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Plan & Pricing</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Become a member</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer__data">
            <h3 className="footer__subtitle">Support</h3>
            <ul>
              <li className="footer__item"><a href="#" className="footer__link">FAQs</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Support Center</a></li>
              <li className="footer__item"><a href="#" className="footer__link">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* ===== Footer Bottom ===== */}
        <div className="footer__rights">
          <p className="footer__copy">© 2025 Travel. All rights reserved.</p>

          <div className="footer__terms">
            <a href="#" className="footer__terms-link">Terms & Agreements</a>
            <a href="#" className="footer__terms-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
