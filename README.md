# quiz-granel-layout
Верстка викторины "КВИЗ Гранель верстка" на Gulp

## Что включает в себя сборка?
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — автоматически расставляет вендорные префиксы в CSS в соответствии с сервисом [Can I Use](https://caniuse.com/);
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) — компиляция Pug в HTML;
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) - конкатенация файлов;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) — компиляция SASS, SCSS в CSS;
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) — переименование файлов;
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) — создание карты sourcemap;
* [gulp-notify](https://www.npmjs.com/package/gulp-notify) — уведомление о событиях;
* [gulp-csso](https://www.npmjs.com/package/gulp-csso) — объединение дублирующихся классов;
* [gulp-watch](https://www.npmjs.com/package/gulp-watch) — отслеживание изменений в файлах проекта;
* [Browsersync](https://browsersync.io/docs/gulp) — автообновление браузера;
* [gulp-cheerio](https://www.npmjs.com/package/gulp-cheerio) — удаление лишних атрибутов из svg;
* [gulp-replace](https://www.npmjs.com/package/gulp-replace) — фиксинг возможных багов при сборке svg спрайта;
* [breakpoint-sass](https://www.npmjs.com/package/breakpoint-sass) — упрощенный синтаксис для написания медиа-запросов;
* [gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries) — постобработка CSS: групповые медиа-запросы;
* [gulp-webp](https://www.npmjs.com/package/gulp-webp) — преобразование изображений в WebP;

## Как пользоваться?

Установить ```Node JS```

Далее, используя ```cmd``` в Windows или Терминал Linux/macOS, проделайте следующие шаги:

* Скачать сборку: ```git clone https://github.com/front-end-with-love/promonado-template```;
* Ставим утилиту глобально ```$ npm install gulpjs/gulp-cli -g```;
* Устанавливаем ```Gulp 4``` в папку с проектом ```$ npm install gulp --save-dev```;
* Проверка версии gulp и чтобы убедиться, что все корректно установлено: ```gulp -
  gulp -v```;

## Начало работы

* Устанавливаем пакеты из package.json: ```npm i```;
* Основная команда: ```gulp``` запускает слежку за файлами ```gulp-watch``` и ```browserSync```
* Сборка проекта: ```gulp build``` проект собирается в папке ```build```
***
