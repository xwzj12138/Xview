// pages/drawer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'show_left':false,
    'show_right':false,
    'show_top': false,
    'show_bottom': false
  },
  /**
   * 显示抽屉
   */
  showDrawer:function(e){
    let list = {
      'show_left': false,
      'show_right': false,
      'show_top': false,
      'show_bottom': false
    }
    list[e.currentTarget.dataset.type] = e.currentTarget.dataset.show
    this.setData(list)
  },
  /**
  * 获取用户信息
  */
  getuserinfo: function (e) {
    let params = {
      nickname: e.detail.userInfo.nickName, gender: e.detail.userInfo.gender,
      avatar: e.detail.userInfo.avatarUrl
    }
    this.setData({ show_center: false })
    console.log(params)
  },
})