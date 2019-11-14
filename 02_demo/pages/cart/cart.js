// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 推荐展示数据
    showData:{
      1:{url:"../../imgs/goods/01.jpg",title:"古典风格 画册设计",name:"设计师老王"},
      2:{url:"../../imgs/goods/02.jpg",title:"古典风格 画册设计",name:"设计师tony"},
      3:{url:"../../imgs/goods/03.jpg",title:"古典风格 画册设计",name:"设计师小张"},
      4:{url:"../../imgs/goods/04.jpg",title:"古典风格 画册设计",name:"设计师UZI"},
      5:{url:"../../imgs/goods/05.jpg",title:"古典风格 画册设计",name:"设计师菜鸟"},
      6:{url:"../../imgs/goods/got08.jpg",title:"古典风格 画册设计",name:"设计师哈哈哈"}
    }

  },

  /* ---------------事件监听函数------------- */

  checkboxChange(even){
    console.log(even)
  },




  /* ---------------生命周期函数----------------- */

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