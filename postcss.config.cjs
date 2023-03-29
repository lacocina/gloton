module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-normalize'),
    require('postcss-custom-media'),
    require('postcss-atroot'),
    require('postcss-preset-env'),
    require('postcss-custom-selectors'),
    require('postcss-discard-comments'),
    require('@csstools/postcss-nested-calc'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
}
