// pages/books/books.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航菜单数据
    navList:{
      1:{url:"/imgs/logo.png",name:"LOGO设计"},
      2:{url:"/imgs/pinpai.png",name:"品牌VI设计"},
      3:{url:"/imgs/huace.png",name:"画册设计"},
      4:{url:"/imgs/wenhua.png",name:"企业文化墙"}
    },

    //【展示主体】的tabbar数据
    barList:["推荐","VIS设计","LOGO设计","企业文化墙","画册设计","品牌全案"],
    //切换栏点击事件的index，切换样式
    currentIndex:0
  },

  /* ------------事件监听函数--------------- */

  selectHandle(event){
    let index = event.currentTarget.dataset.index
    this.setData({
      currentIndex:index
    })
  },






  /* ------------生命周期函数 -----------------*/
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