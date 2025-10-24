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

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    function scrollActive() {
      const scrollY = window.pageYOffset;
      const sections = document.querySelectorAll('section[id]');

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLinks = document.querySelectorAll('.nav__link');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          // Remove active-link from all links first
          navLinks.forEach(link => link.classList.remove('active-link'));
          // Add active-link to current section's link
          const currentLink = document.querySelector('.nav__link[href*="' + sectionId + '"]');
          currentLink?.classList.add('active-link');
        }
      });
    }
    
    // Call once on load to set initial active state
    scrollActive();
    window.addEventListener('scroll', scrollActive);

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


  }, []);
}