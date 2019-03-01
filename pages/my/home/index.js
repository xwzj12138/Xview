// pages/my/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch1:true,
    urlList: []
  },

  /**
   * 开关点击事件
   */
  setSwitch: function (e) {
    let switch1 = !this.data.switch1
    this.setData({
      switch1: switch1
    })
  },
  /**
   * 图片删除事件
   */
  delFile:function(e){
    this.data.urlList.splice(e.detail.index,1)
    this.setData({
      urlList:this.data.urlList
    })
  },
  /**
   * 添加图片
   */
  addFile:function(){
    this.data.urlList.push('/static/logo.png')
    this.setData({
      urlList: this.data.urlList
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