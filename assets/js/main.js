const nav = document.getElementById("nav");
const menuMain = document.getElementById("main-menu");
const menuHamburger = document.getElementById("hamburger");
const menuCross = document.getElementById("cross");

menuHamburger.addEventListener("click", () => {
    menuMain.style.height = "210px";
    menuMain.style.display = "block";
    menuCross.style.display = "block";
    menuHamburger.style.display = "none";
    nav.style.borderColor = "gray";
});

menuCross.addEventListener("click", () => {
    menuMain.style.height = "0px";
    menuMain.style.display = "none";
    menuCross.style.display = "none";
    menuHamburger.style.display = "block";
    nav.style.borderColor = "transparent";
});