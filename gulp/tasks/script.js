module.exports = function () {
  $.gulp.task('scripts', function() {
    return $.gulp.src(
      [
        'src/static/libs/**/{,*/}*.js',
      ], {allowEmpty: true}
    )
      .pipe($.gp.concat('app-project-base.js'))
      .pipe($.gulp.dest('build/js/'))
      .on('end', $.bs.reload);
  });
};
