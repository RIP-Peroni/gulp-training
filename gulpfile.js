const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const buildSass = () => {
    console.log('Компиляция SASS');

    return src('src/sass/*.scss')
        .pipe(sass())
        .pipe(dest('build/styles/'));
};

exports.build = buildSass;
