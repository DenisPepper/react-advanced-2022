import webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {WebpackConfigOptions} from "./config-build-types";

export const buildLoaders = ({devMode}: WebpackConfigOptions): webpack.RuleSetRule[] => {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {   loader: "css-loader",
                options: {
                    modules: true,
                },
            },
            "sass-loader",
        ],
    }

    return [typescriptLoader, sassLoader]
};