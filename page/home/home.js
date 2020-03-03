// page/home/home.js
Page({
  data: {
    counter: 0,
    index:0,
    item:'流行',
    isShow: true
  },
  handleIncrement(e) {
    this.setData({
      counter:this.data.counter +1
    })
    console.log(e);
  },
  handleTabClick(event){
    console.log(event);
    this.setData({
      index:event.detail.index,
      item:event.detail.title
    })
  },
  selIncrement() {
    // this.selectComponent();  绑定组件
    const my_sel = this.selectComponent("#mysel");
    my_sel.Increment(1);
  },
  handleShow() {
    this.setData({
      isShow:!this.data.isShow
    })
  }
})