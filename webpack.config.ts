import path from 'path';
import webpack from 'webpack';
import {buildConfig} from "./config/build/build-config";

enum WebpackRunMode {
    Production = 'production',
    Development = 'development'
};

const DEVTOOL_OPTION = 'eval-source-map';

const config: webpack.Configuration = buildConfig({
    mode: WebpackRunMode.Production,
    paths: {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    },
    devtool: DEVTOOL_OPTION,
});

export default config;