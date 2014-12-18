var runSequence = require('run-sequence');
var gulp = require('gulp');
var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();

gulp.task('images', function() {
 return gulp.src('src/images/**/*')
   .pipe(cachebust.resources())
   .pipe(gulp.dest('dist/images'));
});

gulp.task('html', function() {
 return gulp.src('src/**/*.html')
   .pipe(cachebust.references())
   .pipe(gulp.dest('build/dev'));
});

gulp.task('build', function(done) {
 runSequence('images', 'html', done);
});