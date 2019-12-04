const merge = require('webpack-merge');
const base = require('./webpack.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(base, {
    mode: 'production',
    output: {
        filename: '[hash].[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                            },
                            localsConvention: 'camelCase',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            hash: true,
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        }),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.jsx$|\.scss$|\.css$|\.html$/,
            threshold: 1024,
            minRatio: 0.8,
            deleteOriginalAssets: true
        }),
    ]
});