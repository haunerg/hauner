
// import { Request } from 'buriedPoint';
import axios from 'axios'
// 引入工具类--消息提示框
import commonUtil from '@/assets/js/common_util.js';

axios.defaults.timeout = 60000
axios.interceptors.request.use((config) => {
	config.headers.token = window.token || 'aB/80UfOTOmkPw7MFgbe1ukb6TGaX7UfYMgj5rMrmKUI01p/I35J4V4nlIJjzoK3Mspk90fY+UqSXoB+DrXEf3Y2EyA+DewtioNDtfseFrGiiGm0jc/yg1hVBoyXzV9M3yNkqP4hBtmCpy0z5dcoDIemRDcQADaZFYCBDELhkGac9ACnZl5zX9IJqWJKhj+9neM5IrGNQATsFf6Xn37uL6NULCJm+0NgU5alEjAc6BOWa2U2WNeCYxItencARSO7TMaWzYDkyKgIwW77NyqmGHsMQCLYzEHHdWRAL3FA7BrvGQ18q2lLLLSlpipUcdoDpat8UXria8wPzvV+XWOH0Q==';
	return config
}, (error) => {
	return Promise.reject(error)
})
axios.interceptors.response.use((res) => {
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
    } else {
        commonUtil.setMessage('warning', message)
        return Promise.reject({ message, statusCode })
    }
}, (error) => {
    commonUtil.setMessage('warning', error.data.message)
})

export default axios
