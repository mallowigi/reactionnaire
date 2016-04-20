var path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      './src/main.js'
    ]
  },
  output: {
    filename: './public/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'src'),
        loader: 'style!css!stylus-loader'
      }
    ]
  }
}
