// Variables
const vegetables = document.querySelector("#vegetables");
const fruits = document.querySelector("#fruits");
const meat = document.querySelector("#meat");
const milkEggs = document.querySelector("#milkEggs");
const fish = document.querySelector("#fish");
const drinks = document.querySelector("#drinks");
const navbar = document.querySelector("#navbar");

const cartButton = document.querySelector("#cartIcon");

// Vegetables
const tomato = 2.13;
const carrot = 0.7;
const onion = 3.41;
const cucumber = 2.3;
const cabbage = 1.28;
const garlic = 0.85;

// Functions
cartButton.addEventListener("click", function () {
  console.log("radi");
});
vegetables.addEventListener("click", function () {
  let newHtml = `
<div id="shop" class="shop">
  <div class="row">
    <div class="item">
      <img src="categories/vegetables/images/img-1.webp" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h4>Tomato 2.13$</h4>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
    <div class="item">
      <img src="categories/vegetables/images/img-2.jpg" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h4>Carrot 0.70$</h4>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
    <div class="item">
      <img src="categories/vegetables/images/img-3.jpg" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h4>Onion 3.41$</h4>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="item">
      <img src="categories/vegetables/images/img-4.jpg" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h4>Cucumber 2.30$</h4>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
    <div class="item">
      <img src="categories/vegetables/images/img-5.jpg" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h4>Cabbage 1.28$</h4>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
    <div class="item">
      <img src="categories/vegetables/images/img-6.jpg" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h4>Garlic 0.85$</h4>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
  </div>
</div>
`;

  fruits.style.display = "none";
  meat.style.display = "none";
  milkEggs.style.display = "none";
  fish.style.display = "none";
  drinks.style.display = "none";
  shop.innerHTML = newHtml;
  const increment = document.querySelectorAll(".bi-plus-circle");
  const decrement = document.querySelectorAll(".bi-dash-circle");
  let cartAmount = 0;
  let cartAmountElement = document.querySelector(".cartAmount");

  decrement.forEach((button) => {
    button.addEventListener("click", function () {
      cartAmount--;
      cartAmount = Math.max(cartAmount, 0);
      cartAmountElement.textContent = cartAmount;
    });
  });
  increment.forEach((button) => {
    button.addEventListener("click", function () {
      cartAmount++;
      cartAmountElement.textContent = cartAmount;
    });
  });
});
