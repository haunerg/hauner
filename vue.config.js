let glob = require('glob');

let titles = {
    merchant_manage:"平台商户管理",
    partner_management:"合作商管理",
    supplier_file:"供应商管理"
};

function getEntry(globPath) {
    let entries = {}, tmp, htmls = {};
    glob.sync(globPath+'html').forEach(function(entry) {
        tmp = entry.split('/').splice(-3);
        htmls[tmp[1]] = entry
    })
    glob.sync(globPath+'js').forEach(function(entry) {
        tmp = entry.split('/').splice(-3);
        entries[tmp[1]] = {
            entry,
            template: 'index.html', 
            filename:tmp[1] + '.html',
            title:titles[tmp[1]]
        };
    });
    return entries;
};
let htmls = getEntry('./src/instance/**/*.');
module.exports = {
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'element-ui': 'ELEMENT',
            "common": 'QjMethod'
        }
    },
    pages:htmls,
    publicPath: './',           
    outputDir: 'dist',        
    devServer: {
        open: true,             
        index: '/supplier_file.html'    
    },
    productionSourceMap: false
};
