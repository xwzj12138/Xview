// pages/radio/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: [{ name: '单选一'}, { name: '单选二' }, { name: '单选三' }],
    options1: [{ name: '单选一',checked:true}, { name: '单选二' }, { name: '单选三' }],
    options2: [{ name: '单选一',checked: true}, { name: '单选二' }, { name: '单选三' }],
    options3: [{ name: '单选一', disabled: true}, { name: '单选二' }, { name: '单选三' }]
  },
  selectOption:function(e){
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