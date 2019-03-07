// packages/search/index.js
Component({
  externalClasses: ['x-class'],
  options: {multipleSlots: true},
  /**
   * 组件的属性列表
   */
  properties: {
    value:{
      type:String,
      value:''
    },
    maxlength:{
      type:Number,
      value:-1
    },
    focus  :{
      type:Boolean,
      value:''
    },
    placeholder:{
      type:String,
      value:'请输入'
    },
    confirmType: {
      type: String,
      value: 'search'
    },
    backgroundColor: {
      type: String,
      value: '#fff'
    },
    searchIconName: {
      type: String,
      value: ''
    },
    searchColor:{
      type:String,
      value:'#666'
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
    onInput: function (event) {
      this.triggerEvent('onInput', event.detail)
    },
    onFocus: function (event) {
      this.triggerEvent('onFocus', event.detail)
    },
    onBlur: function (event) {
      this.triggerEvent('onBlur', event.detail)
    },
    onConfirm: function (event) {
      this.triggerEvent('onConfirm', event.detail)
    }
  }
})
