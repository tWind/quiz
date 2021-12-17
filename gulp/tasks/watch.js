module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch(['src/tpls/**/*.pug','src/blocks/**/{,*/}*.pug'], $.gulp.series('pug'));
    $.gulp.watch(['src/static/sass/**/{,*/}*.{scss,sass}','src/blocks/**/{,*/}*.{scss,sass}', 'src/**/{,*/}*.{scss,sass}'], $.gulp.series('sass'));
    $.gulp.watch([
      'src/static/libs/**/{,*/}*.js',
      'src/static/js/**/{,*/}*.js',
    ], $.gulp.series('scripts'));
    $.gulp.watch('src/static/img/**/{,*/}*.{png,gif,jpg,jpeg,bmp}', $.gulp.series('img'));
    $.gulp.watch('src/static/img/**/{,*/}*.svg', $.gulp.series('img:svg'));
    $.gulp.watch('src/static/fonts/**/{,*/}*.{woff,truetype,opentype,svg,otf,ttf}', $.gulp.series('fonts'));
    $.gulp.watch('src/static/svg/*', $.gulp.series('svg'));
    $.gulp.watch('src/static/js/app-project-run.js', $.gulp.series('copy'));
  });
}
