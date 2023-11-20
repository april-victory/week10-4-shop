let button = document.querySelector(".button");
let total = document.querySelector(".total");

function calculateTotalPrice(quantity = 2, price = 15000000) {
  return quantity * price;
}

console.log(calculateTotalPrice());

console.log(calculateTotalPrice.toLocaleString("ru-RU"));

button.addEventListener("click", () => {
  total.textContent = `Стоимость покупки:  ${calculateTotalPrice().toLocaleString(
    "ru-RU"
  )} рублей`;
});
