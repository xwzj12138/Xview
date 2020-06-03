// packages/goods-action-item/index.js
var buttonBehavior = require('../common/button_behaior.js');
Component({
  behaviors: [buttonBehavior],
  externalClasses: ['x-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    icon: {
      type: String
    },
    iconSize: {
      type: Number,
      value: 46
    },
    fontSize: {
      type: String,
      value: 'font-size'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    itemNum: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
