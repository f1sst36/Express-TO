const header = document.getElementById("header-bottom");
document.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
});

//--------------------------------------------------

const burgerButton = document.getElementById("menu-icon");
const headerMobileMenu = document.getElementById("header__mobile");

const burgerIconUrl = "./images/header/burger-icon.svg";
const crossIconUrl = "./images/header/cross-icon.svg";

burgerButton.addEventListener("click", () => {
    if (headerMobileMenu.classList.contains("is-opened-menu")) {
        headerMobileMenu.classList.remove("is-opened-menu");
        burgerButton.src = burgerIconUrl;
    } else {
        headerMobileMenu.classList.add("is-opened-menu");
        burgerButton.src = crossIconUrl;
    }
});

document.addEventListener("click", (e) => {
    const path = e.composedPath();
    if (!path.find((node) => node.id === "header")){
        headerMobileMenu.classList.remove("is-opened-menu");
        burgerButton.src = burgerIconUrl;
    }
        
});
