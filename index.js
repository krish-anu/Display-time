// ----------------------------------------------------------
// let username;
// username = window.prompt("Enter your username")

// ----------------------------------------------------------
let username;
document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Welcome ${username}`
}