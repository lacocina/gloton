module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-normalize'),
    require('postcss-custom-media'),
    require('postcss-atroot'),
    require('postcss-discard-comments'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
}
