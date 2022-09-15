export type WebpackRunMode = 'production' | 'development';

export type WebpackConfigPaths = {
    entry: string;
    output: string;
    html: string;
};

export type WebpackConfigOptions = {
    mode: WebpackRunMode;
    paths: WebpackConfigPaths;
};