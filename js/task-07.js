const input = document.querySelector("#font-size-control");
// console.log(input);
const textEl = document.querySelector("#text");
// console.log(textEl);

input.addEventListener("input", onInputEvent);

function onInputEvent(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
