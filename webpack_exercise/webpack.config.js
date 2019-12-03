const path = require("path");
const basePath = __dirname;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
        extensions: [".js", ".ts"]
    },
    entry: {
        app: ['./index.ts']
    },
    output: {
        filename: '[name].js'
    },
    watchOptions: {
        ignored: /node_modules/
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'all',
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    enforce: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",
                options: {
                    useBabel: true,
                    babelCore: "@babel/core"
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
        })
    ]
};