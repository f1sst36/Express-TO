const modal = document.getElementById("feedback-modal");
const button = document.getElementById("feedback__button");
const cross = document.getElementById("feedback-modal__form__cross");

button.addEventListener("click", () => {
    modal.classList.add("feedback-modal__active");
});

cross.addEventListener("click", () => {
    modal.classList.remove("feedback-modal__active");
});

modal.addEventListener("click", (e) => {
    const path = e.composedPath();
    if (!path.find((node) => node.id === "feedback-modal__form"))
        modal.classList.remove("feedback-modal__active");
});
