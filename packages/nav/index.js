// packages/nav/index.js
Component({
  externalClasses: ['x-class'],
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
    },
    TabCur: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
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
      let data = this.data.tabList[e.currentTarget.dataset.index]
      this.triggerEvent('tabSelect', { index: e.currentTarget.dataset.index, data: data})
    },
  }
})
