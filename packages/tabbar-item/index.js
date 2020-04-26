// packages/goods-action-item/index.js
Component({
  externalClasses: ['x-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    src:{
      type:String,
      value:''
    },
    title: {
      type: String,
      value: ''
    },
    icon: {
      type: String
    },
    width: {
      type: Number
    },
    iconSize: {
      type: Number,
      value: 46
    },
    iconColor: {
      type: Number,
      value: '#aaa'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    itemNum:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
