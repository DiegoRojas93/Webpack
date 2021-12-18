const path = require ('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bindle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  modules: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    port: 3006,
    open: true
  }
}