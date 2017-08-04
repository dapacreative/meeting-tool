var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');

gulp.task('styles', function() {
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(livereload());
});

//Connect Server
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

//Copy Files
gulp.task('copy', function () {
    gulp.src('./src/scss/global/font-files/**/*.{ttf,woff,eot,svg,woff2}')
        .pipe(gulp.dest('./dist/css/font-files'));
});

//Watch task
gulp.task('watch',function() {
  livereload.listen();
  gulp.watch('src/scss/**/*.scss',['styles', 'copy']);
});

gulp.task('default', ['connect', 'watch']);
