const { src, dest, watch } = require('gulp');

const copyCSS = () => {
    return src('project/**/*.css')
        .pipe(dest('server/dist'));
};

const watchers = () => {
    watch('project', copyCSS);
};

exports.watchers = watchers;
exports.copyCSS = copyCSS;
exports.default = copyCSS;
