let counterValue = 0;

const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMin = document.querySelector('button[data-action="decrement"]');
btnPlus.addEventListener("click", () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
});
btnMin.addEventListener("click", () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
});
