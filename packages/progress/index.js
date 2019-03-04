// packages/progress/index.js
Component({
  externalClasses: ['x-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    percent: {
      type: Number,
      value: 0
    },
    hideInfo:{
      type:Boolean,
      value:false
    },
    // stripes：条纹，active：波浪渐变
    statusStyle:{
      type:String,
      value:'normal'
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
