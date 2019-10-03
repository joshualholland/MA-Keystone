var path = require('path');

// TODO
// Have to create production build that will bundle.min.css for performance
// Use MiniCssExtractPlugin to do this
// https://github.com/babel/babel/issues/7254_ Polyfill as entry point poss problem

const clientConfig = {
    mode: 'development',
    entry: ['@babel/polyfill', './client/index.jsx'],
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
            test: /.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
        },
        {
            test: /.css?$/,
            use: ['style-loader', 'css-loader']
        },
        {
          test: /.scss?$/,
          use: ['sass-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.jsx', '.js', '.css']
    },
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'public/js')
    }
  };

module.exports = [clientConfig];