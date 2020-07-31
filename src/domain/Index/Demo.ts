import axios from "@/api/Index";
const request = axios.create("Demo");

class DemoDomain {

  public async getName():Promise<string> {
    let result = await request.getName();
    return result;
  }

}

export default DemoDomain;
