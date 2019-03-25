// packages/radio/index.js
Component({
  externalClasses: ['x-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    options:{
      type:Array
    },
    titleKey:{
      type:String,
      value:'name'
    },
    //是否一行一个选项
    inlineBlock:{
      type:Boolean
    },
    //默认icon名称
    iconName:{
      type:String,
      value:'round'
    },
    //选择的icon名称
    checkedIconName: {
      type: String,
      value: 'roundcheck'
    },
    //默认icon颜色
    iconColor: {
      type: String,
      value: '#aaa'
    },
    //选中的icon颜色
    checkedIconColor: {
      type: String,
      value: '#19be6b'
    },
    iconSize:{
      type:Number,
      value:46
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
    selectOption(e){
      let options = this.data.options
      //判断是否禁止选中
      if (options[e.currentTarget.dataset.index].disabled){
        return ;
      }
      //先将所有选项设置没有选中再见选中的元素设置为true
      options.forEach((item,index)=>{
        options[index].checked = false
      })
      options[e.currentTarget.dataset.index].checked = true
      this.setData({
        options: options
      })
      this.triggerEvent('selectOption', { index: e.currentTarget.dataset.index, value: options[e.currentTarget.dataset.index] })
    }
  }
})
