// module.exports = function() {
//   $.gulp.task('img', function() {
//     return $.gulp.src('src/static/img/**/*.{png,jpg,gif,svg}')
//       .pipe($.gulp.dest('build/img'))
//   });
// }
module.exports = function () {
  $.gulp.task('img', function () {
    return $.gulp.src('src/static/img/**/*.{png,jpeg,jpg,tiff,webp}')
      .pipe($.webp())
      .pipe($.gulp.dest('build/img/'))
  });
  $.gulp.task('img:svg', function () {
    return $.gulp.src('src/static/img/**/*.svg')
      .pipe($.gulp.dest('build/img/'))
  });
  $.gulp.task('img:svg', function () {
    return $.gulp.src('src/static/img/**/*.gif')
      .pipe($.gulp.dest('build/img/'))
  });
}
