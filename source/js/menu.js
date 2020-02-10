'use strict';

(function () {
  let footer = document.querySelector('.page-footer');
  let toggleNav = footer.querySelector('.footer-sait-nav__menu-btn');
  let toggleContacts = footer.querySelector('.footer-contacts__menu-btn');
  let footerNav = footer.querySelector('.footer-sait-nav__columns');
  let footerContacts = footer.querySelector('.footer-contacts__list');

  let footerNavClose = function () {
    toggleNav.classList.add('menu-btn--close');
    toggleNav.classList.remove('menu-btn--open');
    footerNav.classList.add('menu-close');
  };

  let footerNavOpen = function () {
    toggleNav.classList.remove('menu-btn--close');
    toggleNav.classList.add('menu-btn--open');
    footerNav.classList.remove('menu-close');
  };

  let footerContactsClose = function () {
    toggleContacts.classList.add('menu-btn--close');
    toggleContacts.classList.remove('menu-btn--open');
    footerContacts.classList.add('menu-close');
  };

  let footerContactsOpen = function () {
    toggleContacts.classList.remove('menu-btn--close');
    toggleContacts.classList.add('menu-btn--open');
    footerContacts.classList.remove('menu-close');
  };

  let onToggleNavClick = function () {
    if (footerNav.classList.contains('menu-close')) {
      footerNavOpen();
      footerContactsClose();
    } else if (!(footerNav.classList.contains('menu-close'))) {
      footerNavClose();
    } else {
      footerNavClose();
      footerContactsOpen();
    }
  };

  let onToggleContactsClick = function () {
    if (footerContacts.classList.contains('menu-close')) {
      footerContactsOpen();
      footerNavClose();
    } else if (!(footerContacts.classList.contains('menu-close'))) {
      footerContactsClose();
    } else {
      footerContactsClose();
      footerNavOpen();
    }
  };

  toggleContacts.addEventListener('click', onToggleContactsClick);

  toggleNav.addEventListener('click', onToggleNavClick);
})();
