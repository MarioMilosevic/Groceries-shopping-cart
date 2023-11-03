const vegetables = document.querySelector("#vegetables");
const fruits = document.querySelector("#fruits");
const meat = document.querySelector("#meat");
const milkEggs = document.querySelector("#milkEggs");
const fish = document.querySelector("#fish");
const drinks = document.querySelector("#drinks");
const navbar = document.querySelector("#navbar");
const row = document.querySelector('.row')

vegetables.addEventListener("click", function () {
  let newHtml = `<div class="navbar">
  <a href="../../index.html">
    <h2>Groceries Store</h2>
  </a>
  <div class="cart">
    <i class="bi bi-cart4"></i>
    <div class="cartAmount">0</div>
  </div>
</div>
<div id="shop" class="shop">
  <div class="row">
    <div class="item">
      <img src="categories/vegetables/images/img-1.webp" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h3>Tomato</h3>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
    <div class="item">
      <img src="categories/vegetables/images/img-2.jpg" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h3>Carrot</h3>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
    <div class="item">
      <img src="categories/vegetables/images/img-3.jpg" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h3>Onion</h3>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="item">
      <img src="categories/vegetables/images/img-4.jpg" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h3>Cucumber</h3>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
    <div class="item">
      <img src="categories/vegetables/images/img-5.jpg" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h3>Cabbage</h3>
        <i class="bi bi-plus-circle"></i>
      </div>
    </div>
    <div class="item">
      <img src="categories/vegetables/images/img-6.jpg" alt="Vegetables" />
      <div class="details">
        <i class="bi bi-dash-circle"></i>
        <h3>Garlic</h3>
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
   navbar.style.display = "none";
   document.body.innerHTML = newHtml;
});


