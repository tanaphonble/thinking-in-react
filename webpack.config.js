module.exports = {
    entry: { index: ['./index.js'] },
    output: {
        path: './bin/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
}
