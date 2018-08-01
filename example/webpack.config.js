var path = require('path');
module.exports = {
  //...
  entry: {
    "index": path.resolve(__dirname, 'index.js')
  },
  devtool: "eval-source-map",
  output: {
    filename: 'bundle.js',
    auxiliaryComment: 'mi app store Comment'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.rtpl$/,
        use: ['babel-loader', '../rtpl-loader']
      }
      /* {
        test: /\.css$/,
        use: [ 
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('autoprefixer')({
                  browsers: 'Android >= 4'
                }),
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [ 
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('autoprefixer')({
                  browsers: 'Android >= 4'
                }),
              ]
            }
          }, {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[ext]',
              // publicPath: publicPath + 'img/'
            }
          }
        ]
      } */
    ]
  }
};