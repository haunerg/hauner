import axios from '@/api/index';

const baseUrl = {
    development: 'https://dgateway.allhome.com.cn/qjcrm/',
    // development: 'http://192.168.10.2:8016/',
	dtest: 'http://192.168.10.200:8016/',
	lan: 'http://192.168.10.200:8602',
	pred: 'https://dgateway.allhome.com.cn/qjcrm/',
	production: 'https://gateway.allhome.com.cn/qjcrm/'
}
let url = baseUrl[process.env.NODE_ENV]

export default {

    // 获取字典项-获取类型
    getTypeDict() {
        return axios.get(url+'archives/merchant/dictionary/archivesType');
    },

    // 获取字典项- 商户状态
    getStateDict() {
        return axios.get(url +'archives/merchant/dictionary/archivesStatus');
    },

    // 获取字典项-增值纳税人
    getincrementTaxpayer() {
        return axios.get(url + 'archives/merchant/dictionary/incrementTaxpayerQuery');
    },

    // 获取字典项-门店
    getStoreDict(val) {
        return axios.get(url + `archives/merchant/keyWord/deptSearch/${val}`);
    },

    // 获取字典项--税务登记
    getTaxRegistration() {
        return axios.get(url + 'archives/merchant/dictionary/taxRegistration');
    },

    // 获取字典项--税盘
    getTaxPlate() {
        return axios.get(url + 'archives/merchant/dictionary/taxPlate');
    },

    // 增值纳税人
    getIncrementTaxpayer() {
        return axios.get(url + 'archives/merchant/dictionary/incrementTaxpayerQuery');
    },

    // 模糊搜索-所属区域
    getRegionBlur(val) {
        return axios.post(url + `archives/merchant/query/searchCnare`, val);
    },

    // 列表查询
    getList(val, pageInfo) {
        return axios.post(url+ `archives/merchant/query/archivesList/${pageInfo.page}/${pageInfo.size}`, val);
    },

    // 获取列表表头
    getHeadLst() {
        return axios.get(url + 'archives/merchant/head/archivesList');
    },

    //新增保存
    addSubmit(model) {
        return axios.post(url + 'archives/merchant/management/archives', model);
    },

    // 修改的获取
    getDetail(id) {
        return axios.get(url + `archives/merchant/query/queryArchivesDetail/${id}`);
    },

    /**修改的保存 */
    modifySubmit(model) {
        return axios.put(url + 'archives/merchant/management/archives', model);
    },

    // 获取字典项-开户许可
    getAccountPermit() {
        return axios.get(url + 'archives/merchant/dictionary/accountPermit');
    },

    // 获取银行账目
    getAccount() {
        return axios.post(url + 'archives/merchant/query/bankAccount');
    },

    // 根据银行账目选择对应的银行内容
    getBank(code) {
        return axios.get(url + `/${code}`);
    },

    // 商户操作--恢复，注销
    operationBussiness(val) {
        return axios.post(url + 'archives/merchant/management/logoffRecovery', val);
    },

    // 检验商户是否重复
    checkName(model) {
        return axios.post(url + 'archives/merchant/keyWord/checkArchivesName', model);
    },

    // 法人认证
    leageCertification(id) {
        return axios.get(url+ `/archives/fdd/authentication/legalPerson/${id}`);
    },

    // 商户认证
    bussinessCertification(id) {
        return axios.get(url+ `/archives/fdd/authentication/enterpriseCertification/${id}`);
    },

    // 印章图片的获取
    getSealPictureList(id) {
        return axios.get(url+ `/archives/merchant/query/queryseal/${id}`);
    },
    // 印章图片的上传
    sealPictureSubmit(val) {
        return axios.post(url + '/archives/fdd/authentication/sealUpload', val);
    }
}
