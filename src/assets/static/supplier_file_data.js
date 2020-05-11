/*
 *@Date: 2019-12-24 11:55:35
 *@information: 修改时间
 */
export const fileDate = {
    data() {
        return {
            searchForm:{
                companyName:''
            },// 请求列表的公司名称
            tableHead:[], //表头
            tableList:[], //表体
            addform:{},//新增表单
            count: 120, //共多少条
            index:1, //序号
            supplierForm:{},//修改表单
            tempId:1,// 临时储存id
            tempCompanyName:'',//临时输入内容
            downFlag:false, // 导出loading
            btnFlag:false, //导出按钮可用开关
            percentage:0, // 导出进度
            tableLoading:false, // 表格loading
            addDrawerMark: false, //新增侧滑标记
            updateDrawerMark:false, //修改侧滑标记
            tableRowBright: false, //表格高亮标记
            deletePopUpMark:false, //删除弹窗标记
            delLoading: false, //删除loading
            size:20,//每条显示页数
            page:1, //当前页数
            timer:null
        }
    }
}