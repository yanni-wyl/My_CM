// pages/rollCall/rollCall.js
var myApp = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: "",
    latitude: "",
    controls: [{
      id: 1,
      iconPath: '../images/location.png',
      position: {
        left: myApp.globalData.windowWidth / 2 - 10,
        top: (myApp.globalData.windowHeight - 40) / 2 - 46,
        width: 20,
        height: 25
      },
      clickable: true
    },
    {
      id: 1,
      iconPath: '../images/reset.png',
      position: {
        left: 15,
        top: myApp.globalData.windowHeight - 120,
        width: 20,
        height: 20
      },
      clickable: true
    }
  ],
  markers: []
  },

  controltap: function() {
    this.mapCtx.moveToLocation()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.getLocation();
    this.mapCtx = wx.createMapContext('map')
    this.showPublishInfo();
  },

  showPublishInfo: function(){
    //数组的迭代器方法map()  ，把数组里边的每一项对象都做处理，最后把返回值组合起来成为数组
    var makers = myApp.globalInfo.map(
      function(arrItem, index) {
        return {
          iconPath:"/images/"+arrItem.type+".png",
          id: index,
          latitude: arrItem.latitude,
          longitude: arrItem.longitude,
          width: 40,
          height: 40
        }
      }
    )
    this.setData({
      markers: makers
    })
  },

  getLocation: function() {
    //获取当前位置API-->wx.getLocation
    wx.getLocation({
      type: 'gcj02',
      success: this.hanleGetLocationSucc
    })
  },
  hanleGetLocationSucc: function(res) {
    console.log(res);
    this.setData({
      longitude: res.longitude,
      latitude: res.latitude
    })
  },

  markertap:function(event){
   //console.log(event)
    //页面跳转API
    wx.navigateTo({
      url: "/pages/rollCall/rollCall?id="+event.markerId
    })
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
    return {
      title: '班级管理平台',
      path: 'pages/index/index'
    }
  }
})