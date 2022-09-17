import path from "path";
import {buildPlugins} from "./build-plugins";
import {buildLoaders} from "./build-loaders";
import {buildResolvers} from "./build-resolvers";
import webpack from "webpack";
import {WebpackConfigOptions, WebpackRunMode} from "./config-build-types";
import {buildDevServer} from "./build-dev-server";

const isDev = (mode: WebpackRunMode) => mode === 'development';

export const buildConfig = (options: WebpackConfigOptions): webpack.Configuration => {
    const {mode, paths, devtool} = options;
    const devMode = isDev(mode);
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
        devtool: devMode ? devtool : undefined,
        devServer: devMode ? buildDevServer(options) : undefined,
    }
};