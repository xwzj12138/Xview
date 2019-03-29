// packages/drawer/index.js
Component({
  externalClasses: ['x-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    // 抽屉的方向，可选值：left right top bottom
    type:{
      type:String,
      value:'top'
    },
    // 是否显示遮罩层
    maskShow:{
      type:Boolean,
      value:true
    },
    // 是否允许点击遮罩层关闭
    maskClosable:{
      type:Boolean,
      value:true
    },
    show:{
      type:Boolean
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
    closeDrawer(){
      if(this.data.maskClosable){
        this.setData({
          show:false
        })
        this.triggerEvent('closeDrawer')
      }
    }
  }
})
