const path = require('path')

/**
 * @type {webpack.Configuration}
 */
module.exports = {
  entry: ['./src/index.ts'],
  output: {
    path: path.resolve(__dirname, 'dist/dist'),
    publicPath: '/dist/',
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
}
