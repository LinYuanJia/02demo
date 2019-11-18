// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    barList:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectHandle(event){
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('indexChange',{index},{})
    }

  }
})
