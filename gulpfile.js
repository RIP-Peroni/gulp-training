const { src, dest, parallel } = require('gulp');

const copyScss = () => {
    return src('src/sass/*.scss')
        .pipe(dest('build/styles'));
};

exports.default = copyScss;
