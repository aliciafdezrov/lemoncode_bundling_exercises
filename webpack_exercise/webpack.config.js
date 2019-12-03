const path = require("path");
const basePath = __dirname;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
        extensions: [".js"]
    },
    entry: {
        app: ['./index.js']
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
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
        })
    ]
};