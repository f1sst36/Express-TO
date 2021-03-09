var slider = tns({
    container: ".stocks__slider",
    mode: "carousel",
    controls: false,
    nav: false,
    loop: false,
    autoplayButtonOutput: false,
    speed: 300,
    slideBy: 2,
    preventScrollOnTouch: true,
    preventActionWhenRunning: true,
    autoplayResetOnVisibility: false,
    mouseDrag: true,
    rewind: true,
    gutter: 30,
    responsive: {
        0: {
            items: 2,
        },
    },
});
