const path = require('path')

/**
 * @type {webpack.Configuration}
 */
module.exports = {
  mode: 'development',
  entry: ['./src/index.ts'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/js/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.js'],
  },
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    openPage: 'index.html',
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    port: 3000,
    publicPath: '/dist/',
  },
}
