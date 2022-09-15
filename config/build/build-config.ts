import path from "path";
import {getPlugins} from "./plugins";
import {getLoaders} from "./loaders";
import {getResolvers} from "./resolvers";
import webpack from "webpack";
import {WebpackConfigOptions} from "./types";

export const getWebpackBuildConfig = (options: WebpackConfigOptions): webpack.Configuration => {
    const {mode, paths} = options;
    return {mode,
        entry: paths.entry,
        output: {
        filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
    },
    plugins: getPlugins(paths),
        module: {rules: getLoaders(),},
    resolve: getResolvers(),
    }
};