const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.join(__dirname, 'index.js')
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/'
    },
    devServer: {
        port: 3000,
        open: 'chrome',
        historyApiFallback: true
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        })
    ]
}