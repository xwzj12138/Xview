// packages/grid-group/index.js
Component({
  relations: {
    '../grid-item/index': {
      type: 'child',
      linked(target) {
        this.countChildComponent();
      },
      linkChanged(target) {
        this.countChildComponent();
      },
      unlinked(target) {
        this.countChildComponent();
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 每一行多少给item
    itemNum: {
      type: Number,
      value: 3
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
    countChildComponent() {
      const items = this.getRelationNodes('../grid-item/index');
      const len = items.length;
      const itemNum = this.data.itemNum

      if (len > 0) {
        items.forEach((cell, index) => {
          // 计算item在当前行是否为最后一个
          let isLast = ((index+1) % itemNum)==0
          let lastColumn = index >= ((Math.ceil(len / itemNum)-1)*itemNum)
          cell.updateIsLastItem(isLast, itemNum, lastColumn);
        });
      }
    }
  }
})
