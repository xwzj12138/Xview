// pages/checkbox/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: [{ name: '单选一' }, { name: '单选二' }, { name: '单选三' }],
    options1: [{ name: '单选一', checked: true }, { name: '单选二' }, { name: '单选三' }],
    options2: [{ name: '单选一', checked: true }, { name: '单选二' }, { name: '单选三' }],
    options3: [{ name: '单选一', disabled: true }, { name: '单选二' }, { name: '单选三' }]
  },
  onShareAppMessage: function () {
  }
})