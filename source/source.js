var navLink = document.getElementById("navIcon");
var crossLink = document.getElementById("crossIcon");
var modalShow = document.querySelector(".modal");
var gymBody = document.querySelector("body");

navLink.onclick = function() {
    navLink.style.display = "none";
    crossLink.style.display = "block";
    modalShow.style.display = "flex";
    //hide body overflow style to hide side scroll bar
    gymBody.style.overflow = "hidden";

}

crossLink.onclick = function() {
    crossLink.style.display = "none";
    navLink.style.display = "block";
    modalShow.style.display = "none";
    gymBody.style.overflow = "auto";
}