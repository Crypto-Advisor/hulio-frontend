const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        { 
            test: /\.css$/, 
            use: ["style-loader", "css-loader"] 
        },
        {
            test: /\.svg$/, 
            loader: '@svgr/webpack'
        }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};