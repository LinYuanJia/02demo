// pages/taocan/taocan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* tabBar标题数据 */
    barData:["基础套餐","高级套餐","无忧套餐"],
    /* 保存tabBar当前index，切换样式 */
    currentIndex:1
  },

  /* -----------事件监听函数 ------------*/

  selectIndex(event){
    const index = event.currentTarget.dataset.index
    this.setData({
      currentIndex: index
    })

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