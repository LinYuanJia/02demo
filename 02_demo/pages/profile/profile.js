// pages/profile/profile.js
const app = getApp();
import request from "../../service/request";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 用户信息保存 */
    userInfo: {
      nickName: "点击登录",
      avatarUrl: "/imgs/touxiang.jpg"
    },
    /* 导航栏图标数据 */
    navData: {
      1: {
        url: "/imgs/profile/dingdan.png",
        title: "全部订单"
      },
      2: {
        url: "/imgs/profile/daifu.png",
        title: "待付款"
      },
      3: {
        url: "/imgs/profile/keyong.png",
        title: "可使用"
      },
      4: {
        url: "/imgs/profile/shouhou.png",
        title: "退款/售后"
      }
    },
    /* 详细列表信息数据 */
    listData: {
      1: {
        url: "/imgs/profile/fenxiao.png",
        name: "分销商"
      },
      2: {
        url: "/imgs/profile/youhui.png",
        name: "优惠券"
      },
      3: {
        url: "/imgs/profile/fapiao.png",
        name: "我的发票"
      },
      4: {
        url: "/imgs/profile/shoucang.png",
        name: "我的收藏"
      },
      5: {
        url: "/imgs/profile/fankui.png",
        name: "意见反馈"
      }
    },
    /* 详细列表跳转地址 */
    listUrl: ["/pages/profile_content/fenxiao/fenxiao",
      "/pages/profile_content/youhui/youhui",
      "/pages/profile_content/fapiao/fapiao",
      "/pages/profile_content/shoucang/shoucang",
      "/pages/profile_content/fankui/fankui"
    ]

  },

  /* ---------------------事件监听函数 ---------------------*/
  /* 页面跳转订单 */
  toDingdan(event) {
    const index = event.currentTarget.dataset.index - 1
    wx.navigateTo({
      url: "../profile_content/dingdan/dingdan?index=" + `${index}`
    })
  },
  /* 下方列表---页面跳转 */
  toTotelList(event) {
    const index = event.currentTarget.dataset.index - 1
    const url = this.data.listUrl[index]
    wx.navigateTo({
      url
    })
  },
  /* 获取用户信息并修改 */
  getUserInfo(event) {
    const info = event.detail.userInfo
    wx.setStorage({
      key: 'DATA',
      data: info,
      success: (result)=>{
        wx.getStorage({
          key: 'TOKEN',
          success: (result)=>{
            const token = result.data
            wx.getStorage({
              key: 'DATA',
              success: (result)=>{
                const data = result.data
                console.log(data)
                request({
                  url: "/user/updateinfo",
                  method: 'post',
                  data: data,
                  header: {
                    token,
                  }
                }).then(res=>{
                  console.log(res)
                })
              }
            })
          }
        })
      }
    })  
  },



  /* ---------------------生命周期函数 ---------------------*/

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