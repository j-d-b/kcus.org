const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const webpack = require('webpack');

module.exports = (env, argv) => ({
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          babelrc: false
        }
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: './src/images', to: './images' },
      { from: './src/images/favicons/favicon.ico', to: './' },
      { from: './src/index.html', to: './' },
      { from: './src/netlify/_redirects', to: './' }
    ]),
    new ImageminPlugin({
      disable: argv.mode !== 'production',
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        speed: 10,
        quality: '50-70'
      },
      jpegtran: {
        optimize: true
      }
    })
  ]
});
