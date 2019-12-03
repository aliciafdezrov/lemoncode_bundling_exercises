const path = require("path");
const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
        extensions: [".js", ".jsx"]
    },
    entry: {
        app: ['./index.js']
    },
    output: {
        filename: '[name].js'
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
    }
};