let userData = JSON.parse(localStorage.getItem("users"));
console.log(userData);
document.querySelector("#login").addEventListener("submit", loginUser);

function index() {
  window.location.href = "index.html";
}
function login() {
  window.location.href = "login.html";
}
function signup() {
  window.location.href = "signup.html";
}
function loginUser(e) {
  e.preventDefault();
  // console.log("here");
  let mobile = document.querySelector("#mobile").value;
  let password = document.querySelector("#pw").value;
  console.log(mobile, password);
  for (let i = 0; i < userData.length; i++) {
    console.log(userData[i].mobile, userData[i].password);
    if (userData[i].mobile == mobile && userData[i].password == password) {
      alert("login successfully");
      window.location.href = "index.html";
    }
  }
}
