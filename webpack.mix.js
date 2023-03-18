let mix = require('laravel-mix');


mix.js('src/index.js', 'index.js').react().setPublicPath('dist');
mix.copy('src/index.html', 'dist/index.html');
mix.copy('src/assets/images', 'dist/images');


mix.disableSuccessNotifications();
