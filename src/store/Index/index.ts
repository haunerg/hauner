import Vue from 'vue'
import Vuex,{ModuleTree} from 'vuex'
import scanStore from "@/assets/ts/scan/scanStore/ScanStore";
import scanStoreInterface from "@/interface/other/ScanStore.interface"

Vue.use(Vuex);

let module = () => {
  let store = {}
  let storeList:scanStoreInterface[] = scanStore("Index");
  storeList.forEach((el:scanStoreInterface) => {
    let {name,store:item} = el;
    Reflect.set(store,name,item)
  })
  return store;
};

let modules:object = module();
let model:ModuleTree<any> = {modules};
let store = new Vuex.Store(model);

export default store;
