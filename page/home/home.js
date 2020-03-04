// page/home/home.js
import request from '../../service/notwork.js'

Page({
  data: {
    list:[]
  },
  onLoad: function (options) {
    //1.元素的方法发送网络请求
    this.get_data_origin();
    //2.使用封装request发送网络请求
    request({
      url:'http://123.207.32.32:8000/api/wh/recommend',
    }).then(res =>{
      console.log(res);
    }).catch(err =>{
      console.log(err)
    })
  },
  get_data_origin() {
    //1.普通的网络请求
    /*  wx.request({
       url: 'http://123.207.32.32:8000/api/wh/recommend',
       success: function(res){
         console.log(res);
       }
     }) */
    //2.get请求，并且携带参数
    /* wx.request({
      url: 'http://123.207.32.32:8000/api/wh/home/data',
      data:{
        type:"sell",
        page:1
      },
      success: function(res){
        console.log(res);
      }
    }) */
    // 3.post请求，并且携带参数1
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: "post",
    //   data: {
    //     name: "Dmyis",
    //     age: 18
    //   },
    //   success: function (res) {
    //     console.log(res);
    //   }
    // })
  }
})