// pages/welcome/index.js
import {login} from '../../model/login.js'

let loginModel = new login();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取缓存
    // let cache = wx.getStorageSync('token')
    // let time = (new Date()).getTime()
    // //判断是否已经登录及登录是否过期
    // if (!cache || cache.add_time + 432000 < time) {
    //   // 没有缓冲数据，登录获取
    //   return loginModel.authLogin(res=>{
    //     this.goHome()
    //   })
    // }
    return this.goHome()
  },
  /**
   * 跳转首页
   */
  goHome(){
    wx.switchTab({
      url: '/pages/pdd/home/index',
    })
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