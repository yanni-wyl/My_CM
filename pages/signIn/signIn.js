// pages/rollCall/rollCall.js
var QR = require("../../utils/qrcode.js")
Page({

  /**
   * 页面的初始数据
   */
  //首先在页面js上面引入小程序生成二维码js

/**
* 页面的初始数据
*/
data: {
  canvasHidden: false, //默认不让canvas二维码隐藏，否则不能生成二维码
  imagePath: "" //弹出框二维码显示图片地址
},

/**
* 生命周期函数--监听页面加载
*/
onLoad: function(options) {
  var id = options
  var that = this;
  var initUrl = 'https://www.baidu.com?id='+id;
  //创建二维码
  that.createQrCode(initUrl, "mycanvas", 170, 170);
},

/**
* 绘制二维码图片
*/
createQrCode: function(url, canvasId, cavW, cavH) {
  //调用插件中的draw方法，绘制二维码图片
  QR.api.draw(url, canvasId, cavW, cavH);
  setTimeout(() => {
    this.canvasToTempImage();
  }, 500);
},
/**
* 获取临时缓存照片路径，存入data中
*/
canvasToTempImage: function() {
var that = this;
//把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径。
wx.canvasToTempFilePath({
 canvasId: 'mycanvas',
 success: function(res) {
   var tempFilePath = res.tempFilePath;
   that.setData({
     imagePath: tempFilePath,
     canvasHidden:true
   });
 },
 fail: function(res) {
   console.log(res);
 }
});
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})