// packages/headnav/index.js
Component({
  lifetimes:{
    created() {
      wx.getSystemInfo({
        success: (res) => {
          let custom = wx.getMenuButtonBoundingClientRect();
          let CustomBar = custom.bottom - custom.top + res.statusBarHeight;
          this.setData({ StatusBar: res.statusBarHeight, CustomBar: CustomBar})
        }
      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar:0,
    CustomBar:0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
