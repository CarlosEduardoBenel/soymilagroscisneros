const nav = document.querySelector("header > ul");

window.addEventListener("scroll", () => {
    if (window.scrollY > 25) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

const desplegable = document.querySelector(".desplegable");
const listMenu = document.querySelector(".lista-menu");

desplegable.addEventListener("click", () => {
    listMenu.classList.toggle("abierta");
});