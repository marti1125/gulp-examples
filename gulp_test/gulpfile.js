var gulp = require('gulp')

gulp.task('hello', function(){
 console.log('Hellp gulp!')
});

gulp.task('copy-index', function() {
  return gulp.src('index.html')
         .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
  return gulp
  //.src('images/*.png') // *.png
  .src(['images/*', '!images/icons', '!images/image-sources'])
  .pipe(gulp.dest('dist/images'));
});

gulp.task('icons', function() {
  return gulp
  //.src('images/*.png') // *.png
  .src('images/icons/*')
  .pipe(gulp.dest('dist/images/icons'));
});

gulp.task('get-all-inside-images', function() {
  return gulp
  //.src('images/*.png') // *.png
  .src('images/*/*')
  .pipe(gulp.dest('dist/images/'));
});

gulp.task('get-images-n-level', function() {
  return gulp
  //.src('images/*.png') // *.png
  .src('images/**/*.png')
  .pipe(gulp.dest('dist/images/'));
});

gulp.task('data', function() {
  return gulp
  .src(['xml/*.xml', 'json/*.json', '!json/secret-*.json'])
  .pipe(gulp.dest('dist/data'));
});

gulp.task('copy-everything', function() {
  return gulp
  .src(['**', '!node_modules', '!node_modules/**', '!gulpfile.js', '!package.json'])
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('index.html', ['copy-index']);
  gulp.watch('images/**/*.png', ['images']);
  gulp.watch(['xml/*.xml', 'json/*.json', '!json/secret-*.json'], ['data']);
});

gulp.task('default', ['hello','copy-index', 'images', 'data', 'watch']);







