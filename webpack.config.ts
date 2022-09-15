import path from 'path';
import webpack from 'webpack';
import { getPlugins } from './config/build/plugins';
import { getLoaders } from "./config/build/loaders";

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: getPlugins(),
    module: {
        rules: getLoaders(),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

export default config;