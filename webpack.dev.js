const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: './dist',
    port: 3044,
    proxy: {
      '/graphql': 'http://localhost:8089',
    },
    /*overlay: {
            errors: true,
            warnings: true,
        },*/
  },
  module: {
    rules: [{
      test: /(\.css|\.scss)$/,
      use: [{
        loader: 'css-hot-loader',
      }].concat(ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: { sourceMap: true },
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true },
        }],
        // use style-loader in development
        fallback: 'style-loader',
      })),
    }],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: (getPath) => getPath('css/[name].css'),
      allChunks: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});