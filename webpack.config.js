const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: {
        main: ["@babel/polyfill", path.join(__dirname, 'index.js')]
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        sourceMapFilename: '[file].map',
        chunkFilename: '[name].[chunkhash:4].js',
        publicPath: '/'
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 3000,
        open: 'Chrome',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { 
                        loader: 'postcss-loader', 
                        options: { 
                            // fix postcss config no found
                            options: {
                                name: '[name].[ext]'
                            }
                            
                        }
                    },
                    { loader: 'sass-loader'}
                ]
            },
            {
                test: /\.html$/,
                use: [
                    { 
                        loader: 'html-loader', 
                        options: { 
                            attrs: ['img:src'], 
                            minimize: true 
                        } 
                    }
                ]
            },
            {
                test: /\.(jpg|gif|png|svg)$/,
                use: [
                    { 
                        loader: 'file-loader', 
                        options: { 
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        } 
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new Dotenv(),
        new CleanWebpackPlugin(['public'], { root: path.join(__dirname, '/') }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash:8].css',
            chunkFilename: '[id]-[contenthash:8].css'
        }),
        new ManifestPlugin(),
        //new BundleAnalyzerPlugin()
    ],
    /*
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-loadable|react-redux|react-router-dom|react-router-redux|react-day-picker)/,
                    name: 'react',
                    chunks: 'all',
                    priority: 20
                },
                common: {
                    name: 'common',
                    chunks: 'async',
                    minChunks: 2,
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    }
    */
}