const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vendors: './client/modules/vendors.js',
        app: './client/modules/app.js',
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['commons', 'vendors']
        }),
        new CopyWebpackPlugin([
            { from: './client/index.html', to: 'index.html' }
        ]),
        new HtmlWebpackPlugin({
            inject: 'head',
            chunks: ['commons', 'vendors', 'app'],
            filename: 'index.html',
            template: path.resolve(__dirname, 'client/index.html')
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.sol/,
                use: 'raw-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    {
                        loader: 'ng-annotate-loader',
                        options: {
                            add: true
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['es2015-native-modules']
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                loaders: [
                    'html-loader'
                ]
            },
            {
                test: /\.(scss|sass|css)$/,
                loaders: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        {
                            loader: 'css-loader',
                            query: {
                                autoprefixer: true
                            }
                        },
                        // 'postcss-loader',
                        'resolve-url-loader',
                        {
                            loader: 'sass-loader',
                            query: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(eot|[ot]tf|woff2?|svg)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/fonts/[name].[ext]?[hash]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                exclude: [/fonts/],
                loaders: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'assets/images/[hash:6].[ext]?[hash]'
                        }
                    }
                ]
            },
        ],
        loaders: [
            { test: /\.json$/, use: 'json-loader' },
        ]
    }
};
