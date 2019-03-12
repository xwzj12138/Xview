// packages/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabList: {
      type: Array
    },
    fontSize: {
      type: Number,
      value:36
    },
    key:{
      type:String,
      value:'name'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击事件
    tabSelect(e) {
      this.setData({
        TabCur: e.currentTarget.dataset.index,
        scrollLeft: (e.currentTarget.dataset.index - 1) * 50 - 30
      })
      this.triggerEvent('tabSelect', { index: e.currentTarget.dataset.index})
    },
  }
})
