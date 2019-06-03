// packages/cell/index.js
Component({
  relations: {
    '../cell-group/index': {
      type: 'parent'
    }
  },
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示菜单箭头，默认不显示
    menuArrow: {
      type: Boolean,
      value: ''
    },
    // 左侧标题
    title: {
      type: String
    },
    // 标题下方的描述信息
    label: {
      type: String
    },
    // 右侧内容
    value: {
      type: String
    },
    // 链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch
    linkType: {
      type: String,
      value: 'navigateTo'
    },
    appId:{
      type: String,
      value: ''
    },
    extraData: {
      type: Object,
      value: {}
    },
    url: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLastCell: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigateTo() {
      let url = this.data.url;
      this.triggerEvent('click');
      if (!url || url === 'true' || url === 'false') return;

      if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch','navigateToMiniProgram'].indexOf(this.data.linkType) === -1) {
        return;
      }
      if (this.data.linkType =='navigateToMiniProgram'){
        wx.navigateToMiniProgram({
          appId:this.data.appId,
          path: this.data.url,
          extraData: this.data.extraData
        })
        return;
      }
      wx[this.data.linkType].call(wx, { url });
    },
    updateIsLastCell(isLastCell) {
      this.setData({ isLastCell });
    }
  }
})
