var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (config, env) {
  config.merge({
    postcss: [
      require('precss'),
      require('postcss-import')(),
      require('postcss-url')(),
      require('postcss-cssnext')({
        browsers: 'last 2 versions',
      })
    ],
    devtool: env === 'prod' ? null : 'cheap-module-inline-source-map'
  });

  config.loader('png', function (cfg) {
    cfg.test = /\.png$/;
    cfg.exclude = /node_modules/;
    cfg.loader = 'url?limit=10000';
    return cfg;
  });

  config.loader('jpg', function (cfg) {
    cfg.test = /\.jpg$/;
    cfg.exclude = /node_modules/;
    cfg.loader = 'url?limit=10000';
    return cfg;
  });

  config.loader('svg', function (cfg) {
    cfg.test = /\.svg$/;
    cfg.exclude = /node_modules/;
    cfg.loader = 'url?limit=10000';
    return cfg;
  });

  if (env === 'static') {
    config.loader('sass', function (cfg) {
      cfg.test = /\.scss$/;
      cfg.loader = ExtractTextPlugin.extract('css?modules&localIdentName=[hash:base64:12]&minimize&importLoaders=1!postcss');
      return cfg;
    });
  } else if (env === 'production') {
    config.loader('sass', function (cfg) {
      cfg.test = /\.scss$/;
      cfg.loader = ExtractTextPlugin.extract('css?modules&localIdentName=[hash:base64:12]&minimize&importLoaders=1!postcss');
      return cfg;
    });
  } else {
    config.loader('sass', function (cfg) {
      cfg.test = /\.scss$/;
      cfg.loader = 'style!css?modules&localIdentName=[path][name]-[local]-[hash:base64:5]&importLoaders=1!postcss';
      return cfg;
    });
    config.devtool = 'cheap-module-inline-source-map';
  }


  config.plugin('extract-css',
    ExtractTextPlugin,
    ['yellow.css', { allChunks: true }]);

  return config;
};