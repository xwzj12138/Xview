// pages/card/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'',
    list: [
      { url: 'http://poqx8vuub.bkt.clouddn.com/20190416/3eb0c47a814c8faef3d4b053a4638321.png',
        title: '越南大青芒', 
       price: 5.5, 
       otherPrice:15
      },
      { url: 'http://poqx8vuub.bkt.clouddn.com/20190416/43a6d36a08700c6f5f0e497197dcad6e.png', 
        title: '黄瓜', 
      price: 5.5, 
      otherPrice: 15 
      },
      { url: 'http://poqx8vuub.bkt.clouddn.com/20190414/ef89c5d4f66136f77a51fa0ef70af7e7.png',
        title: '铁棍山药', 
        price: 5.5, 
        otherPrice: 15 
      },
      { url: 'https://t00img.yangkeduo.com/goods/images/2018-12-17/c8cf470b67272360091980c6897a7600.jpeg', 
        title: '[去黑头祛痘收毛孔]深层清洁手工竹炭皂除螨/祛痘/去黑头100g', 
        price: 5.5, 
        otherPrice: 15 
      }
      ]
  },
  /**
   * 切换类型
   */
  handleClick:function(e){
    this.setData({ type: e.currentTarget.dataset.type})
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