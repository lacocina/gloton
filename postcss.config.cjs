module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-normalize'),
    require('postcss-atroot'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
}
