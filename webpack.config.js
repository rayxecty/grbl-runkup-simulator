const debug   = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require("path");

module.exports = {
    context: path.join(__dirname, "src"),
    devServer: {
        open: true,
        openPage: "index.html",
        contentBase: path.join(__dirname, "src"),
        watchContentBase: true,
        port: 8080,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                // test: /\.js$/,
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                        // presets: [
                        //     '@babel/preset-react',
                        //     [
                        //         "@babel/preset-env",
                        //         {
                        //             "useBuiltIns": "usage",
                        //             "targets": "> 0.25%, not dead"
                        //         }
                        //     ]
                        // ]
                    }
                }
            }
        ]
    },
    entry: {app: './js/index.js'},
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/js/",
        filename: '[name].min.js',
        library: ["com", "example"],
        libraryTarget: 'umd'
    },
    plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};