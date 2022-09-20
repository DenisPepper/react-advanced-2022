import webpack from "webpack";
import {WebpackConfigOptions} from "./config-build-types";

export const buildResolvers = (options: WebpackConfigOptions): webpack.ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
});