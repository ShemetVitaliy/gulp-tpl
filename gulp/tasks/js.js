import concat from 'gulp-concat';
import webpack from 'webpack-stream';
import eslint from 'gulp-eslint';

export const scripts = () => {
  return app.gulp
    .src(['node_modules/jquery/dist/jquery.min.js'])
    .pipe(concat('libs.js'))
    .pipe(app.plugins.minify())
    .pipe(app.gulp.src(app.path.src.allJs))
    .pipe(app.gulp.dest(app.path.build.js));
};

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'JS',
          message: 'Error <%= error.message %>'
        })
      )
    )
    .pipe(
      eslint({
        globals: ['jQuery', '$'],
        parserOptions: {
          ecmaVersion: 2020
        }
      })
    )
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(
      webpack({
        mode: app.isBuild ? 'production' : 'development',
        output: {
          filename: 'app.min.js'
        }
      })
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};
