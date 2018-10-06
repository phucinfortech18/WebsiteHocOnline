const path = require('path');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    mode: 'development',
    entry: './app/controllers/index.ts',
    devtool: 'source-map',
    module: {
        rules: [
            //Dong goi Typescript loader
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            //Dong goi FontAwesome
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',    // where the fonts will go
                       // publicPath: '../'       // override the default path
                    }
                }]
            },

            //SASS LOADER ĐỂ ĐÓNG GÓI CÁC FILE SASS
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            minimize: true,
                        }
                    },
                    { loader: "sass-loader" },
                ]
            },

            //CSS LOADER ĐỂ ĐÓNG GÓI CÁC FILE CSS
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" },
                {
                    loader: "css-loader",
                    options: {
                        minimize: true,
                    }
                }],
            },
            //ĐÓNG GÓI HÌNH ẢNH
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "../[path][name].[ext]",
                        limit: 1000,
                    },
                },
            },
        ]
    }, resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './app')
    },
    // plugins: [
    //     new ExtractTextPlugin("styles.css"),
    //   ]
};
