const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.join(__dirname, 'index.js')
    },
    output: {
        path: path.join(__dirname, 'public')
    },
    devServer: {
        port: 3000,
        open: 'chrome'
    },
    mode: 'development',
    module: {},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        })
    ]
}