// pages/profile_content/fenxiao/fenxiao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:{
      1:{url:"/imgs/fenxiao/tuandui.png",name:"我的团队"},
      2:{url:"/imgs/fenxiao/tixianmingxi.png",name:"提现明细"},
      3:{url:"/imgs/fenxiao/tuiguangma.png",name:"我的推广码"},
      4:{url:"/imgs/fenxiao/fenxiaoguize.png",name:"分销商规则"}
    },
    totleFun:["myteam","tixian","tuiguang","fenxiaoRule"]

  },
  /* 分销界面的点击函数 */
  myteam(){
    
  },
  tixian(){

  },
  tuiguang(){
    wx.navigateTo({
      url:"/pages/profile_content/fenxiao/tuiguang/tuiguang"
    })
  },
  fenxiaoRule(){

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