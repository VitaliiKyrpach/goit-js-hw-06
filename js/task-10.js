function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const arr = [];
  for (let i = 0; i < amount; i++) {
    const num = 300 + 10 * i;
    arr.push(`<div style="background-color:${getRandomHexColor()}; width:${num}px; height:${num}px;"></div>`);
  }
  boxes.innerHTML = arr.join("");
  console.log(boxes);
}
function destroyBoxes() {
  boxes.innerHTML = "";
}

const boxes = document.querySelector("#boxes");
let amount = 0;

const inputAmount = document.querySelector("input");
inputAmount.addEventListener("input", () => {
  amount = inputAmount.value;
});
const createBtn = document.querySelector("[data-create]");
createBtn.addEventListener("click", () => {
  destroyBoxes();
  createBoxes(amount);
});
const destroyBtn = document.querySelector("[data-destroy]");
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
