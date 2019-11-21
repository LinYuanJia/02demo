// pages/index/index.js
const app = getApp();

import request from "../../service/request";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    /* 搜索框内容的显示与隐藏 */
    searchIndex: false,
    searchData:[],
    searchValue: '',
    // 轮播导航栏的数据
    navList: {
      listData1: [],
      listData2: [],
    },
    page:'',
    // 中部通知content的数据
    notifyList: {
      abc: ["1333****333用户购买logo一件.....", "1333****333升级为 VIP 2级....."],
      nba: ["baseline：项目的第一行文字的基线对齐", "justify-content属性定义项目在主轴上的对齐方式"],
      cba: ["space-between:两端对齐", "space-around：每个项目两侧的间隔相等"],
      mba: ["align-content属性定义了多根轴线的对齐方式", "如果项目只有一根轴线，该属性不起作用"]
    },
    //底部导航栏三元判断的变量，selectHandle点击函数改变其值
    currentIndex: 0,
    // 底部导航栏标题
    titleData: ["推荐", "VI设计", "LOGO设计", "企业文化墙", "画册设计"],
    // 底部内容---变量控制bar显示
    showIndex: "showData",
    showTime: ["showData", "showData1", "showData2", "showData3"],
    // 数据---图片等
    showTotle: {
      0: [],
      1: [],
      2: [],
      3: [],
      4: []
    },

  },

  /*  -------------事件监听函数 ------------*/
  /* 监听搜索框提交内容 */
  searchHandle(event){
    const val = event.detail.value
    new Promise((resolve,reject)=>{
      wx.getStorage({
        key: 'TOKEN',
        success: res=>{
          resolve(res)
        }
      })
    }).then(res=>{
      const token = res.data
      return request({
        url: "/example/search?val=天",
        method: 'get',
        data: {
          val
        },
        header: {
          token
        }
      })
    }).then(res=>{
      const data = res.data.data.data
      this.setData({
        searchIndex: true,
        searchData: data
      })
    })
  },
  /* 搜索内容隐藏，返回首页 */
  backToIndex(){
    this.setData({
      searchIndex: false,
      searchValue: ''
    })
  },
  /* 监听下方切换栏index，改变选中样式 */
  selectHandle(event) {
    let index = event.currentTarget.dataset.index
    this.setData({
      currentIndex: index,
      showIndex: this.data.showTime[index]
    })
  },
  /* 监听轮播图的页数 */
  swiperPage(event){
    const page = event.currentTarget.dataset.index
    this.setData({
      page
    })
  },
  //监听轮播导航的点击跳转页面
  chooseDesign(event) {
    const index = event.currentTarget.dataset.index
    const page = this.data.page
    const data = this.data.navList[page][index]
    const newData = JSON.stringify(data)
    wx.navigateTo({
      url: "../design/design_detail/design_detail?index=" + `${index}`+"&data="+`${newData}`
    })
  },

  /* 监听国庆活动点击跳转 */
  toTaocan() {
    wx.navigateTo({
      url: '../taocan/taocan',
      success: (result) => {

      }
    });
  },
  /* 监听下方案例页面的点击，并传递数据跳转 */
  navToAnli(option){
    const id = option.currentTarget.dataset.id.id
    wx.navigateTo({
      url: '../index/anli/anli?id='+`${id}`
    })
  },
  /* 商品数据请求的抽取 */
  _getGoods(product_id){
    wx.getStorage({
      key: 'TOKEN',
      success: (result)=>{
        const token = result.data
        request({
          url: "/example/get",
          method: 'get',
          data: {
            product_id,
          },
          header: {
            token,
          }
        }).then(res => {
          const list = res.data.data.data
          const nameKey = `showTotle[${product_id}]`
          this.setData({
          [nameKey]: list
          })
        })
      }
    })
  },
  /* 导航图标商品数据请求的抽取 */
  _getNavGoods(){
    wx.getStorage({
      key: 'TOKEN',
      success: (result)=>{
        const token = result.data
        request({
          url: '/product/get',
          method: 'get',
          data: {},
          header: {
            token
          }
        }).then(res=>{
          const list = res.data.data
          const list1 = []
          const list2 = []
          list.forEach((item,index)=>{   
            if(index < 8){
              list1.push(item)
            }else{
              list2.push(item)
            }
          })
          const nameKey1 = `navList.listData1`
          const nameKey2 = `navList.listData2`
          this.setData({
            [nameKey1]: list1,
            [nameKey2]: list2
          })
        })
      }
    })
  },


  /* --------------生命周期函数------------- */
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getGoods(0);
    this._getGoods(1);
    this._getGoods(2);
    this._getGoods(3);
    this._getGoods(4);
    this._getNavGoods();

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