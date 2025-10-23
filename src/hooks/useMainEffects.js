import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function useMainEffects() {
  useEffect(() => {
    /*==================== SHOW MENU ====================*/
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
      navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
    }
    if (navClose) {
      navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
    }

    const navLink = document.querySelectorAll('.nav__link');
    function linkAction() {
      navMenu.classList.remove('show-menu');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));

    /*==================== CHANGE BACKGROUND HEADER ====================*/
    function scrollHeader() {
      const header = document.getElementById('header');
      if (window.scrollY >= 100)
        header.classList.add('scroll-header');
      else
        header.classList.remove('scroll-header');
    }
    window.addEventListener('scroll', scrollHeader);

    /*==================== SCROLL UP ====================*/
    function scrollUp() {
      const scrollUp = document.getElementById('scroll-up');
      if (window.scrollY >= 200)
        scrollUp.classList.add('show-scroll');
      else
        scrollUp.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollUp);

    /*==================== SCROLL REVEAL ====================*/
    const sr = ScrollReveal({
      distance: '60px',
      duration: 2000,
    });

    sr.reveal(`.home__data, .home__social-link, .home__info,
              .programs__card, .services__strategy-item, .services__facility-item,
              .contact__info, .contact__form-container, .footer__data, .footer__rights`, {
      origin: 'top',
      interval: 100,
    });

    sr.reveal(`.about__data, .about__vision-mission`, {
      origin: 'left',
    });

    sr.reveal(`.about__img-overlay, .contact__founder-content`, {
      origin: 'right',
      interval: 100,
    });

    /*==================== DARK LIGHT THEME ====================*/
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'ri-sun-line';
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
    }

    themeButton?.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    });

  }, []);
}
