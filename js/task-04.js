let counterValue = 0;
let valueEl = document.querySelector('#value');

const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');

buttonIncrement.addEventListener("click", (event) => {
    counterValue += 1;
    valueEl = counterValue;
    console.log(valueEl);
})

buttonDecrement.addEventListener('click', (event) => {
   counterValue -= 1;
    valueEl = counterValue;
    console.log(valueEl); 
})
