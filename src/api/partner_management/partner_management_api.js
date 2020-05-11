import axios from '../index'
import rootUrl from "@/assets/url_config/supplier_partenr_url.js";

//合作商表头
const getPartnerHead = () => {
    return axios.get(`${rootUrl}archives/partner/head/partnerList`);
};

//合作商联系人表头
const getPartnerContactHead = () => {
    return axios.get(`${rootUrl}archives/partner/head/contactsList`);
};

//合作商列表数据
const getPartnerList = (data,size,page) => {
    return axios.post(`${rootUrl}archives/partner/query/queryPartnerList/${page}/${size}`,data);
};

//合作商详情查询
const getPartnerInfo = (id) => {
    return axios.get(`${rootUrl}archives/partner/query/queryPartnerDetail/${id}`);
};

//合作商联系人列表
const getPartnerContactList = (id) => {
    return axios.get(`${rootUrl}archives/partner/query/queryContactsList/${id}`);
};

//新增合作商
const addPartner = (data) => {
    return axios.post(`${rootUrl}archives/partner/management/partnerBill`,data);
};

//修改合作商
const UpdataPartner = (data) => {
    return axios.put(`${rootUrl}archives/partner/management/partnerBill`,data);
};

//删除合作商
const deletePartner = (id) => {
    return axios.delete(`${rootUrl}archives/partner/management/partnerBill/${id}`);
};

export default {
    getPartnerContactHead,
    getPartnerContactList,
    getPartnerHead,
    getPartnerInfo,
    getPartnerList,
    addPartner,
    UpdataPartner,
    deletePartner
};
