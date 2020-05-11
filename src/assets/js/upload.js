/**上传图片到阿里云
 * @author 郭梦娜
 * @date 2020-02-24
 * 
 */
let OSS = require('ali-oss');
// 生成随即32uuid的包
var uuid = require('uuid');
// 线上环境的bucket qjprod-images
// 
let client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: process.env.NODE_ENV === 'production'? 'LTAI4FwcWg3wDNfR1ys5GazN': 'LTAI4FsNBxqEYS7jqxtqs2dh',
  accessKeySecret: process.env.NODE_ENV === 'production' ? 'aJc4Vhm5AwB35PyzW3wPgi7WQs5puL' :'2gQMdlBOg2uPJukkn1tuxVyqs4IuCk',
  bucket: process.env.NODE_ENV === 'production'? 'qjprod-images':'qjdev-pred-images',
  path: 'merchant/'
});
export default class Upload {
  async putBlob (file) {
    let id =uuid.v1();
    let result ;
    try {
      result = await client.put(`${client.options.path}${id}`, file);
      return result;
    } catch (e) {
      console.log(e, 'fail');
    }
  }
}
