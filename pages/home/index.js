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
      console.log('1111')
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
  onShareAppMessage: function () {
  }
})