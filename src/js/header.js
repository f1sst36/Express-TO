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
    if (!path.find((node) => node.id === "header")) {
        headerMobileMenu.classList.remove("is-opened-menu");
        burgerButton.src = burgerIconUrl;
    }
});

const navItemsHTMLCollection = document.getElementsByClassName("nav__item");
const navItems = [...navItemsHTMLCollection];

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        headerMobileMenu.classList.remove("is-opened-menu");
        burgerButton.src = burgerIconUrl;
    });
});

//--------------------------------------------------

const services = document.getElementById("services__title");
const workCost = document.getElementById("work-cost__title");
const stocks = document.getElementById("stocks__title");
const works = document.getElementById("works_title");
const contacts = document.getElementById("footer");

const visible = (target) => {
    const targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
        },
        windowPosition = {
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight,
        };

    return targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom;
};

const setActiveNavItem = (href) => {
    navItems.forEach((item) => {
        if (item.dataset.anchor == href) item.classList.add("active-nav-item");
        else item.classList.remove("active-nav-item");
    });
};

const removeAllActive = () => {
    navItems.forEach((item) => {
        item.classList.remove("active-nav-item");
    });
};

let ticking = false;
const delay = 100;

window.addEventListener("scroll", () => {
    if (ticking) return;

    if (visible(services)) {
        setActiveNavItem("#services");
    } else if (visible(workCost)) {
        setActiveNavItem("#work-cost");
    } else if (visible(stocks)) {
        setActiveNavItem("#stocks");
    } else if (visible(works)) {
        setActiveNavItem("#works");
    } else if (visible(contacts)) {
        setActiveNavItem("#footer");
    } else {
        removeAllActive();
    }

    ticking = true;
    setTimeout(() => {
        ticking = false;
    }, delay);
});
