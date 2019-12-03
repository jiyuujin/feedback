const path = require('path')

module.exports = {
    chainWebpack: config => {
        // Svgファイルにexternalクエリが存在する場合file-loaderを使う
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .oneOf('external')
            .resourceQuery(/external/)
            .use('file-loader')
            .loader('file-loader')
            .end()
            .end()
            .oneOf('inline')
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/,
                    exclude: /node_modules/,
                    use: [
                        'vue-loader',
                        {
                            loader: 'markdown-to-vue-loader',
                        }
                    ]
                }
            ]
        },
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        }
    }
}
