// pages/loading/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAlert:false,
    isAlert1:false
  },
  /**
   * 开关按钮点击事件
   */
  clickSwitch: function (e) {
    this.setData({ isAlert: e.detail.value })
  },
  clickSwitch1: function (e) {
    this.setData({ isAlert1: e.detail.value })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})