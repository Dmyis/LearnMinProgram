// components/w-tab-control/w-tab-control.js
Component({
  properties: {
    titles: {
      type:Array,
      value:[]
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    activeClick(event){
      // 1.得到索引值
      const index = event.currentTarget.dataset.index;
      // 2.修改currentIndex
      this.setData({
        currentIndex:index
      })
      //3.通知页面内部的点击事件
      this.triggerEvent('itemclick', {index,title:this.properties.titles[index]}, {})
    }
  }
})
