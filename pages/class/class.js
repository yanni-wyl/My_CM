var myApp = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: '',
    messageContent: '',
    Message: []
  },
  noticeFX: function (e) {
    var noticeName = e.target.dataset.textnotice;
    var notices = e.target.dataset.textcontent
    var time = e.target.dataset.textdate
    let str = JSON.stringify(noticeName + ',' + notices + ',' + time)
    wx.navigateTo({
      url: '../notice/notice?jsonStr=' + str,
    })
  },
  messageFX: function (e) {
    console.log(e)
    var replies = e.target.dataset.textcontent;
    var messages = e.target.dataset.textmessage
    var time = e.target.dataset.texttime
    var id = e.target.id
    let strs = JSON.stringify(messages + ';' + replies + ';' + time+';'+id)
    console.log(replies)
    wx.navigateTo({
      url: '../messageDetails/messageDetails?jsonStr=' + strs,
    })
  },
  messageInput: function (e) {
    //获取当前时间戳  
    var timestamp = e.timestamp;
    timestamp = timestamp / 1000;
    //获取当前时间  
    var n = timestamp * 1000;
    var date = new Date(n);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时  
    var h = date.getHours();
    //分  
    var m = date.getMinutes();
    //秒  
    var s = date.getSeconds();
    var now = Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s
    var array = {}
    array.line = e.detail.value
    array.time = now
    this.setData({
      Message: array
    })
    console.log(this.data.Message)
  },

  //添加留言
  submitMessage: function (e) {
    myApp.messageContent.push(this.data.Message)
    console.log(myApp.messageContent)
    this.setData({
      success: true
    })
  },
  backHome(e) {
    //页面返回API
    wx.navigateBack({
      delta: 2
    })
    this.setData({
      success: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   messageContent:myApp.messageContent
    // })
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
    this.setData({
      content: myApp.notices,
      messageContent: myApp.messageContent
    })
    console.log(this.data.messageContent)
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