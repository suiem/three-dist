//  プラグインの読み込み

const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const plumber = require("gulp-plumber");
const notify  = require('gulp-notify');
const browser = require("browser-sync");

//  ----------------------------------------
//  HTML
//  ----------------------------------------

gulp.task('pug', function () {
  return (
    gulp.src(['./src/pug/*.pug', '!./src/pug/_*.pug'])
      .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
      }))
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('dist'))
  );
});


//  ----------------------------------------
//  CSS
//  ----------------------------------------

gulp.task('sass', function () {
  return (
    gulp.src('./src/scss/*.scss')
      .pipe(plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
      }))
      .pipe(sass({
        outputStyle: 'nested'
      }))
      .pipe(gulp.dest('dist'))
  );
});



//  ----------------------------------------
//  browserSync
//  ----------------------------------------

gulp.task("server",function() {
  return (
    browser.init({
      server: {
          baseDir:"./dist"
      },
      // open: "external"
    })
    // setTimeout(function(){
    //     browser.reload();
    // },500);
  );
});


//  ----------------------------------------
//  watch
//  ----------------------------------------

gulp.task("watch", function() {
    gulp.watch('./src/pug/*.pug', gulp.task("pug"))
    gulp.watch('./src/scss/*.scss', gulp.task("sass"))
    gulp.watch('./dist/**/*', gulp.task("server"))
});

gulp.task("default", gulp.series("watch"));
