let userData = JSON.parse(localStorage.getItem("users")) || [];
function index() {
  window.location.href = "index.html";
}
function login() {
  window.location.href = "login.html";
  console.log("here");
}
function signup() {
  window.location.href = "signup.html";
}
document.querySelector("#signup").addEventListener("submit", addUser);
function addUser(e) {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let mobile = document.querySelector("#tel").value;
  let password = document.querySelector("#pw").value;

  let obj = {
    name: name,
    mobile: mobile,
    password: password,
  };
  userData.push(obj);
  console.log(userData);

  localStorage.setItem("users", JSON.stringify(userData));
  alert("signup successfully");
  window.location.href = "login.html";
}
