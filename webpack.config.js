var webpack = require('webpack');

module.exports = {
  entry: {
   dev: ['webpack/hot/dev-server', './demo/demo.js', './main.js'],
   dist: ['./main.js']
  },
  output: {
    path: './',
    filename: 'build/[name].alerts.js',
    libraryTarget: 'umd'
  },
  devtool: 'cheap-module-source-map',
  contentBase: './demo', // for webpack dev server
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass' // sass -> css -> javascript -> inline style
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};
