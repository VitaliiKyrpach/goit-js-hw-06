const textInput = document.querySelector("#font-size-control");
textInput.addEventListener("input", (evt) => {
  document.querySelector("#text").style.fontSize = `${evt.currentTarget.value}px`;
});
