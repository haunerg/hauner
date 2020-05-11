import axios from '@/assets/js/axios';
import rootUrl from "@/assets/url_config/supplier_partenr_url.js";

/*
 * 供应商列表获取
 * @author 王昆
 * @date 2019-12-24 
 */
const getHead = () => {
    return axios.get(`${rootUrl}archives/supplier/head/supplierList`);
};

/*
 * 供应商列表获取
 * @author 王昆
 * @date 2019-12-24 
 */ 
const getTableList = (page,size,data) => {
    return axios.post(`${rootUrl}archives/supplier/query/querySupplierList/${page}/${size}` , data);
};

/*
 * 供应商详情
 * @author 王昆
 * @date 2019-12-24 
 */  
const getSupplier = (id) => {
    return axios.get(`${rootUrl}archives/supplier/query/querySupplierDetail/${id}`);
};

/*
 * 供应商名称检索
 * @author 王昆
 * @date 2019-12-25
 */
const searchSupplier = (name) => {
    return axios.get(`${rootUrl}archives/supplier/query/searchSupplier/${name}`);
};

/*
 * 创建供应商
 * @author 王昆
 * @date 2019-12-24 
 */  
const addSupplier = (data) => {
    return axios.post(`${rootUrl}archives/supplier/management/supplierBill`, data);
};

/*
 * 供应商修改
 * @author 王昆
 * @date 2019-12-24 
 */  
const amendSupplier = (data) => {
    return axios.put(`${rootUrl}archives/supplier/management/supplierBill` , data);
};

/*
 * 删除供应商
 * @author 王昆
 * @date 2019-12-24 
 */  
const deleteSupplier = (id) => {
    return axios.delete(`${rootUrl}archives/supplier/management/supplierBill/${id}`);
};

/**
 * 搜索所有供应商
 * @author 王昆
 * @date 2020-3-28
 */
const searchAllSupplier = () => {
    return axios.get(`${rootUrl}archives/supplier/query/queryAllSupplier`);
};

/**
 * 查看联系人列表
 * @author 王昆
 * @date 2020-3-28
 */
const searchSupplierContact = (id) => {
    return axios.get(`${rootUrl}archives/supplier/query/queryContactsList/${id}`);
};

/**
 * 联系人表头
 * @author 王昆
 * @date 2020-3-28
 */
const searchContactHead = () => {
    return axios.get(`${rootUrl}archives/supplier/head/contactsList`);
};

export default {
    getHead,
    getTableList,
    getSupplier,
    addSupplier,
    deleteSupplier,
    amendSupplier,
    searchSupplier,
    searchAllSupplier,
    searchSupplierContact,
    searchContactHead
};
