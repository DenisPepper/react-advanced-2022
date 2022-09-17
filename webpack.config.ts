import path from 'path';
import webpack from 'webpack';
import {buildConfig} from "./config/build/build-config";
import {WebpackEnvOptions} from "./config/build/types";

const DEFAULT_MODE = 'development';
const DEVTOOL_OPTION = 'eval-source-map';
const DEV_SERVER_PORT = 3000;

const config = (env: WebpackEnvOptions): webpack.Configuration => buildConfig({
    mode: env.mode || DEFAULT_MODE,
    paths: {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    },
    devtool: DEVTOOL_OPTION,
    port: env.port || DEV_SERVER_PORT,
});

export default config;