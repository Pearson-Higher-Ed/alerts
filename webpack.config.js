// [name] under the output section denotes the entry prop names
module.exports = {
  entry: {
   dev: ['webpack/hot/dev-server', './main.js', './demo/demo.js'],
   dist: ['./main.js']
  },
  output: {
    path: './',
    filename: 'build/[name].component-name.js',
    libraryTarget: "umd"
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ],
  contentBase: "./demo", // for webpack dev server
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
        loader: 'style!css!sass', // sass -> css -> javascript -> inline style
        exclude: /node_modules/
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
        loader: 'json',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|ttf|eot|svg)(\?[a-z0-9]+)?$/,
        loader: 'url?limit=100000',
        exclude: /node_modules/
      }
    ]
  }
};
