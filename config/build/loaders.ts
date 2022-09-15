import webpack from "webpack";

const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
};

export const getLoaders = (): webpack.RuleSetRule[] => [
    typescriptLoader,
];