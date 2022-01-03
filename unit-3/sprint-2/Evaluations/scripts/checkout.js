document.querySelector("#myForm").addEventListener("submit", deliverPro);
function deliverPro(e) {
  e.preventDefault();
  setTimeout(function () {
    alert("Your Order is accepted");
  }, 3000);
  setTimeout(function () {
    alert("Your Order is Cooked");
  }, 8000);
  setTimeout(function () {
    alert("Your Order is ready");
  }, 10000);
  setTimeout(function () {
    alert("Your Order is on the way");
  }, 12000);
  setTimeout(function () {
    alert("Your Order is Delivered");
  }, 15000);
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
