// pages/my/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  /**
   * 识别二维码
   */
  pay:function(e){
    wx.previewImage({
      current: 'http://file.xwzj88.cn/collect_money.jpg',
      urls: ['http://file.xwzj88.cn/collect_money.jpg'],
      success:(res)=>{
        console.log(res)
      },
      fail:(res)=>{
        console.log(res)
      }
    })
  },
  onLoad(){
  },
  onShareAppMessage: function () {
  }
})