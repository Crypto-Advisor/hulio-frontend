const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer')

module.exports = {
    entry: {
      home: path.resolve('src/pages/home/home.tsx'),
      advancedSettings: path.resolve('src/pages/advanced-settings/advanced-settings.tsx'),
      info: path.resolve('src/pages/info/info.tsx'),
      settings: path.resolve('src/pages/settings/settings.tsx'),
      tutorials: path.resolve('src/pages/tutorials/tutorials.tsx'),
      welcome: path.resolve('src/pages/welcome/welcome.tsx'),
        //popup: path.resolve('src/extension/popup.tsx'),
        //options: path.resolve('src/options/options.tsx'),
        // background: path.resolve('src/background/background.ts'),
        // contentScript: path.resolve('src/contentScript/contentScript.ts')
    },
    module: {
        rules: [
            { 
                use: 'ts-loader',
                test: /\.tsx?$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                          importLoaders: 1,
                        },
                    },
              ],
            },
            {
                type: 'assets/resource',
                test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
            },
        ]
    },
    "plugins": [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve('src/static'),
                to: path.resolve('dist')
            }]
        }),
        ...getHtmlPlugins([
            'popup',
            'options',
        ])
    ],
    resolve: {
        extensions: ['.tsx', '.js', '.ts']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    }
}

function getHtmlPlugins(chunks){
    return chunks.map(chunk => new HtmlPlugin({
        title: 'React Extension',
        filename: `${chunk}.html`,
        chunks: [chunk]
    }))
}