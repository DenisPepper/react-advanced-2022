import {WebpackConfigOptions} from "./config-build-types";
import type { Configuration as DevServerConfiguration} from 'webpack-dev-server';

export const buildDevServer = (options: WebpackConfigOptions): DevServerConfiguration => {
    const { port } = options;
    return {
        port,
        open: true,
        historyApiFallback: true
    };
};