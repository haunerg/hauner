import InvoiceManagementScanApi from "@/assets/ts/scan/scanApi/scanAPI";
import axios from "@/api/axios";

import ScanApiInterface from "@/interface/other/ScanApi.interface";

let apiList:ScanApiInterface[] = InvoiceManagementScanApi("Index");

apiList.forEach((el:ScanApiInterface) => {
  //  文件名，内容
  let {name,methodInfo} = el;
  //  以文件名为名称，添加请求数据方法
  axios.add(name,methodInfo);
});

export default axios;

