var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var del = require('del');
 
var paths = {
    scss: ['./scss/frame.scss']
};
 
gulp.task('clean', function() { 
  del(['build']);
});

gulp.task('scss', function() {
    gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('min', ['clean', 'scss'], function() {
    gulp.src('./css/frame.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
    gulp.watch(['./scss/frame.scss'], ['min']);
});

gulp.task('default', ['min', 'watch']);