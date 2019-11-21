// pages/index/anli/anli.js
import request from "../../../service/request"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    totleData: {},
    barList: ["案例相关图片","设计师简介"],
    footCont: false

  },

  /* ----------------事件监听函数------------------*/
  /* 监听切换栏的index改变，决定下方展示内容 */
  changeFooter(event){
    const index = event.detail.index
    if(index==0){
      this.setData({
        footCont: false
      })
    }else{
      this.setData({
        footCont: true
      })
    }
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id
    wx.getStorage({
      key: 'TOKEN',
      success: (result)=>{
        const token = result.data
        request({
          url: '/example/info?example_id=1',
          method:'get',
          data: {
            example_id: id
          },
          header:{
            token
          }
        }).then(res=>{
          const data = res.data.data
          this.setData({
            totleData: data
          })
        })
      }
    })
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