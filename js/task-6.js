const validInputEl = document.querySelector('#validation-input');

validInputEl.addEventListener('blur', function () {
  const dataLength = validInputEl.getAttribute('data-length');
  const valueLength = validInputEl.value.length;

  if (dataLength == valueLength) {
    validInputEl.classList.add('valid');
    validInputEl.classList.remove('invalid');
  } else {
    validInputEl.classList.add('invalid');
    validInputEl.classList.remove('valid');
  }
});
