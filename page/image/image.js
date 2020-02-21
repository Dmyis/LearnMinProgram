// page/image/image.js
Page({
  data: {
    imagePath:''
  },
  handleChooseAlbum(){
    wx.chooseImage({
      success: (res)=> {
        const path = res.tempFilePaths[0];

        this.setData({
          imagePath: path
        })
      },
    })
  },
  handleImageLoad(){
    console.log("加载完成了")
  }
})