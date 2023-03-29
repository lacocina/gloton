module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-normalize'),
    require('postcss-preset-env')({ stage: 0 }),
    require('postcss-discard-comments'),
    require('autoprefixer'),
  ],
}
