// pages/nav/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList1: [{ "nameTitle": "tab1" }, { "nameTitle": "tab2" }, { "nameTitle": "tab3" }, { "nameTitle": "tab4" }],
    navList2: [{ "name": "推荐" }, { "name": "手机" }, { "name": "衣服" }, { "name": "美妆" },
      { "name": "鞋包" }, { "name": "水果" }, { "name": "百货" }, { "name": "食品" }, { "name": "内衣" },
      { "name": "运动" }, { "name": "家电" }, { "name": "车品" }, { "name": "家具" }
     ]
  },
  /**
   * 导航栏点击事件
   */
  tabSelect(e) {
    console.log(e.detail)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShareAppMessage: function () {
  }
})