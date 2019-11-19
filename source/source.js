var navLink = document.getElementById("navIcon");
var crossLink = document.getElementById("crossIcon");

navLink.onclick = function() {
    navLink.style.display = "none";
    crossLink.style.display = "block";
}

crossLink.onclick = function() {
    crossLink.style.display = "none";
    navLink.style.display = "block";
}