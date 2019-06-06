// pages/card/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'',
    list: [
      {
        url: 'https://t00img.yangkeduo.com/goods/images/2019-04-18/c75045531527510127d13d8f60eade4f.jpeg',
        title: '袜子男短袜韩版潮流夏季船袜男防臭浅口吸汗薄款男士低帮袜学生袜', 
       price: 5.5, 
       otherPrice:15
      },
      {
        url: 'https://t00img.yangkeduo.com/goods/images/2019-04-21/f41509487aa3eac19407ae9951ea75fe.jpeg', 
        title: '【买一斤送一斤】五色葡萄干新疆无核大颗粒批发蜜饯减肥散装2斤', 
      price: 5.5, 
      otherPrice: 15 
      },
      {
        url: 'https://t00img.yangkeduo.com/goods/images/2019-04-14/1b45bb412dfed5610988778da0d583a8.jpeg',
        title: '南北特手撕素牛排素肉豆干零食湖南特产豆干批发休闲麻辣零食小吃', 
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
  onShareAppMessage: function () {
  }
})