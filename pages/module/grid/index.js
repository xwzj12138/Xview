// pages/grid/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 宫格点击事件
   */
  gridClick:function(e){
    console.log(e)
    console.log('第' + e.currentTarget.dataset.id+'宫格被点击了')
  },
  onShareAppMessage: function () {
  }
})