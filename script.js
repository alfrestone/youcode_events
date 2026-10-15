
const menu = document.querySelector(".menu");
const navRight = document.querySelector(".nav-right");

menu.addEventListener("click", function () {
    navRight.classList.toggle("open");
});
