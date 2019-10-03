var path = require('path');

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