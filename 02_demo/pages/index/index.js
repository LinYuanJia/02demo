// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 轮播导航栏的数据
    navList:{
      listData1: {
        1:{url:"../../imgs/logo.png",name:"LOGO设计"},
        2:{url:"../../imgs/pinpai.png",name:"品牌VI设计"},
        3:{url:"../../imgs/huace.png",name:"画册设计"},
        4:{url:"../../imgs/wenhua.png",name:"企业文化墙"},
        5:{url:"../../imgs/baozhuang.png",name:"包装设计"},
        6:{url:"../../imgs/quanan.png",name:"品牌全案"},
        7:{url:"../../imgs/zhuanmai.png",name:"专卖店设计"},
        8:{url:"../../imgs/more.png",name:"更多"}
      },
      listData2:{
        1:{url:"../../imgs/logo.png",name:"LOGO设计"},
        2:{url:"../../imgs/pinpai.png",name:"品牌VI设计"},
        3:{url:"../../imgs/huace.png",name:"画册设计"},
        4:{url:"../../imgs/wenhua.png",name:"企业文化墙"},
        5:{url:"../../imgs/baozhuang.png",name:"包装设计"},
        6:{url:"../../imgs/quanan.png",name:"品牌全案"},
        7:{url:"../../imgs/zhuanmai.png",name:"专卖店设计"},
        8:{url:"../../imgs/more.png",name:"更多"}
      }
    },

    // 中部通知content的数据
    notifyList: {
      abc:["1333****333用户购买logo一件.....","1333****333升级为 VIP 2级....."],
      nba:["baseline：项目的第一行文字的基线对齐","justify-content属性定义项目在主轴上的对齐方式"],
      cba:["space-between:两端对齐","space-around：每个项目两侧的间隔相等"],
      mba:["align-content属性定义了多根轴线的对齐方式","如果项目只有一根轴线，该属性不起作用"]
    },
    //底部导航栏三元判断的变量，selectHandle点击函数改变其值
    currentIndex:0,
    // 底部导航栏标题
    titleData:["推荐","VI设计","LOGO设计","企业文化墙","画册设计"],
    // 底部内容---变量控制bar显示
    showIndex:"showData",
    showTime:["showData","showData1","showData2","showData3"],
    // 数据---图片等
    showTotle:{
      showData:{
        1:{url:"../../imgs/goods/01.jpg",title:"古典风格 画册设计",name:"设计师老王"},
        2:{url:"../../imgs/goods/02.jpg",title:"古典风格 画册设计",name:"设计师tony"},
        3:{url:"../../imgs/goods/03.jpg",title:"古典风格 画册设计",name:"设计师小张"},
        4:{url:"../../imgs/goods/04.jpg",title:"古典风格 画册设计",name:"设计师UZI"},
        5:{url:"../../imgs/goods/05.jpg",title:"古典风格 画册设计",name:"设计师菜鸟"},
        6:{url:"../../imgs/goods/got08.jpg",title:"古典风格 画册设计",name:"设计师哈哈哈"}
      },
      showData1:{
        2:{url:"../../imgs/goods/tu02.jpg",title:"古典风格 画册设计",name:"设计师tony"},
        3:{url:"../../imgs/goods/tu03.jpg",title:"古典风格 画册设计",name:"设计师小张"},
        4:{url:"../../imgs/goods/tu04.jpg",title:"古典风格 画册设计",name:"设计师UZI"},
        5:{url:"../../imgs/goods/tu01.jpg",title:"古典风格 画册设计",name:"设计师菜鸟"},
      },
      showData2:{
        6:{url:"../../imgs/goods/got01.jpg",title:"古典风格 画册设计",name:"设计师小王"},
        7:{url:"../../imgs/goods/got07.jpg",title:"古典风格 画册设计",name:"设计师小王"},
        1:{url:"../../imgs/goods/got02.jpg",title:"古典风格 画册设计",name:"设计师小王"},
        2:{url:"../../imgs/goods/got03.jpg",title:"古典风格 画册设计",name:"设计师小王"}
      },
      showData3:{
        4:{url:"../../imgs/goods/got05.jpg",title:"古典风格 画册设计",name:"设计师小王"},
        5:{url:"../../imgs/goods/got06.jpg",title:"古典风格 画册设计",name:"设计师小王"}
      }
    },

  },

 /*  -------------事件监听函数 ------------*/

  /* 监听下方切换栏index，改变选中样式 */
  selectHandle(event){
    let index = event.currentTarget.dataset.index
    this.setData({
      currentIndex: index,
      showIndex: this.data.showTime[index]
    })
  },

 /* 监听国庆活动点击跳转 */
  toTaocan(){
    wx.navigateTo({
      url: '../taocan/taocan',
      success: (result)=>{
        
      }
    });
  },




 /* --------------生命周期函数------------- */
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