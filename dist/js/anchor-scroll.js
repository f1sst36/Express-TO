const anchors = document.querySelectorAll(".nav__item>a");

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute("href");
        console.log(blockID);

        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}
