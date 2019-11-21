// pages/profile_content/fankui/fabkui.js

import request from "../../../service/request"

Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgUrl: [],
    value: ""

  },
  /* 选择图片按钮点击事件 */
  chooseImage(){
    new Promise((resolve,reject)=>{
      wx.chooseImage({
        count: 6,
        sizeType: ['original','compressed'],
        sourceType: ['album','camera'],
        success: res=>{
          const imgUrl = res.tempFilePaths
          this.data.imgUrl = imgUrl
          resolve()
        }
      })
    }).then( res =>{
      return new Promise((resolve,reject)=>{
        wx.getStorage({
          key: 'TOKEN',
          success: (result)=>{
            const token = result.data
            resolve(token)
          }
        })
      })
    }).then( token =>{
      const imgUrl = this.data.imgUrl
      imgUrl.forEach( value =>{
        wx.uploadFile({
          url: 'http://www.myzhihuiyi.com/user/addfeedback',
          filePath: value,
          name: 'image',
          header: {
            token
          },
          success: (result)=>{
            console.log(result)
            const backData = JSON.parse(result.data)
           
          }
        })
      })
    })
     
  },

  


  /* 提交反馈按钮监听事件 */
  formSubmit(event){
    
   /*  wx.getStorage({
      key: 'TOKEN',
      success: (result)=>{
        const token = result.data
        request({
          url: "/user/addfeedback",
          method: 'post',
          data: {
            content,
            img
          },
          header: {
            token
          }
        }).then(res=>{
          this.setData({
            value: ''
          })
          wx.showToast({
            title: '提交成功',
            icon: 'none',
            duration: 1500,
            mask: false
          })
        })
      }
    }) */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})