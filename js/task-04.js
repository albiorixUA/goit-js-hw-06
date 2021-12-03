let counterValue = "0";

const refs = {
  counterSpan: document.querySelector("#value"),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};
const updateCounter = () => (refs.counterSpan.textContent = counterValue);

refs.decrementBtn.addEventListener("click", decrementCounter);
refs.incrementBtn.addEventListener("click", incrementCounter);

function decrementCounter() {
  counterValue -= 1;
  updateCounter();
}
function incrementCounter() {
  counterValue += 1;
  updateCounter();
}
