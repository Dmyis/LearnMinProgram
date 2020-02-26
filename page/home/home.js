// page/home/home.js
Page({
  data: {
    showTime: new Date().toLocaleString(),
    isActive:false,
    cj: 20
  },
  onLoad() {
    setInterval(() =>{
      this.setData({
        showTime: new Date().toLocaleString()
      })
    })
  },
  handleColor() {
    this.setData({
      isActive:!this.data.isActive
    })
  }

})