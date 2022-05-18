import imageMin from 'gulp-imagemin';

export const images = () => {
  return app.gulp
    .src(app.path.src.images)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'IMAGES',
          message: 'Error <%= error.message %>'
        })
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        imageMin([
          imageMin.gifsicle({ interlaced: true }),
          imageMin.mozjpeg({ quality: 70, progressive: true }),
          imageMin.optipng({ optimizationLevel: 5 }),
          imageMin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
          })
        ])
      )
    )
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browserSync.stream());
};
