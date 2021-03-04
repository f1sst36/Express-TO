const header = document.getElementById("header-bottom");
document.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
});
