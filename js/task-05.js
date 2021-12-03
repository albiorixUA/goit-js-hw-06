const refs = {
  inputForm: document.querySelector("#name-input"),
  spanText: document.querySelector("#name-output"),
};
refs.inputForm.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.spanText.textContent = "Anonymous";
  if (event.currentTarget.value) {
    refs.spanText.textContent = event.currentTarget.value;
  }
}
