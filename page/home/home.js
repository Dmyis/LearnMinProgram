// page/home/home.js
Page({
  handleToast() {
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1500,
      mask: true,
      success: ()=>{
        console.log("成功调用Toast")
      },
      fail: ()=>{
        console.log("调用失败");
      },
      complete: ()=>{
        console.log("调用结束");
      }
    })
  },
  handleModal() {
    wx.showModal({
      title: '标题',
      content: '内容，好好好',
      showCancel: true,
      cancelColor: 'red',
      cancelText: '退出',
      confirmColor: 'green',
      confirmText: '知道了',
      success: res =>{
        if(res.cancel){
          console.log("用户取消了")
        }
        if(res.confirm){
          console.log("确认了")
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    })
  },
  handleLoading() {
    wx.showLoading({
      title: '加载ing..',
      mask: true,
      success: res =>{
        console.log(res)
      },
      fail: ()=>{},
      complete: ()=>{}
    }),
    setTimeout(()=>{
      wx.hideLoading();
    },1000)
  },
  handleActionSheet() {
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'red',
      success: res =>{
        console.log(res)
      },
      fail: ()=>{},
      complete: ()=>{ }
    })
  },
  onShareAppMessage: function(optios){
    return {
      title: '你好,我的小宝贝',
      path: '/page/home/home.wxml ',
      imageUrl: 'http://s11.mogucdn.com/p2/170301/106341701_4kfgdd3001475k8h1l365al2k5ed6_640x960.jpg_320x999.jpg'
    }
  }
})