const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './src/index.js',
        ],
    },

    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },

    devServer: {
        overlay: true,
        stats: 'errors-only',
        contentBase: './public',
        port: 3000
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                query: { compact: false },
                loader: 'babel-loader',
            },

            {
                test: /\.sass$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: __dirname
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    },
                ],
            },

            {
                test: /\.(woff|woff2|eof|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
    ],
}