module.exports = (env, options) => {

    console.log(`Building in 'mode': ${options.mode}`);

    const config = {
        entry: './src/lib/tabzmania.js',
        output: {
            path: __dirname + "/bin",
            filename: 'site.build.js'
        },
        module: {
            rules: [{
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }]
        }
    };

    if (options.mode === "development") {
        config.devtool = 'source-map';
    }

    return config;
}