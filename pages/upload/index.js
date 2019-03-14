// pages/upload/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    limit:5,
    url:[],
    urlList1:['/static/logo.png'],
    urlList2: ['/static/logo.png', '/static/logo.png', '/static/logo.png', '/static/logo.png', '/static/logo.png']
  },
  /**
   * 图片删除时间
   */
  delFile1: function (e) {
    let array = this.data
    array.urlList1.splice(e.detail.index, 1)
    this.setData(array)
  },
  delFile2:function(e){
    let array = this.data
    array.urlList2.splice(e.detail.index, 1)
    this.setData(array)
  },
  /**
   * 上传图片
   */
  addFile1:function(e){
    this.setData({
      url: e.detail.uploadResult.tempFilePaths
    })
  },
  addFile2: function (e) {
    let urllist = this.data.urlList1
    // 判断是否覆盖图片，否则就是添加上传图片
    if (e.detail.selectIndex >= 0) {
      urllist[e.detail.selectIndex] = e.detail.uploadResult.tempFilePaths[0]
    } else {
      urllist = urllist.concat(e.detail.uploadResult.tempFilePaths)
    }
    this.setData({
      urlList1: urllist
    })
  },
  addFile3: function (e) {
    let urllist = this.data.urlList2
    // 判断是否覆盖图片，否则就是添加上传图片
    if (e.detail.selectIndex>=0){
      urllist[e.detail.selectIndex] = e.detail.uploadResult.tempFilePaths[0]
    }else{
      urllist = urllist.concat(e.detail.uploadResult.tempFilePaths)
    }
    this.setData({
      urlList2: urllist
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