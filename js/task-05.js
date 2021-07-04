const input = document.querySelector("#name-input");
// console.log(input);
const nameLabel = document.querySelector("#name-output");
// console.log(nameLabel);

input.addEventListener("input", onInputFocus);

function onInputFocus() {
  nameLabel.textContent = input.value ? input.value : "незнакомец";
}
