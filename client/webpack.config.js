var webpack = require('webpack');  

module.exports = {  
  context: __dirname,
  entry: "./src/index.jsx",
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 
                     'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: "bundle.js"
  }
};