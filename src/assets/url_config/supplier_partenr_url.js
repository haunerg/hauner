let path = {
    //  200
    development:`http://192.168.10.200:8016/`,

    //刘俊伟
    // development:`http://192.168.10.184:8016/`,

    //  200
    lan: `http://192.168.10.200:8016/`,

    //  测试
    pred: `https://dfinance.allhome.com.cn/`,

    //  线上
    production: `https://finance.allhome.com.cn`
}

//  环境变量
let SupplierUrl = path[process.env.NODE_ENV];

export default SupplierUrl;