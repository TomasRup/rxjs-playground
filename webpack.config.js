var path = require("path");


module.exports = {
    entry: ['whatwg-fetch', './app'],
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    devServer: {
        headers: { "Access-Control-Allow-Origin": "*" }
    },
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};
