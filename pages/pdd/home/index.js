// pages/pdd/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: ['tab1', 'tab2', 'tab3','tab4', 'tab5', 'tab6','tab7', 'tab8', 'tab9'],
    value1:0,
    starIndex1:0
  },
  // 点击数字输入框事件
  handleChange1({ detail }) {
    this.setData({
      value1: detail.value
    })
  },
  // 评分组件change事件
  onChange1(e) {
    const index = e.detail.index;
    this.setData({
      starIndex1: index
    })
  },
  // 九宫格点击事件
  gridClick:function(e){
    console.log(e)
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