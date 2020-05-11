let pages = require('./.pages')
module.exports = {
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'element-ui': 'ELEMENT',
            "common": 'QjMethod'
        }
    },
    pages,
    publicPath: './',           
    outputDir: 'dist',        
    devServer: {
        open: true,             
        index: '/supplier_file.html'    
    },
    productionSourceMap: false
};
