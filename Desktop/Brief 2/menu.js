const menu = document.querySelector(".menu");
const navRight = document.querySelector(".links");

menu.addEventListener("click", function () {
    navRight.classList.toggle("open");
});