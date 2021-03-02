const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass");
const csso = require("gulp-csso");
const include = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const sync = require("browser-sync").create();

html = () => {
    return src("src/**.html")
        .pipe(
            include({
                prefix: "@@",
            })
        )
        .pipe(
            htmlmin({
                collapseWhitespace: true,
            })
        )
        .pipe(dest("dist"));
};

scss = () => {
    return src("src/scss/**.scss")
        .pipe(sass())
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 2 versions"],
            })
        )
        .pipe(csso())
        .pipe(concat("index.css"))
        .pipe(dest("dist"));
};

clear = () => {
    return del("dist");
};

serve = () => {
    sync.init({
        server: "./dist",
    });

    watch("src/**.html", series(html)).on("change", sync.reload);
    watch("src/scss/**.scss", series(scss)).on("change", sync.reload);
};

exports.build = series(clear, scss, html);
exports.serve = series(clear, scss, html, serve);
exports.clear = clear;
