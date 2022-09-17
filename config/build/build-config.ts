import path from "path";
import {buildPlugins} from "./build-plugins";
import {buildLoaders} from "./build-loaders";
import {buildResolvers} from "./build-resolvers";
import webpack from "webpack";
import {WebpackConfigOptions} from "./types";
import {buildDevServer} from "./build-dev-server";

export const buildConfig = (options: WebpackConfigOptions): webpack.Configuration => {
    const {mode, paths, devtool} = options;
    return {
        mode,
        entry: paths.entry,
        output: {
        filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugins(paths),
        module: {rules: buildLoaders(),},
        resolve: buildResolvers(),
        devtool,
        devServer: buildDevServer(options),
    }
};