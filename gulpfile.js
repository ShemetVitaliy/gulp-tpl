import gulp from 'gulp';
import { path } from './gulp/config/path.js';
// IMPORT PLUGINS
import { plugins } from './gulp/config/plugins.js';
// IMPORT TASKS
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { server } from './gulp/tasks/server.js';
import { scripts, js } from './gulp/tasks/js.js';
import { zip } from './gulp/tasks/zip.js';
import { destFonts } from './gulp/tasks/fonts.js';
import { ftp } from './gulp/tasks/ftp.js';
import { images } from './gulp/tasks/images.js';

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
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

const mainTasks = gulp.series(destFonts, gulp.parallel(html, scss, scripts, js, images));
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);
const deployFtp = gulp.series(reset, mainTasks, ftp);

export { dev, build, deployZip, deployFtp };

gulp.task('default', dev);
