const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const htmlPluginConfig = {
    inject: true,
    template: paths.htmlPluginTemplate,
};

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: paths.entry,
    output: {
        path: paths.buildPath,
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: paths.src,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(htmlPluginConfig),
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'}),
    ],
};