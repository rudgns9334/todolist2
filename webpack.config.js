const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devServer: {
        static : "./dist"
    },
    entry:'./src/main.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: ['style-loader' ,'css-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({template:'./index.html'})// ./을 안넣으면 auto구만...
    ],
};