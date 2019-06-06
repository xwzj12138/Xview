// pages/count-down/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    targetTime: 0,
    targetTime1: 0,
    myFormat: ['时', '分', '秒'],
    myFormat1: ['天', '时', '分', '秒'],
    status: '进行中...',
    clearTimer: false
  },
  myLinsterner(e) {
    console.log(e)
    this.setData({
      status: '结束'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      targetTime: new Date().getTime() + 6430000,
      targetTime1: new Date().getTime() + 86430000,
      targetTime2: new Date().getTime() + 10000
    });
  },
  onShareAppMessage: function () {
  }
})