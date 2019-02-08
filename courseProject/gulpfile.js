const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const concatCss = require('gulp-concat-css'); //не работает.
 
sass.compiler = require('node-sass');

const config = {
    src: "./src", // директория с исходниками
    //build: "./build" // Директория сборки
 };
 
gulp.task('sass', function () {
  return gulp.src(`${config.src}/sass/*.sass`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(concatCss("bundle.css")); //не работает.
});
 
gulp.task('sass:watch', function () {
  gulp.watch('sass/*.sass', ['sass']);
});

gulp.task('build', gulp.series(
    gulp.parallel('sass')
));

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: config.src,
            index: 'index.html'
        }
    });
    browserSync.watch(`${config.src}/**/*.*`,`${config.src}/*.*`).on('change', browserSync.reload)
});

gulp.task('watch', function () {
    gulp.watch(`${config.src}/sass/*.sass`, gulp.series('sass'));
   // gulp.watch(`${config.src}/js/**/*.js`, gulp.series('js'));
   // gulp.watch(`${config.src}/assets/*.html`, gulp.series('html'));
});

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'server')));