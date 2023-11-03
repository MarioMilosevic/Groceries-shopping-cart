// Variables
const vegetables = document.querySelector("#vegetables");
const fruits = document.querySelector("#fruits");
const meat = document.querySelector("#meat");
const milkEggs = document.querySelector("#milkEggs");
const fish = document.querySelector("#fish");
const drinks = document.querySelector("#drinks");
const navbar = document.querySelector("#navbar");
const groceries = document.querySelector("#groceries");
const groceriesDiv = [vegetables, fruits, meat, milkEggs, fish, drinks];
let newHtml;
const cartButton = document.querySelector("#cartIcon");

let tomatoDiv = document.querySelector("#tomatoDiv");
let carrotDiv = document.querySelector("#carrotDiv");
let onionDiv = document.querySelector("#onionDiv");
let cucumberDiv = document.querySelector("#cucumberDiv");
let cabbageDiv = document.querySelector("#cabbageDiv");
let garlicDiv = document.querySelector("#garlicDivDiv");
const vegetablesDiv = [];

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

groceries.addEventListener("click", function () {
  newHtml = `
  
    <div class="row">
        <div id="vegetables" class="item">
      <img
        src="categories/main/images/img-1.jpg"
        alt="Vegetables"
      />
      <div class="details">
        <h3>Vegetables</h3>
      </div>
    </div>
    <div id="fruits" class="item">
      <img src="categories/main/images/img-2.jpg" alt="Fruits" />
      <div class="details">
        <h3>Fruits</h3>
      </div>
    </div>
    <div id="meat" class="item">
      <img src="categories/main/images/img-3.jpg" alt="Meat" />
      <div class="details">
        <h3>Meat</h3>
      </div>
    </div>
  </div>

  <!--  -->
  <div class="row">
    <div id="milkEggs" class="item">
      <img src="categories/main/images/img-4.jpg" alt="Milk & eggs" />
      <div class="details">
        <h3>Milk & eggs</h3>
      </div>
    </div>
    <div id="fish" class="item">
      <img src="categories/main/images/img-5.jpg" alt="Fish" />
      <div class="details">
        <h3>Fish</h3>
      </div>
    </div>
    <div id="drinks" class="item">
      <img src="categories/main/images/img-6.webp" alt="Drinks" />
      <div class="details">
        <h3>Drinks</h3>
      </div>
    </div>
  </div>
`;
  vegetablesDiv.forEach((vegetable) => {
    console.dir(vegetable);
    vegetable.style.display = "none";
  });
  groceriesDiv.forEach((grocery) => {
    console.dir(grocery);
    grocery.style.display = "block";
  });
  shop.innerHTML = "";
  shop.innerHTML = newHtml;
});

vegetables.addEventListener("click", function () {
  newHtml = `
 
  <div class="row">
    <div id="tomatoDiv" class="item">
      <img src="categories/vegetables/images/img-1.webp" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h4>Tomato 2.13$</h4>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
    <div id="carrotDiv" class="item">
      <img src="categories/vegetables/images/img-2.jpg" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h4>Carrot 0.70$</h4>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
    <div id="onionDiv" class="item">
      <img src="categories/vegetables/images/img-3.jpg" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h4>Onion 3.41$</h4>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
  </div>
  < class="row">
    <div id="cucumberDiv" class="item">
      <img src="categories/vegetables/images/img-4.jpg" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h4>Cucumber 2.30$</h4>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
    <div id="cabbageDiv" class="item">
      <img src="categories/vegetables/images/img-5.jpg" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h4>Cabbage 1.28$</h4>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
    <div id="garlicDiv" class="item">
      <img src="categories/vegetables/images/img-6.jpg" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h4>Garlic 0.85$</h4>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
  
</>
`;

  fruits.style.display = "none";
  meat.style.display = "none";
  milkEggs.style.display = "none";
  fish.style.display = "none";
  drinks.style.display = "none";
  shop.innerHTML = newHtml;
  let tomatoDiv = document.querySelector("#tomatoDiv");
  let carrotDiv = document.querySelector("#carrotDiv");
  let onionDiv = document.querySelector("#onionDiv");
  let cucumberDiv = document.querySelector("#cucumberDiv");
  let cabbageDiv = document.querySelector("#cabbageDiv");
  let garlicDiv = document.querySelector("#garlicDiv");
  vegetablesDiv.push(
    tomatoDiv,
    carrotDiv,
    onionDiv,
    garlicDiv,
    cabbageDiv,
    cucumberDiv
  );
  const increment = document.querySelectorAll(".bi-plus-circle");
  const decrement = document.querySelectorAll(".bi-dash-circle");
  let cartAmount = 0;
  let cartAmountElement = document.querySelector(".cartAmount");
  console.log(vegetablesDiv);
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
