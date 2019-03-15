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
    },
    // 上传文件时的附加参数
    formData:{
      type:JSON,
      value:{}
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
    addFile(event){
      let index = -1
      let count = this.data.limit - this.data.urlList.length
      // 判断是否覆盖图片操作。覆盖图片操作时，需要上传的图片数量加1，覆盖图片的索引等于选中的图片索引
      if (event.currentTarget.dataset.index >= 0) {
        count = count + 1
        index = event.currentTarget.dataset.index
      }
      wx.chooseImage({
        count: count,
        success:(res)=> {
          if (!this.data.uploadApi){
            return this.triggerEvent('addFile', { uploadResult: res, selectIndex: index})
          }
          res.tempFilePaths.forEach((item) => {
            wx.uploadFile({
              url: this.data.uploadApi,
              filePath: item,
              name: this.data.name,
              formData: this.data.formData,
              success: (result) => {
                this.triggerEvent('addFile', { uploadResult: result, selectIndex: index })
              },
              fail: (result) => {
                this.triggerEvent('addFile', { uploadResult: result, selectIndex: index })
              }
            })
          })
        },
      })
    }
  }
})
