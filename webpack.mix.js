const mix = require('laravel-mix');

mix.js('src/js/app.js', 'public/js')
    .sass(`src/scss/main.scss`, `public/css`, {}, [
        require("tailwindcss")
    ])
    // .copy('src/fonts', 'public/fonts')

    mix.options({
        processCssUrls: false
    }); 