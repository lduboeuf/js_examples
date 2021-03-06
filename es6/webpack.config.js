var path = require('path');
    module.exports = {
        entry: './src/main.js',
        output: {
            path: __dirname,
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['', '.js'],
            modulesDirectories: ["./src", "node_modules", "bower_components"]
        }
    };