// page/home/home.js
Page({
  data:{
    list:['裤子','衣服','鞋子'],
    item:""
  },
  handleBtnClick() {
    console.log(111)
  },
  handleTouchStart() {
    console.log("handleTouchStart")
  },
  handleTouchMove() {
    console.log("handleTouchMove")
  },
  handleTouchEnd() {
    console.log("handleTouchEnd")
  },
  handleTap() {
    console.log("handleTap")
  },
  handleLongpress() {
    console.log("handleLongpress")
  },
  handleEventClick(e) {
    console.log(e);
  },
  handleItemClick(e){
    console.log(e);
    this.data.item = e.currentTarget.dataset.index + e.currentTarget.dataset.item;
    console.log(this.data.item);
  },
  // -------事件捕获和冒泡
  handleCaptureV1() {
    console.log("handleCaptureV1");
  },
  handleBindV1() {
    console.log("handleBindV1");
  },
  handleCaptureV2() {
    console.log("handleCaptureV2");
  },
  handleBindV2() {
    console.log("handleBindV2");
  },
  handleCaptureV3() {
    console.log("handleCaptureV3");
  },
  handleBindV3() {
    console.log("handleBindV3");
  }
})