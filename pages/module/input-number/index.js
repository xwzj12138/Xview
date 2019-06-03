// pages/input-number/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: 5, value2:5, value3:0
  },
  /**
   * 输入框的change事件
   */
  change1:function(e){
    this.setData({
      value1:e.detail.value
    })
  },
  change2: function (e) {
    this.setData({
      value2: e.detail.value
    })
  },
  change3: function (e) {
    this.setData({
      value3: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})