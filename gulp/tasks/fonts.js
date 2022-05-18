export const destFonts = () => {
  return app.gulp
    .src(`${app.path.srcFolder}/fonts/*.*`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'FONTS',
          message: 'Error <%= error.message %>'
        })
      )
    )
    .pipe(app.gulp.dest(`${app.path.build.fonts}`));
};
