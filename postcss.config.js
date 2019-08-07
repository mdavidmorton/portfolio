module.exports = ctx => ({
  map: { inline: (ctx.env !== 'production') },
  plugins: {
    'postcss-import': { root: ctx.file.dirname },
    'postcss-mixins': {},
    'postcss-preset-env': { stage: 1 },
    'postcss-nested': {},
    'cssnano': ctx.env === 'production' ? {} : false
  }
});
