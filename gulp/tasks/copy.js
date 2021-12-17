module.exports = function () {
  $.gulp.task('copy', function() {
    return $.gulp.src(
      [
        'src/static/js/app-project-run.js'
      ]
    )
      .pipe($.gulp.dest('build/js/'))
      .on('end', $.bs.reload);
  });
};
