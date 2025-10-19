import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Swiper from "swiper/bundle";

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

    /*==================== SWIPER DISCOVER ====================*/
    new Swiper(".discover__container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 32,
      coverflowEffect: { rotate: 0 },
    });

    /*==================== VIDEO ====================*/
    const videoFile = document.getElementById('video-file');
    const videoButton = document.getElementById('video-button');
    const videoIcon = document.getElementById('video-icon');

    if (videoButton && videoFile) {
      const playPause = () => {
        if (videoFile.paused) {
          videoFile.play();
          videoIcon.classList.add('ri-pause-line');
          videoIcon.classList.remove('ri-play-line');
        } else {
          videoFile.pause();
          videoIcon.classList.remove('ri-pause-line');
          videoIcon.classList.add('ri-play-line');
        }
      };
      videoButton.addEventListener('click', playPause);

      videoFile.addEventListener('ended', () => {
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');
      });
    }

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
      duration: 2800,
    });

    sr.reveal(`.home__data, .home__social-link, .home__info,
              .discover__container, .experience__data, .experience__overlay,
              .place__card, .sponsor__content, .footer__data, .footer__rights`, {
      origin: 'top',
      interval: 100,
    });

    sr.reveal(`.about__data, .video__description, .subscribe__description`, {
      origin: 'left',
    });

    sr.reveal(`.about__img-overlay, .video__content, .subscribe__form`, {
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
