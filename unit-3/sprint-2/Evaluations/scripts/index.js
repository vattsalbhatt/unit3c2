let cartData = JSON.parse(localStorage.getItem("cart")) || [];
async function getDishes() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    console.log(data);
    appendPro(data);
  } catch (err) {
    console.log(err);
  }
}
getDishes();
function appendPro(data) {
  data.forEach(function (elem, index) {
    let mainDiv = document.createElement("div");
    let smallDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = elem.image;
    let title = document.createElement("p");
    title.textContent = elem.title;
    let price = document.createElement("p");

    // let ranPrice = Math.round(Math.random() * 1000);

    // while (ranPrice <= 100 || ranPrice >= 500) {
    //   ranPrice = Math.round(Math.random() * 1000);
    // }

    price.textContent = Math.round(elem.price);
    // price.textContent = ranPrice;

    let btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.addEventListener("click", function () {
      addToCart(elem);
    });
    btn.id = "addCart";
    smallDiv.append(title, price, btn);
    mainDiv.append(img, smallDiv);
    document.querySelector("#items").append(mainDiv);
  });
}

function addToCart(elem) {
  console.log("added");
  cartData.push(elem);
  localStorage.setItem("cart", JSON.stringify(cartData));
  console.log(cartData);
  let count = document.querySelector("#count");
  count.textContent = `Cart Items: ${cartData.length}`;
}
function cartPage() {
  console.log("here");
  window.location.href = "cart.html";
}
let count = document.querySelector("#count");
count.textContent = `Cart Items: ${cartData.length}`;

function index() {
  window.location.href = "index.html";
}
function login() {
  window.location.href = "login.html";
}
function signup() {
  window.location.href = "signup.html";
}
