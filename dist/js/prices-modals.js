const itemsHTMLCollection = document.getElementsByClassName("work-cost__item-wrapper");
const modalsHTMLCollection = document.getElementsByClassName("prices-modal");

const items = [...itemsHTMLCollection];
const modals = [...modalsHTMLCollection];

const lg = 1199;

items.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
        if (window.innerWidth > lg) modals[index].classList.add("active");
    });
});

items.forEach((item, index) => {
    item.addEventListener("mouseout", () => {
        if (window.innerWidth > lg) modals[index].classList.remove("active");
    });
});

// Mobile

items.forEach((item, index) => {
    item.addEventListener("click", () => {
        if (window.innerWidth <= lg) {
            if (item.classList.contains("active-card"))
                item.classList.remove("active-card");
            else item.classList.add("active-card");

            if (modals[index].classList.contains("active"))
                modals[index].classList.remove("active");
            else modals[index].classList.add("active");
        }
    });
});
