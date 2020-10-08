// pages/upload/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    limit:5,
    url:[],
    urlList1:['/static/logo.png'],
    urlList2: ['/static/logo.png', '/static/logo.png', '/static/logo.png', '/static/logo.png', '/static/logo.png']
  },
  /**
   * 图片删除时间
   */
  upload: function (e) {
    if(e.detail.click_type=='del'){
      let array = this.data
      array.urlList1.splice(e.detail.index, 1)
      return this.setData(array)
    }
    this.setData({url: e.detail.uploadResult.tempFilePaths});
  },
  upload1:function(e){
    if(e.detail.click_type=='del'){
      let array = this.data
      array.urlList1.splice(e.detail.index, 1)
      return this.setData(array)
    }
    let urllist = this.data.urlList1
    // 判断是否覆盖图片，否则就是添加上传图片
    if (e.detail.index >= 0) {
      urllist[e.detail.index] = e.detail.uploadResult.tempFilePaths[0]
    } else {
      urllist = urllist.concat(e.detail.uploadResult.tempFilePaths)
    }
    this.setData({urlList1: urllist});
  },
  upload2: function (e) {
    if(e.detail.click_type=='del'){
      let array = this.data
      array.urlList2.splice(e.detail.index, 1)
      return this.setData(array)
    }
    let urllist = this.data.urlList2
    // 判断是否覆盖图片，否则就是添加上传图片
    if (e.detail.index>=0){
      urllist[e.detail.index] = e.detail.uploadResult.tempFilePaths[0]
    }else{
      urllist = urllist.concat(e.detail.uploadResult.tempFilePaths)
    }
    this.setData({urlList2: urllist});
  },
  onShareAppMessage: function () {
  }
})