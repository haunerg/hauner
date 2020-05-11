import Vue from 'vue'
export default {
    /**
    * 消息提示框
    * 新增、修改、删除、审核、驳回等操作调用该提示框
    * @param type 只有success和warning
    * @author 郭梦娜
    * @date 2020-2-21
    **/
    setMessage: function (type, message) {
        Vue.prototype.$message({
            message: message,
            type: type,
            duration: 5000,
            showClose: true,
        })
    }
}
