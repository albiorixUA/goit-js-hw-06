function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
};

refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = refs.input.value;
  for (let i = 1; i <= amount; i += 1) {
    refs.divBoxes.insertAdjacentHTML(
      "beforeend",
      `<div style="width: ${i * 10 + 20 + "px"}; height: ${
        i * 10 + 20 + "px"
      }; background-color: ${getRandomHexColor()};"></div>`
    );
  }
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
  refs.input.value = "";
}
