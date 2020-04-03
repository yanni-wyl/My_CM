// pages/homeWork/homeWork.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Message: [
      {
        'time': '',
        'content': ''
      }
    ]
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
    // const db = wx.cloud.database()
    // db.collection('Message').add({
    //   data:{
    //     Message:array
    //   }
    // })

  },

  //添加
  submitMessage: function (e) {
    console.log(e)
    // 创建数据库实例
    // const db = wx.cloud.database()
    // // 2. 构造查询语句
    // // collection 方法获取一个集合的引用
    // // 可以使用where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等）
    // // get 方法会触发网络请求，往数据库取数据
    // db.collection('Message').get({
    //   success(res) {
    //     console.log(res)
    //   }
    // })

    const db = wx.cloud.database()
    db.collection('Message').add({
      data: {
        Message: array
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          success:true,
          username: e.detail.value.username
        })
        wx.showToast({
          title: '新增记录成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },

  saveMessage: function (event) {

    wx.navigateTo({
      url: '../myMessage/myMessage?Message=' + this.data.Message,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.init({
      env: 'eric-demo',
      traceUser: true
    });
    const db = wx.cloud.database()
    // 2. 构造查询语句
    // collection 方法获取一个集合的引用
    // 可以使用where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等）
    // get 方法会触发网络请求，往数据库取数据
    db.collection('Message').get({
      success(res) {
        console.log(res)
      }
    })
  
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