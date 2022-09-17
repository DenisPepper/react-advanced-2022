import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {WebpackConfigPaths} from "./types";

export const buildPlugins = (paths: WebpackConfigPaths): webpack.WebpackPluginInstance[] => [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
        template: paths.html
    }),
];