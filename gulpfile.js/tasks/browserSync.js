var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');
var config      = require('../config');
var gulp        = require('gulp');

var options = config.tasks.browserSync;

if(options.historyAPI) {
  options = Object.assign({}, config.tasks.browserSync, {middleware: [historyApiFallback()]});
}

var browserSyncTask = function() {
  return browserSync(options);
};

gulp.task('browserSync', browserSyncTask);
