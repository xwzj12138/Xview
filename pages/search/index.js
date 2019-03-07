// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 搜索按钮点击事件
   */
  handleClick: function (e) {
    console.log('按钮被点击了')
  },
  /**
   * 键盘输入时触发
   */
  onInput:function(e){
    console.log('键盘输入时触发:')
    console.log(e.detail)
  },
  /**
   * 输入框聚焦时触发
   */
  onFocus: function (e) {
    console.log('输入框聚焦:')
    console.log(e.detail)
  },
  /**
   * 输入框失去焦点时触发
   */
  onBlur: function (e) {
    console.log('输入框失去焦点:')
    console.log(e.detail)
  },
  /**
   * 点击完成按钮时触发
   */
  onConfirm: function (e) {
    console.log('点击完成按钮:')
    console.log(e.detail)
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