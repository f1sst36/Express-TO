const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass");
const csso = require("gulp-csso");
const include = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const sync = require("browser-sync").create();
const modifyCssUrls = require("gulp-modify-css-urls");
const babel = require('gulp-babel');

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
        .pipe(
            modifyCssUrls({
                modify(url) {
                    // Заменяет ../abc/abc на ./abc/abc
                    return url.slice(1);
                },
            })
        )
        .pipe(dest("dist"));
};

js = () => {
    return src("src/js/**.js")
        .pipe(concat("index.js"))
        .pipe(
            babel({
                presets: ["@babel/env"],
            })
        )
        .pipe(dest("dist/js"));
};

clone = () => {
    return src("src/**").pipe(dest("dist"));
};

clear = () => {
    return del("dist");
};

serve = () => {
    sync.init({
        server: "./dist",
    });

    watch("src/**.html", series(html)).on("change", sync.reload);
    watch("src/parts/**.html", series(html)).on("change", sync.reload);
    watch("src/scss/**.scss", series(scss)).on("change", sync.reload);
    watch("src/modal/**/**.html", series(html)).on("change", sync.reload);
    // watch("src/images/**", series(clear, clone)).on("change", sync.reload);
    watch("src/js/**.js", series(js)).on("change", sync.reload);
};

exports.build = series(clear, clone, scss, html, js);
exports.serve = series(clear, clone, scss, html, js, serve);
exports.clear = clear;
