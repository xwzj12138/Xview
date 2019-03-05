// packages/upload/index.js
Component({
  externalClasses:['x-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    limit:{
      type:Number,
      value:1
    },
    urlList:{
      type:Array,
      value: []
    },
    uploadApi:{
      type:String,
      value:''
    },
    name:{
      type:String,
      value:'file'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    delFile(e){
      this.triggerEvent('delFile', { index: e.currentTarget.dataset.index})
    },
    addFile(){
      wx.chooseImage({
        count:this.data.limit,
        success:(res)=> {
          res.tempFilePaths.forEach((item) => {
            wx.uploadFile({
              url: this.data.uploadApi,
              filePath: item,
              name: this.data.name,
              success: (res) => {
                this.triggerEvent('addFile', res)
              },
              fail: (res) => {
                this.triggerEvent('addFile', res)
              }
            })
          })
        },
      })
    }
  }
})
