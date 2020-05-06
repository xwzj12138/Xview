// packages/blank-hint/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
    linkType: {
      type: String,
      value: 'switchTab'
    },
    background_url:{
      type:String,
      value:'/static/blank_hint.png'
    },
    button_url: {
      type: String,
      value: ''
    },
    button_name: {
      type: String,
      value: '去添加'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigateTo() {
      let url = this.data.button_url;

      if (!url || url === 'true' || url === 'false') return;

      if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(this.data.linkType) === -1) {
        return console.log('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch');
      }
      wx[this.data.linkType].call(wx, { url });
    }
  }
})
