let loginBtn = document.getElementById("loginBtn");
let regiBtn = document.getElementById("regiBtn");
let logoutBtn = document.getElementById("logoutBtn");
let profileBtn =document.getElementById("profileBtn")

let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));


if (loggedInUser !== null) {
    loginBtn.style.display = "none";
    regiBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
    profileBtn.style.display = "inlin-block"
} else {
    loginBtn.style.display = "inline-block";
    regiBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
    profileBtn.style.display = "none"
}

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
});