// pages/design/design_detail/design_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 头部切换栏标题数据 */
    headBar:["LOGO设计","品牌VI设计","画册设计","企业文化墙","包装设计","品牌全案","专卖店设计"],
    // 头部切换栏，样式切换事件index保存
    currentIndex:2,
    //轮播图图片数据
    navUrl:["/imgs/goods/01.jpg","/imgs/goods/02.jpg","/imgs/goods/05.jpg"],
    //picker组件的列表显示数据
    multiData:["A3","A4","A5","B3","B5"],
    //规格input中的value存储
    guige:"",
    //购买按钮图片路径
    btnUrl:{
      1:{url:"/imgs/btn/btn_cang.png",name:"收藏"},
      2:{url:"/imgs/btn/btn_share.png",name:"分享"},
      3:{url:"/imgs/btn/btn_kefu.png",name:"客服"}

    },
    mianzeData:{
      1:{title:"假一赔十",content:"正品保证，假一赔十"},
      2:{title:"七天无理由",content:"收到货物后，七天无理由退款"}
    },
    // 免责声明弹窗flag控制
    mianzeFlag:true,


    //尾部切换栏标题数据
    footBar:["设计详情","设计案例","下单须知"],
    // 尾部切换栏，样式切换事件index保存
    footIndex:0
  },

  /*---------------------- 事件监听函数 --------------------*/
  //头部切换栏的index监控
  headSelectIndex(event){
    const index = event.currentTarget.dataset.index
    this.setData({
      currentIndex: index
    })
  },
  //规格改变时，从picker取值，然后复制给规格input中的value
  guigeChange(event){
    const index = event.detail.value
    this.setData({
      guige: this.data.multiData[index]
    })
  },
  //免责声明弹出框
  mianzeHandle(){
    this.setData({
      mianzeFlag:!this.data.mianzeFlag
    })
  },
  // 底部购买按钮提交
  formSubmit(event){
    console.log(event)
  },

  //头部切换栏的index监控
  selectChange(event){
    const index = event.currentTarget.dataset.index
    this.setData({
      footIndex: index
    })
  },





  /* ---------------------生命周期函数 ----------------------*/

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置切换栏和首页点击的模块一致
    const index = options.index-1
    this.setData({
      currentIndex: index
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