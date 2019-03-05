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