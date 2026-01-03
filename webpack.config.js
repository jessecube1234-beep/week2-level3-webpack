/** 
* Basic Webpack configuration for the demo project:
  - Entry: src/index.js
  - Output: dist/main.js
  - Mode: development by default (overridden via scripts)
  - DevServer: serves files from dist and opens browser
  - HtmlWebpackPlugin: uses src/index.html as a template
  - Loaders:
    - SCSS via sass-loader, css-loader and style-loader

*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    // Main entry point of the application
    entry: {
        index: './src/index.js',
        main: './src/main.js',
    },

    // Output configuration
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    // Default mode is 'development'
    mode: 'development',

    // Development server configuration
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        compress: true,
        port: 8080,
        open: true,
    },

    // For Day 1 we do not configure loaders yet (only JS bundling).
    module: {
        rules: [
            {
                // Handle .scss files with sass-loader, css-loader, and style-loader
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                // Transpile JS files using Babel (excluding node_modules)
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                    // Babel options are read from babel.config.json
                }
            }
        ]
    },

    plugins: [
        // Generate an index.html in dist using src/index.html as a template
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: "Webpack Bundler Demo"
        }),
        new HtmlWebpackPlugin({
            template: "./src/about.html",
            filename: "about.html",
            title: "About Page"
        })
    ]
};