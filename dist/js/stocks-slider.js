var slider = tns({
    container: ".stocks__slider",
    mode: "carousel",
    controls: false,
    nav: false,
    loop: false,
    // "center": true,
    autoplayButtonOutput: false,
    speed: 300,
    slideBy: 2,
    preventScrollOnTouch: true,
    preventActionWhenRunning: true,
    autoplayResetOnVisibility: false,
    mouseDrag: true,
    rewind: true,
    responsive: {
        0: {
            items: 3,
        },
    },
});

// Slick slider
