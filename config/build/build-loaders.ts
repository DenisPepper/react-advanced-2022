import webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
};

const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader",
    ],
}

export const buildLoaders = (): webpack.RuleSetRule[] => [
    typescriptLoader, sassLoader
];