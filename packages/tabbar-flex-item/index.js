// packages/tabbar-file-item/index.js
var buttonBehavior = require('../common/button_behaior.js');
Component({
  behaviors: [buttonBehavior],
  externalClasses: ['x-class'],
  /**
   * 组件的属性列表
   */
  properties: {
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
    fontSize:{
      type:String,
      value:'24rpx'
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

  }
})
