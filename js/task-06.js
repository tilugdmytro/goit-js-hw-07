const input = document.querySelector("#validation-input");
// console.log(input);

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.target.value.length === Number(event.target.dataset.length)) {
    input.className = "valid";
  } else {
    input.className = "invalid";
  }
}
