const path = require("path");
const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx"]
    },
    entry: {
        styles: ["./styles/index.scss"],
        app: ['./index.tsx']
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
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: "url-loader?limit=5000"
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
        ]
    }
};