// pages/card/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'',
    list: [
      { url: 'https://t00img.yangkeduo.com/goods/images/2019-01-24/51c2bbfc5a1986396858cae748b7790e.jpeg', title: '【碎发整理神器】头发毛燥定型碎发膏 防静电毛发固定小孩可用', price: 5.5, otherPrice:15},
      { url: 'https://t00img.yangkeduo.com/goods/images/2019-03-24/b34d10245ef01b84af9c182222010439.jpeg', title: '【夏季驱蚊必备】防蚊叮咬止痒清香艾草香膏艾灸皮肤痒轻度烫伤膏', price: 5.5, otherPrice: 15 },
      { url: 'https://t00img.yangkeduo.com/goods/images/2019-04-06/8da5069f29ca0c8a9bdfe2d7155296d5.jpeg', title: '【告别疼痛 】艾叶膝盖膏药贴热敷贴护膝贴关节疼痛颈椎老寒腿骨', price: 5.5, otherPrice: 15 },
      { url: 'https://t00img.yangkeduo.com/goods/images/2018-12-17/c8cf470b67272360091980c6897a7600.jpeg', title: '[去黑头祛痘收毛孔]深层清洁手工竹炭皂除螨/祛痘/去黑头100g', price: 5.5, otherPrice: 15 }
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