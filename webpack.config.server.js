const webpack = require('webpack');
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("start-server-webpack-plugin");

module.exports =  {
    entry: ["./server/index"],

    watch: true,
    target: "node",
    externals: [nodeExternals({ whitelist: ["webpack/hot/poll?1000"] })],
    module: {
        rules: [
            // { test: /\.js?$/, use: "babel-loader", exclude: /node_modules/ },
            {
                test: /\.ts?$/,
                loader: 'awesome-typescript-loader',
                query: {
                    // disable type checker
                    useTranspileModule : true 
                  }
              }]
    },
    plugins: [
        new StartServerPlugin("server-bundle.js"),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": { BUILD_TARGET: JSON.stringify("server") },
        }),
    ],
    output: { path: path.join(__dirname, "dist"), filename: "server-bundle.js" },
    node: {
        fs: 'empty',
        net: 'empty'
    },
    resolve: {
        // modules: [
        //     path.resolve('./server'),
        //     './node_modules/'
        // ],
        extensions: ['*', '.js', '.ts', '.tsx', '.webpack.js', '.web.js'],
    }
};
