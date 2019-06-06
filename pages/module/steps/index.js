// pages/steps/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index1:0
  },
  nextStep:function(e){
    let index = e.target.dataset.index
    let array = this.data
    array['index'+index]++
    this.setData(array)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShareAppMessage: function () {
  }
})