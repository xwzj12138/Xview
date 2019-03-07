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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})