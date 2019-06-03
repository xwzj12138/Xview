// pages/popups/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:false
  },
  /**
   * 显示操作按钮
   */
  handleClick:function(e){
    if (e.currentTarget.dataset.index==1){
      this.setData({ isShow: true })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})