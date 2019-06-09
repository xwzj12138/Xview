// pages/button/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoAd:null
  },
  handleClick:function(e){
    console.log('按钮被点击了')
    this.showAd()
  },
  onShareAppMessage: function () {
  },
  onLoad(){
    this.loadVidelAd();
  },
  loadVidelAd(){
    // 在页面onLoad回调事件中创建激励视频广告实例
    if (wx.createRewardedVideoAd) {
      let videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-a4389c696f06680e'
      })
      videoAd.onLoad(() => {
        console.log('加载成功')
        this.setData({ videoAd: videoAd })
       })
      videoAd.onClose((res) => {
        console.log('关闭广告:')
        // isEnded：true有效观看完整视屏 false：无效观看
        console.log(res.isEnded)
       })
    }
  },
  showAd(){
    if(this.data.videoAd){
      this.data.videoAd.show().catch((err)=>{
        console.log('显示广告：')
        console.log(err)
      })
    }
  }
})