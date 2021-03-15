const buildTNSMainSlider = () => ({
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
    touch: false,
});

const worksMainSlider = tns(buildTNSMainSlider());

const buildTNSSlider = () => ({
    container: "#works__slider",
    items: 5,
    autoplay: false,
    controls: false,
    nav: false,
    swipeAngle: false,
    loop: true,
    // rewind: true,
    // autoHeight: true,
    // autoWidth: true,
    speed: 400,
    mode: "carousel",
    axis: window.innerWidth > 991 ? "vertical" : "horizontal",
    slideBy: 1,
    // gutter: 12,
    // viewportMax: 5,
    mouseDrag: false,
    center: true,
    touch: false,
    responsive: {
        0: {
            gutter: 4,
            // axis: "horizontal",
        },
        992: {
            gutter: 12,
        },
    },
});

let worksSlider = tns(buildTNSSlider());

const mainSlider = document.getElementById("works__main-slider");
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

mainSlider.addEventListener("click", () => {
    worksMainSlider.goTo("next");
    worksSlider.goTo("next");
});

let isBelowMd = window.innerWidth <= 991;

window.addEventListener("resize", () => {
    if (window.innerWidth <= 991 && !isBelowMd) {
        console.log("rebuild");

        worksSlider.destroy();
        worksSlider = tns(buildTNSSlider());

        worksMainSlider.goTo("first");

        isBelowMd = !isBelowMd;
    }

    if (window.innerWidth > 991 && isBelowMd) {
        console.log("rebuild 2");

        worksSlider.destroy();
        worksSlider = tns(buildTNSSlider());

        worksMainSlider.goTo("first");

        isBelowMd = !isBelowMd;
    }
});

const loupeButton = document.getElementById("works__loupe");
const imageModal = document.getElementById("big-image-modal");

loupeButton.addEventListener("click", () => {
    const info = worksMainSlider.getInfo();
    imageModal.innerHTML = "";
    imageModal.classList.add("big-image-modal__active");
    const img = info.slideItems[info.index].children[0].cloneNode();
    img.id = "big-image";
    imageModal.append(img);

    console.log(img);
});

imageModal.addEventListener("click", (e) => {
    const path = e.composedPath();
    if (!path.find((node) => node.id === "big-image")){
        imageModal.classList.remove("big-image-modal__active");
        // imageModal.innerHTML = "";
    }
        
});
