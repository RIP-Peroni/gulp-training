const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

const buildSass = () => {
    console.log('Компиляция SASS');

    return src('src/**/*.scss')
        .pipe(sass({ sourceMap: false }, false))
        .pipe(cleanCSS())
        .pipe(concat('app.css'))
        .pipe(dest('./server/www/styles/'))
};

exports.build = buildSass;
