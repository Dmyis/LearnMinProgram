const TOKEN = 'token';
App({
  globalData: {
    tokan: ''
  },
  onLaunch: function () {
    //1.先从缓冲中取出token
    const token = wx.getStorageSync(TOKEN)
    //2.判断toke是否为空
    if(token && token.length !== 0){//已经有token，验证token是否过期
      this.theck_token(token)
    }else{//如果没有，进行登录操作
      this.login();
    }
  },
  theck_token(token) {
    console.log("执行了验证token的操作")
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: res =>{
        if(!res.data.errCode){
          console.log("token有效")
          this.globalData.tokan = token
        }else{
          this.login();
        }
      },
      fail: err =>{
        console.log(err)
      }
    })
  },
  login() {
    console.log("执行了登录操作")
    //登录状态
    wx.login({
      //code只有5分钟有效
      success: res => {
        //1.获取到code
        const code = res.code;

        //2.将code发送到我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: res => {
            //1.取出tokan
            const token = res.data.token

            //2.将token保存到glodalData中
            this.globalData.token = token

            //3.进行本地存储
            // setStorageSync: 同步
            // setStorage: 异步
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})
