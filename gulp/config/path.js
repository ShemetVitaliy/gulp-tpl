import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`
  },
  src: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/*.scss`,
    js: `${srcFolder}/js/app.js`,
    allJs: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.*`,
    svg: `${srcFolder}/img/**/*.svg`,
    fonts: `${srcFolder}/fonts/`
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.*`
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
  ftp: ``
};
