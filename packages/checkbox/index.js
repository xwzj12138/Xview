// packages/checkbox/index.js
Component({
  externalClasses: ['x-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    options: {
      type: Array
    },
    titleKey: {
      type: String,
      value: 'name'
    },
    //是否一行一个选项
    inlineBlock: {
      type: Boolean
    },
    //默认icon名称
    iconName: {
      type: String,
      value: 'round'
    },
    //选择的icon名称
    checkedIconName: {
      type: String,
      value: 'roundcheck'
    },
    //默认icon颜色
    iconColor: {
      type: String,
      value: '#aaa'
    },
    //选中的icon颜色
    checkedIconColor: {
      type: String,
      value: '#19be6b'
    },
    iconSize: {
      type: Number,
      value: 46
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
    selectOption(e) {
      let options = this.data.options
      //判断是否禁止选中
      if (options[e.currentTarget.dataset.index].disabled) {
        return;
      }
      //判断是选中还是取消，数组中已经存在选中的索引时为取消，否为选中
      options[e.currentTarget.dataset.index].checked = !options[e.currentTarget.dataset.index].checked
      this.setData({
        options: options
      })
      this.triggerEvent('selectOption', { index: e.currentTarget.dataset.index })
    }
  }
})
