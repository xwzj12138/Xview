// pages/rate/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starIndex1:0,
    starIndex2:0,
    starIndex3:2,
    starIndex4: 0,
    starIndex5: 0,
    likefill:0,
    emoji:0,
    appreciatefill: 2
  },
  // 评分组件change事件
  onChange(e) {
    this.data[e.detail.name] = e.detail.value;
    this.setData(this.data)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShareAppMessage: function () {
  }
})