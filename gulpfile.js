const { src, dest } = require('gulp');

const copyScss = () => {
    return src('src/**/*.scss', '!src/project/**')
        .pipe(dest('build/styles'));
};

exports.default = copyScss;
