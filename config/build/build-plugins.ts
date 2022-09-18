import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {WebpackConfigPaths} from "./config-build-types";

export const buildPlugins = (paths: WebpackConfigPaths): webpack.WebpackPluginInstance[] => [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
        template: paths.html
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    })
];