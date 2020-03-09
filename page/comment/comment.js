// page/comment/comment.js
Page({
  onLoad: function (options) {
    console.log(options)
  },
  handleBack() {
    wx.navigateBack({
      delte: 1
    })
  }
})