import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export const getBuildPlugins = () => [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
        template: path.resolve('public', 'index.html')
    }),
];