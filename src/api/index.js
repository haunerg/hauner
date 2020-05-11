// import { createAPI } from '../util';
import { Request } from 'buriedPoint';
let env = process.env.NODE_ENV
let path = {
    // dev
    development:`192.168.10.142:8808`,
    // 200
    lan: `http://192.168.10.200:8005/`,
    // 测试
    pred: `https://dgateway.allhome.com.cn/tmemetting`,
    // 线上
    prod: `https://gateway.allhome.com.cn/tmemetting`,
    //测试新增环境
    dtest: `http://192.168.10.200:8005/exam`
}
const baseURL = path[env]

// export let cerateApi = createAPI(baseURL);

const request = new Request({
    baseURL,
    timeout: 600000,
}, env === "prod" ? 'production' : env, 'yourWebAppName');
window.token = window.token || "hkw5nkLhs4Wzh2SakqlRxp4D1hOHHAjhmUMrJ/C67swcpWZz+96cyl9n0znpxeyOqDZbGyhtnM5qHT/nkGWxAe/KGpFa1Y+fAZT8W5bT1V4gnH8QCNNgCcmZXUWXaONpVvAmdGfNrzQlj6o1f6iBZ5lB20aMsKEF8llJwCfRt6x1NWSFAnN9xQcUdW+xHPjGYk0zjdcdsVUxpx20vSkeq5KItq8a9yzbuUZoj2M6KaFI9P7DzJkzwM4KjNQO33iysLX72e+TuF17dO03OvZBHlBbRNO672d/UReUalFUzBiRHvAfMvenkvR/6XvimKbOihKPZST3HT7+eu3ES4h3aQ=="
// 设置拦截器
request.interceptors({
    request: config => {
        config.headers.token = window.token;
        return config
    },
    response: res => {
        let { message, result, statusCode } = res.data
        //  退出登录状态码
        let logoutCodes = new Set([435001, 435011, 436050])
        if (statusCode === 1000) {
            //  更新全局token
            let { pragma } = res.headers
            if (pragma) window.token = pragma
            //  返回数据
            return result
        } else if (logoutCodes.has(statusCode)) {
            setTimeout(() => window.logout(), 1000)
            return Promise.reject({ message })
            // return Promise.resolve()
        } else {
            return Promise.reject({ message, statusCode })
        }
    },
    error: error => {
        return error.data ? Promise.reject(error.data) : Promise.reject(error)
    }
})
export default request.axios;
