// packages/cell/index.js
var buttonBehavior = require('../common/button_behaior.js');
const warn = (msg, getValue) => {
  console.warn(msg);
  console.log('接受到的值为：', getValue);
};
Component({
  behaviors: [buttonBehavior],
  externalClasses: ['x-class'],
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
    url: {
      type: String,
      value: ''
    },
    isLastCell:{
      type:Boolean,
      value:true
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
    updateIsLastCell(isLastCell) {
      this.setData({ isLastCell });
    }
  }
})
