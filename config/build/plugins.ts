import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {WebpackConfigPaths} from "./types";

export const getPlugins = (paths: WebpackConfigPaths): webpack.WebpackPluginInstance[] => [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
        template: paths.html
    }),
];