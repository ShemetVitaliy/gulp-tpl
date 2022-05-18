import fileInclude from 'gulp-file-include';
import versionNumber from 'gulp-version-number';
import gulpHtmlMin from 'gulp-htmlmin';

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'HTML',
          message: 'Error <%= error.message %>'
        })
      )
    )
    .pipe(fileInclude())
    .pipe(
      app.plugins.if(
        app.isBuild,
        versionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: 0,
            to: ['css', 'js']
          },
          output: {
            file: 'gulp/version.json'
          }
        })
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        gulpHtmlMin({
          collapseWhitespace: true,
          removeComments: true
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};
