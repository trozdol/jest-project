export default {
    module: {
        loaders: [
            { 
                exclude: ['node_modules'], 
                loader: 'ts-loader', 
                test: /\.ts?$/
            }
        ]
    },
    resolve: {
        extensions: ['', 'js', 'ts'],
        modules: [ 'node_modules' ]
    }
}
