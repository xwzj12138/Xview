// pages/home/index.js
import {login} from '../../model/login.js'
let loginModel = new login();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_center:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //判断是否登录
    loginModel.isLogin(res=>{
      this.setData({ show_center: true})
    })
  },
  /**
   * 获取用户信息
   */
  getuserinfo:function(e){
    let params = { 
      nickname: e.detail.userInfo.nickName, gender: e.detail.userInfo.gender,
      avatar: e.detail.userInfo.avatarUrl
    }
    loginModel.authLogin(params,(res) => {
      this.setData({ show_center: false })
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