// import gulp
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const concat = require("gulp-concat");

// start gulp
gulp.task("default", function () {
    return console.log("Gulp is on");
});

// copy HTML files to the dist folder
gulp.task("copyHTML", function () {
    gulp.src("assets/*.html").pipe(gulp.dest("dist"));
});
// minify HTML files
gulp.task("minifyHTML", () => {
    return gulp
        .src("assets/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist"));
});

// Minimize the size of the images
gulp.task("imagemin", function () {
    gulp.src("images/*").pipe(imagemin()).pipe(gulp.dest("dist/images"));
});

// concatinate js files
gulp.task("scripts", function () {
    return gulp.src("./js/*.js").pipe(concat("all.js")).pipe(gulp.dest("./dist/js"));
});
