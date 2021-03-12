var worksMainSlider = tns({
    container: ".works__main-slider",
    items: 1,
    autoplay: false,
    controls: false,
    nav: false,
    swipeAngle: false,
    loop: true,
    autoHeight: true,
    speed: 400,
    mode: "gallery",
    slideBy: 1,
    mouseDrag: false,
});

var worksSlider = tns({
    container: ".works__slider",
    items: 5,
    autoplay: false,
    controls: false,
    nav: false,
    swipeAngle: false,
    loop: true,
    // autoHeight: true,
    // autoWidth: true,
    speed: 400,
    mode: "carousel",
    axis: "vertical",
    slideBy: 1,
    gutter: 12,
    // viewportMax: 5,
    mouseDrag: false,
    center: true,
});

const button_1 = document.getElementById("works__slider__button-1");
const button_2 = document.getElementById("works__slider__button-2");

button_1.addEventListener("click", () => {
    worksMainSlider.goTo("prev");
    worksSlider.goTo("prev");
});

button_2.addEventListener("click", () => {
    worksMainSlider.goTo("next");
    worksSlider.goTo("next");
});
