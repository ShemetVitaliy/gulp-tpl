import gulp from 'gulp';
import { path } from './gulp/config/path.js';
// IMPORT PLUGINS
import { plugins } from './gulp/config/plugins.js';
import { images } from './gulp/tasks/images.js';
// IMPORT TASKS
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { server } from './gulp/tasks/server.js';
import { scripts, js } from './gulp/tasks/js.js';
import { fontStyle, ttfToWoff } from './gulp/tasks/fonts.js';

global.app = {
  path,
  gulp,
  plugins
};

function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(ttfToWoff, fontStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, scripts, js, images));

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task('default', dev);
