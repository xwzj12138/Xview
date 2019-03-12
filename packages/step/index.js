Component({
    externalClasses: ['x-class'],
    properties : {
      icon : {
          type : String,
          value : ''
      },
      // 字体及icon颜色
      color: {
        type: String,
        value: '#aaa'
      },
      title : {
          type : String,
          value : ''
      },
      content : {
          type : String,
          value : ''
      }
    },
    options: {
        // 在组件定义时的选项中启用多slot支持
        multipleSlots: true
    },
    relations : {
        '../steps/index' : {
            type : 'parent'
        }
    },
    data : {
        //step length
        len : 1,
        //current in step index
        index : 0,
        //css direction
        direction : 'horizontal'
    },
    methods : {
        updateDataChange( options ){
            this.setData({
                len : options.len,
                index : options.index,
                direction : options.direction
            })
        }
    }

})