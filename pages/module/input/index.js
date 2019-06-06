// pages/input/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1:'',
    value2: '',
    value3: '',
    value4:''
  },
  /**
   * 输入框值发生变化时的事件,电脑端暂时有问题,手机端没有问题
   */
  inputChange:function(e){
    let data = {}
    data[e.detail.name] = e.detail.value
    this.setData(data)
    console.log(this.data)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShareAppMessage: function () {
  }
})