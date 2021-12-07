const inputName = document.querySelector('#name-input')
let output = document.querySelector('#name-output')
console.log(inputName)
console.log(output)
inputName.addEventListener('input', (event) => {
    output.textContent = inputName.value === '' ? "Anonymus" : event.currentTarget.value;
})
