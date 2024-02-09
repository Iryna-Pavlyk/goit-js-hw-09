'use strict';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

function inputsPageReboot() {
  const localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
  if (localStorageValue) {
    emailInput.value = localStorageValue.email;
    textarea.value = localStorageValue.message;
  }
}
inputsPageReboot();

form.addEventListener('input', () => {
  const inputsValues = {
    email: emailInput.value.trim(),
    message: textarea.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(inputsValues));
});

form.addEventListener('submit', event => {
  if (emailInput.value === '' || textarea.value === '') {
    return alert('All form fields must be filled in');
  }
  event.preventDefault();
  console.log(`Email: ${emailInput.value.trim()}`);
  console.log(`Message: ${textarea.value.trim()}`);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
