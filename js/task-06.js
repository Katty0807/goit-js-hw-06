const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (inputEl.value.length >= 6) {
        inputEl.classList.add('valid');
    }
    inputEl.classList.add('invalid');
}