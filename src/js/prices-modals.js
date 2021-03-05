const itemsHTMLCollection = document.getElementsByClassName("work-cost__item-wrapper");
const modalsHTMLCollection = document.getElementsByClassName("prices-modal");

const items = [...itemsHTMLCollection];
const modals = [...modalsHTMLCollection];

items.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
        modals[index].classList.add("active");
    });
});

items.forEach((item, index) => {
    item.addEventListener("mouseout", () => {
        modals[index].classList.remove("active");
    });
});
