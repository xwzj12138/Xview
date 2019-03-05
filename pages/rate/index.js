// pages/rate/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starIndex1:0,
    starIndex2:0,
    starIndex3:2,
    starIndex4: 0,
    starIndex5: 0,
    starIndex6: 2
  },
  // 评分组件change事件
  onChange1(e) {
    const index = e.detail.index;
    this.setData({
      starIndex1: index
    })
  },
  onChange2(e) {
    const index = e.detail.index;
    this.setData({
      starIndex2: index
    })
  },
  onChange3(e) {
    const index = e.detail.index;
    this.setData({
      starIndex3: index
    })
  },
  onChange4(e) {
    const index = e.detail.index;
    this.setData({
      starIndex4: index
    })
  },
  onChange5(e) {
    const index = e.detail.index;
    this.setData({
      starIndex5: index
    })
  },
  onChange6(e) {
    const index = e.detail.index;
    this.setData({
      starIndex6: index
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