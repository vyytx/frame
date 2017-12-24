var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var deleter = require('del');

gulp.task('scss', function(){
    gulp.src('./scss/frame.scss')
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function(){
    gulp.watch('./scss/frame.scss', ['scss']);
});

gulp.task('default', ['scss', 'watch']);