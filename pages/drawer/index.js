// pages/drawer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    drawerType:'',
    maskclosable:true
  },
  /**
   * 显示抽屉
   */
  showDrawer:function(e){
    console.log(e.currentTarget.dataset)
    this.setData({
      drawerType: e.currentTarget.dataset.type,
      maskclosable: e.currentTarget.dataset.maskclosable
    })
  },
  /**
   * 关闭抽屉
   */
  closeDrawer:function(){
    console.log('cdsagvf')
    this.setData({
      drawerType:''
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