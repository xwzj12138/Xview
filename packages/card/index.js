// packages/card/index.js
Component({
  externalClasses: ['x-class'],
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrl: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    type: {
      type: String,
    },
    price: {
      type: Number
    },
    number: {
      type: Number
    },
    otherPrice: {
      type: Number
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
