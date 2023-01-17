const { watch } = require('gulp');

const changeAppStylesFile = (done) => {
    console.log('Ой, файл app.scss изменился');

    done();
};

const checkFileStructure = (done) => {
    console.log('Изменилась структура файлов');

    done();
};

const watchers = () => {
    watch('src/sass/app.scss', { events: 'change' }, changeAppStylesFile);
    watch('src/sass/', { events: ['add', 'unlink'] }, checkFileStructure);
};

exports.watchers = watchers;
