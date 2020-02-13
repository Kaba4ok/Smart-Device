'use strict';

(function () {

  let popupPhone = document.querySelector('.popup__input--phone');
  let feedbackPhone = document.querySelector('.feedback-form__input--phone');

  let setMask = function (element) {
    let maskOptions = {
      mask: '+{7(}000)00-00-000'
    };

    let mask = IMask(element, maskOptions);

    element.value = '+7(';

    element.selectionStart = element.value.length;

    mask.updateValue();
  }

  popupPhone.addEventListener('focus', function () {
    setMask(popupPhone);
  });

  feedbackPhone.addEventListener('focus', function () {
    setMask(feedbackPhone);
  });
})();
