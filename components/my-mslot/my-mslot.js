// components/my-mslot/my-mslot.js
Component({
  //------------------让使用者可以给组件传入的数据
  properties: {

  },

  //------------------定义组件的初始数据
  data: {
    counter: 0,
  },

  //----------------- 组件的方法列表
  methods: {
    counterAdd() {
      this.setData({
        counter: this.data.counter + 1
      })
    }
  },
  //------------------定义组件的配置选项
  //multipleSlots: true  使用多插槽时需要设置为true
  //stylesolation:"shard"  设置样式的隔离方式
  options: {
    multipleSlots: true
  },
  //外界给组件传入额外的样式
  externalClasses: [],

  // ----------------可以监听properties/data的数据的改变
  observers: {
    counter: function () {
      console.log(this.data.counter);
    }
  },
  pageLifetimes: {
    show() {
      console.log("组件被加载出来")
    },
    hide() {
      console.log("组件隐藏起来了");
    }
  },
  lifetimes: {
    created() {
      console.log("组件被创建出来了");
    },
    attached() {
      console.log("组件被添加到页面上了")
    },
    ready() {
      console.log("组件被渲染出来了");
    },
    moved() {
      console.log("组件被移动了");
    },
    detached() {
      console.log("组件被隐藏了");
    }
  }
})
