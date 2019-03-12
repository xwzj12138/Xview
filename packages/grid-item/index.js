// packages/grid-item/index.js
Component({
  options: {multipleSlots: true},
  relations: {
    '../grid-group/index': {
      type: 'parent'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String
    },
    url:{
      type:String
    },
    isColumn:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLast:false,
    itemNum:3,
    lastColumn:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateIsLastItem(isLast, itemNum, lastColumn) {
      this.setData({ isLast: isLast, itemNum: itemNum, lastColumn: lastColumn});
    }
  }
})
