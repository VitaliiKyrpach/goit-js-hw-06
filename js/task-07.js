const text = document.querySelector("#text");
const textInput = document.querySelector("#font-size-control");
textInput.addEventListener("input", (evt) => {
  text.style.fontSize = `${evt.currentTarget.value}px`;
});
