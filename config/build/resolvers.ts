import webpack from "webpack";

export const getResolvers = (): webpack.ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
});