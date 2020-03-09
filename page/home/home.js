// page/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'哈哈哈'
  },
  handleNavigator() {
    wx.navigateTo({
      url: '/page/comment/comment?name=dmyis&title=你好呀',
    })
    console.log(123)
  }
})