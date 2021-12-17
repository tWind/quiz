module.exports = function () {
  $.gulp.task('sass', function () {
    return $.gulp.src('src/app-project.sass')
      .pipe($.gp.sourcemaps.init())
      .on("error", $.gp.notify.onError({
        message: "Error: <%= error.message %>",
        title: "style"
      }))
      .pipe($.gp.csso({
        forceMediaMerge: true
      }))
      .pipe($.gp.sass({outputStyle: 'expanded'}))
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 10 versions']
      }))
      // .pipe($.gp.sourcemaps.write('./'))
      // Group media queries
      // .pipe($.gulp.dest('build/css/'))
      // .pipe($.gcmq())
      // .pipe($.gulp.dest('build/css/'))
      // Минифицированная версия
      .pipe($.gp.sass({outputStyle: 'compressed'}))
      .pipe($.gp.rename('app-project.min.css'))
      .pipe($.gp.sourcemaps.write('./'))
      .pipe($.gulp.dest('build/css/'))
      .on('end', $.bs.reload);

    // .pipe($.bs.reload({
    //     stream:true
    // }));
  });
}
//
// gulp.task('default', function () {
//   gulp.src('src/style.css')
//     .pipe(gcmq())
//     .pipe(gulp.dest('dist'));
// });
