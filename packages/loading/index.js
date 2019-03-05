// packages/loading/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示
    isShow:{
      type:Boolean,
      value:false
    },
    isAlert:{
      type:Boolean,
      value:false
    },
    icon:{
      type:String,
      value:'loading2'
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
    imgUrl:{
      type:String,
      value:'/static/logo.png'
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
