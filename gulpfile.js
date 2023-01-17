const { src, dest } = require('gulp');

const copyScss = () => {
    return src('src/**/*.scss', '!src/project/**')
        .pipe(dest('build/styles'));
};

// const task = () => {
//     return src('файл с которым работаем')
//         .pipe(pluginOne()) // Обработка первым плагином
//         .pipe(pluginTwo()) // Обработка вторым плагином
//         .pipe(pluginN()) // Обработка ещё каким-нибудь плагином
//         .pipe(dest('путь, по которому расположим обработанный файл'));
// };

exports.default = copyScss;
