const { src, dest } = require('gulp');

const copyFile = () => {
    return src('src/sass/app.scss')
        .pipe(dest('build/styles'));
};

exports.default = copyFile;
