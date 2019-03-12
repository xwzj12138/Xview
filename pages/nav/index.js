// pages/nav/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList1: [{ "nameTitle": "tab1" }, { "nameTitle": "tab2" }, { "nameTitle": "tab3" }, { "nameTitle": "tab4" }],
    navList2: [{ "name": "tab1" }, { "name": "tab2" }, { "name": "tab3" }, { "name": "tab4" }, { "name": "tab5" }, { "name": "tab6" }, { "name": "tab6" }]
  },
  /**
   * 导航栏点击事件
   */
  tabSelect(e) {
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