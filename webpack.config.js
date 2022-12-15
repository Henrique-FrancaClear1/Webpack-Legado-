const webpack = require('webpack')

module.exports = {
    //onde a aplicção sera inicializada (ponto de entrada)
    entry: './ex/index.js',
    output: {
        path: __dirname + './public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080, 
        contentBase: './public' 
    }
}


