import concat from "gulp-concat";
import webpack from 'webpack-stream';

export const scripts = () => {
  return app.gulp.src([
    'node_modules/jquery/dist/jquery.min.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(app.gulp.dest('src/js'))
    .pipe(app.gulp.dest('dist/js'));
};

export const js = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'JS',
        message: 'Error <%= error.message %>'
      }))
    )
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'app.min.js'
      }
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream())
};