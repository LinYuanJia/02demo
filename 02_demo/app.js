//app.js
import request from "./service/request"
App({
  onLaunch: function () {
    
  },
  globalData: {
    token: ''
  },
  _login(){
    wx.login({
      success: res=> {
        const code = res.code;
        request({
          url: "/user/login",
          method: 'post',
          data: {
            code,
          }
        }).then(res=>{
          const data = res.data.data.apitoken.token
          this.globalData.token = data
          wx.setStorage({
            key: 'TOKEN',
            data: data
          })
        })
      }
    })
  }
})