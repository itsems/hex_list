const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/hex_list/'
        : '/'
    ,
    // drop_console
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            return {
                optimization: {
                    minimizer: [
                        new TerserPlugin({
                            sourceMap: false,
                            terserOptions: {
                                compress: {
                                    drop_console: true
                                }
                            }
                        })
                    ]
                }
            }
        }
    }
}