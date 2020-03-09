// page/detail/detail.js
Page({
  //得到首页传递过来的数据
  onLoad: function (options) {
    console.log(options)
  },
  //传递数据给首页
  onUnload() {
    //getCurrentPages(): 获取到所有活跃的页面
    const pages = getCurrentPages();
    //得到首页
    const home = pages[pages.length - 2];
    home.setData({
      title:'呵呵呵'
    })
  }
})