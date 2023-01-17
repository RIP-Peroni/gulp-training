const { watch } = require('gulp');

const changeAppStylesFile = (done) => {
    console.log('Ой, файл app.scss изменился');

    done();
};

const watchers = () => {
    watch('src/sass/app.scss', changeAppStylesFile);
};

exports.watchers = watchers;
