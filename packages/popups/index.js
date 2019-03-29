// packages/popups/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示
    isShow:{
      type:Boolean
    },
    // 类型
    type:{
      type:String,
      value:'center'
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
    //隐藏弹窗
    conceal(){
      this.setData({isShow:false})
    }
  }
})
