// pages/switch/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch1:false,
    switch2:true
  },
  /**
   * 开关按钮点击事件
   */
  clickSwitch1:function(e){
    console.log('switch1被点击了')
    console.log('参数：')
    console.log(e.detail)
    this.setData({switch1:e.detail.value})
  },
  clickSwitch2: function (e) {
    console.log('switch2被点击了')
    console.log('参数：')
    console.log(e.detail)
    this.setData({ switch2: e.detail.value })
  },
  clickSwitch3: function (e) {
    console.log('switch3被点击了')
    console.log('参数：')
    console.log(e.detail)
    this.setData({ switch3: e.detail.value })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShareAppMessage: function () {
  }
})