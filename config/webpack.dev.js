const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    static: paths.public,
    open: true,
    compress: true,
    hot: true,
    port: 3000,
    proxy: {
      '/api/': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        ws: true,
      },
      '/uploads/': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        ws: true,
      },
      '/oauth/': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        ws: true,
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
        ],
      },
    ],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
