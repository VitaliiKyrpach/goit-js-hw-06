const textInput = document.querySelector("#name-input");
textInput.addEventListener("input", (evt) => {
  if (evt.currentTarget.value == "") {
    document.querySelector("#name-output").textContent = "Anonymous";
  } else {
    document.querySelector("#name-output").textContent = evt.currentTarget.value;
  }
});
