const URL = "http://www.myzhihuiyi.com";

export default function request(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: URL + options.url,
      method: options.method || 'get',
      data: options.data || {},
      header: options.header || {},
      success: res=>{
        resolve(res);
      },
      fail: err=> {
        reject(err);
      }
    })
  })
}