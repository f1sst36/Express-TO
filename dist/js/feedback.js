const modal = document.getElementById("feedback-modal");
const button = document.getElementById("feedback__button");
const cross = document.getElementById("feedback-modal__form__cross");
const mainScreenButton = document.getElementById("main-screen__button");

button.addEventListener("click", () => {
    modal.classList.add("feedback-modal__active");
});

mainScreenButton.addEventListener("click", () => {
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

//----------------------------------------

const form = document.getElementById("feedback-modal__form");
const nameField = document.getElementById("feedback-modal__name-field");
const phoneField = document.getElementById("feedback-modal__phone-field");
const errorMessageNode = document.getElementById("feedback-modal__error-message");
const PHONE_NUMBER_REGEXP = new RegExp(
    "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$"
);

form.addEventListener("submit", (e) => {
    if (!nameField.value || !phoneField.value) {
        if (!nameField.value) nameField.classList.add("error");
        else nameField.classList.remove("error");
        if (!phoneField.value) phoneField.classList.add("error");
        else phoneField.classList.remove("error");

        errorMessageNode.innerHTML = "Поля не могут быть пустыми";
        e.preventDefault();
        return;
    }

    if (!PHONE_NUMBER_REGEXP.test(phoneField.value)) {
        errorMessageNode.innerHTML = "Неверный формат номера телефона";
        phoneField.classList.add("error");

        e.preventDefault();
        return;
    }

    errorMessageNode.innerHTML = "";
    nameField.value = "";
    phoneField.value = "";
    nameField.classList.remove("error");
    phoneField.classList.remove("error");
    modal.classList.remove("feedback-modal__active");
});
