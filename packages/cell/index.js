// packages/cell/index.js
const warn = (msg, getValue) => {
  console.warn(msg);
  console.log('接受到的值为：', getValue);
};
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

      if (!url || url === 'true' || url === 'false') return;

      if (['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].indexOf(this.data.linkType) === -1) {
        warn('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch', this.data.linkType);
        return;
      }
      wx[this.data.linkType].call(wx, { url });
    },
    updateIsLastCell(isLastCell) {
      this.setData({ isLastCell });
    }
  }
})
