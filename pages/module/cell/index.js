// pages/cell/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch1:true,
    input1:''
  },
  /**
   * 开关按钮点击事件
   */
  clickSwitch: function (e) {
    console.log('switch被点击了')
    console.log('参数：')
    console.log(e.detail)
    this.setData({ switch1: e.detail.value })
  },
  onShareAppMessage: function () {
  }
})