const counterEl = document.querySelector("#counter");
// console.log(counterEl);
const counterValue = counterEl.querySelector("#value");
// console.log(counterValue);
const decrementBtn = counterEl.querySelector('[data-action="decrement"]');
// console.log(decrementBtn);
const incrementBtn = counterEl.querySelector('[data-action="increment"]');
// console.log(incrementBtn);

let value = 0;
function decreaseValue() {
  value -= 1;
  counterValue.textContent = value;
}
function increaseValue() {
  value += 1;
  counterValue.textContent = value;
}

decrementBtn.addEventListener("click", decreaseValue);
incrementBtn.addEventListener("click", increaseValue);
