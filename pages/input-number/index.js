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