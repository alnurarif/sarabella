const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .postCss('resources/css/style.css','public/css')
    .postCss('resources/css/modal.css','public/css')
    .postCss('resources/css/pages/admin_panel.css','public/css/pages')
    .postCss('resources/css/pages/home.css','public/css/pages')
    .js('resources/js/pages/admin_panel.js','public/js/pages')
    .setResourceRoot("/");