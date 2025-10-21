import React, { useState } from "react";
import logo from "../assets/img/OAP-logo-removebg-preview.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        {/* Logo */}
        <a href="#" className="nav__logo">
          <img src={logo} alt="One Aim Performance" className="nav__logo-img" />
        </a>

        {/* Navigation Menu */}
        <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">Home</a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">About Us</a>
            </li>
            <li className="nav__item">
              <a href="#programs" className="nav__link">Programs</a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">Services</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">Contact Us</a>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <div className="nav__dark">
            <span className="change-theme-name">Dark mode</span>
            <i className="ri-moon-line change-theme" id="theme-button"></i>
          </div>

          {/* Close Icon for Mobile */}
          <i
            className="ri-close-line nav__close"
            id="nav-close"
            onClick={() => setMenuOpen(false)}
          ></i>
        </div>

        {/* Hamburger Menu Icon */}
        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => setMenuOpen(true)}
        >
          <i className="ri-function-line"></i>
        </div>
      </nav>
    </header>
  );
}
