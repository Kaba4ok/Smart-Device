'use strict';

(function () {

  let callbackBtn = document.querySelector('.page-header__callback');
  let popup = document.querySelector('.popup');
  let popupCloseBtn = popup.querySelector('.popup__btn-close');
  let popupForm = popup.querySelector('.popup__form');
  let inputName = popup.querySelector('.popup__input--name');
  let inputPhone = popup.querySelector('.popup__input--phone');
  let inputTextarea = popup.querySelector('.popup__input--textarea');
  let popupCheckbox = popup.querySelector('.popup__checkbox');

  const ESC_KEYCODE = 27;

  let recordsStorage = function () {
    let isStorageSupport = true;
    let storage = '';

    try {
      storage = localStorage.getItem('test');
    } catch (err) {
      isStorageSupport = false;
    }

    if (isStorageSupport) {
      localStorage.setItem('popupName', inputName.value);
      localStorage.setItem('popupPhone', inputPhone.value);
      localStorage.setItem('popupMessage', inputTextarea.value);
    }
  }

  let preventScrolling = function () {
    let gap = window.innerWidth - document.body.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = gap + 'px';
  }

  let allowScrolling = function () {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  let openPopup = function () {
    popup.classList.add('popup--show');
    inputName.focus();
    popupCloseBtn.addEventListener('click', onPopupCloseClick);
    popup.addEventListener('click', onPopupClick);
    popupForm.addEventListener('submit', onPopupSubmit);
    document.addEventListener('keydown', onPopupEscPress);
    preventScrolling();
  }

  let closePopup = function () {
    popup.classList.remove('popup--show');
    popupCloseBtn.removeEventListener('click', onPopupCloseClick);
    popup.removeEventListener('click', onPopupClick);
    popupForm.removeEventListener('submit', onPopupSubmit);
    document.removeEventListener('keydown', onPopupEscPress);
    allowScrolling();
  }

  let onCallbackBtnClick = function (evt) {
    if (popup.classList.contains('popup--no-js')) {
      evt.preventDefault();
      openPopup();
    }
  }

  let onPopupCloseClick = function (evt) {
    evt.preventDefault();
    closePopup();
  }

  let onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  }

  let onPopupClick = function (evt) {
    if (evt.target === popup) {
      closePopup();
    }
  }

  let onPopupSubmit = function (evt) {
    if (!inputName.value || !inputPhone.value || !inputTextarea.value || !popupCheckbox.checked) {
      evt.preventDefault();
      console.log('error');
    } else {
      recordsStorage();
    }
  }

  callbackBtn.addEventListener('click', onCallbackBtnClick);

})();
