var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: './js/index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'app.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "raw-loader",
            },
        ]
    },
    devServer: {
        port: 8080,
        publicPath: "./dist"
    },
    watch: true,
    devtool: "inline-source-map",
    plugins: [
        new LiveReloadPlugin({appendScriptTag: true})
    ]
};
