let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let count = 0;
let showTotal = document.querySelector("#cartValue");
showData(cartData);

function showData(cartData, totalValue) {
  document.querySelector("#items").innerHTML = null;
  cartData.forEach(function (elem, index) {
    let mainDiv = document.createElement("div");
    let smallDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = elem.image;
    let title = document.createElement("p");
    title.textContent = elem.title;
    let price = document.createElement("p");
    price.textContent = Math.round(elem.price);
    count += Math.round(elem.price);
    console.log(count);
    //   total(elem.price);

    // let showTotal = document.querySelector("#cartValue");
    let btn = document.createElement("button");
    btn.id = "deleteCart";
    btn.textContent = "Delete";
    btn.addEventListener("click", function () {
      deleteItem(elem, index);
    });

    smallDiv.append(title, price, btn);
    mainDiv.append(img, smallDiv);
    document.querySelector("#items").append(mainDiv);
  });
  console.log(cartData);
}
showTotal.textContent = `Total Value: ${count}`;
function deleteItem(elem, index) {
  cartData.splice(index, 1);
  count -= elem.price;
  count = Math.round(count);
  showTotal.textContent = `Total Value: ${count}`;

  console.log("delete");
  localStorage.setItem("cart", JSON.stringify(cartData));
  showData(cartData);
}

// checkout redirection

function checkOut() {
  console.log("here");
  window.location.href = "checkout.html";
}

function index() {
  window.location.href = "index.html";
}
function login() {
  window.location.href = "login.html";
}
function signup() {
  window.location.href = "signup.html";
}
