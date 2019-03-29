// pages/drawer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'show_left':false,
    'show_right':false,
    'show_top': false,
    'show_bottom': false
  },
  /**
   * 显示抽屉
   */
  showDrawer:function(e){
    console.log(e)
    let list = {
      'show_left': false,
      'show_right': false,
      'show_top': false,
      'show_bottom': false
    }
    list[e.currentTarget.dataset.type] = e.currentTarget.dataset.show
    this.setData(list)
  }
})