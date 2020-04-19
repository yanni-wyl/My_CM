// pages/homeWork/homeWork.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: [{
      notice: '《关于开学延期通知》',
      noticeContent: '现通知：由于突发疫情，开学时间推迟，具体开学时间等候通知，不可私自提前返校。',
      date: '2020-2-20'
    },
    {
      notice: '《网上主题班会召开》',
      noticeContent: '拟通知：近期将展开网上主题班会，班干部组织准备，具体时间稍后通知。',
      date: '2020-3-9'
    }, {
      notice: '《毕业设计进展汇报》',
      noticeContent: '请各毕业生向各自导师汇报近期毕业设计开展情况',
      date: '2020-4-6'
    }, {
      notice: '《返校问题》',
      noticeContent: '再次强调，各位同学特殊时期做好安全防护，不得擅自返校！',
      date: '2020-4-15'
    }],
    messageContent: [{
      line: '什么时候能开学？',
      lineReply: ['不知道呀', '同问']
    }, {
      line: '什么时候可以回学校？',
      lineReply: []
    }],
    Message: [
      {
        'time': '',
        'content': ''
      }
    ]
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
    let strs = JSON.stringify(messages + ';' + replies)
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
    array.time = now
    array.content = e.detail.value
    this.setData({
      Message: array
    })
  },

  //添加留言
  submitMessage: function (e) {
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