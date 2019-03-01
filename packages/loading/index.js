// packages/loading/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow:{
      type:Boolean,
      value:false
    },
    isAlert:{
      type:Boolean,
      value:true
    },
    icon:{
      type:String,
      value:''
    },
    hint:{
      type:String,
      value:'正在加载...'
    },
    size: {
      type: Number,
      value: 33
    },
    bgColor:{
      type: String,
      value: '#fff'
    },
    color:{
      type: String,
      value: '#aaa'
    },
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
