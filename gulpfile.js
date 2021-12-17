'use strict';

/* Plugins
********************
gulp-load-plugins
gulp-pug
gulp-sass
gulp-csso
gulp-notify
gulp-autoprefixer
gulp-sourcemaps
gulp-browserSync
gulp-concat
*/

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
  gcmq: require('gulp-group-css-media-queries'),
  webp: require('gulp-webp'),
  clean: require('gulp-clean'),

  path: {
    tasks: require('./gulp/config/tasks.js')
  }
};

$.path.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('default',$.gulp.series(
  $.gulp.parallel('pug','sass','scripts','copy','img','img:svg','fonts'),
  $.gulp.parallel('watch','serve')
));

$.gulp.task('build',$.gulp.series(
  $.gulp.parallel('pug','sass','scripts','copy','img','img:svg','fonts')
));
