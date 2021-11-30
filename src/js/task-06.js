const refs = {
  input: document.querySelector("#validation-input"),
};
refs.input.addEventListener("blur", onCheckInputLength);

function onCheckInputLength(event) {
  if (event.currentTarget.value.length == refs.input.dataset.length) {
    refs.input.classList.add("valid");
  } else {
    refs.input.classList.add("invalid");
  }
}
