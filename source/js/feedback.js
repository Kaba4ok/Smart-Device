'use strict';

(function () {

  let form = document.querySelector('.feedback-form');
  let inputName = form.querySelector('.feedback-form__input--name');
  let inputPhone = form.querySelector('.feedback-form__input--phone');
  let inputTextarea = form.querySelector('.feedback-form__input--textarea');
  let permission = form.querySelector('.feedback-form__checkbox');

  let recordsStorage = function () {
    let isStorageSupport = true;
    let storage = '';

    try {
      storage = localStorage.getItem('test');
    } catch (err) {
      isStorageSupport = false;
    }

    if (isStorageSupport) {
      localStorage.setItem('feedbackName', inputName.value);
      localStorage.setItem('feedbackPhone', inputPhone.value);
      localStorage.setItem('feedbackMessage', inputTextarea.value);
    }
  }

  let onFormSubmit = function (evt) {
    if (!inputName.value || !inputPhone.value || !inputTextarea.value || !permission.checked) {
      evt.preventDefault();
      console.log('error');
    } else {
      recordsStorage();
    }
  }

  form.addEventListener('submit', onFormSubmit);

})();
