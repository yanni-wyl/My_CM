
Page({
  /**
   * 页面的初始数据
   */
  data: {
    line: '',
    content: '',
    focusInput: false,
    isInput: false,
    inputComment:''
  },
  commentBtn: function () {
    this.setData({
      focusInput: true,
      isInput: true,
    })
  },
  handleInput:function(e){
    // console.log(e)
      this.data.inputComment = e.detail.value
  },
  inputFocus(e) {
    // console.log(e, '键盘弹起')
    this.setData({
      isInput: true
    })
  },
  inputBlur() {
    // console.log('键盘收起')
    this.setData({
      isInput: false
    })
  },
  comfirmStatus: function (e) {
    this.data.content.push(this.data.inputComment)
    console.log(this.data.content)
    wx.showToast({
      title: '评论成功！',
    })
    // this.setData({
    //   isInput: false
    // })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let items = JSON.parse(options.jsonStr)
    var messages = items.split(';')
    var replies = messages[1].split(',')
    this.setData({
      line: messages[0],
      content: replies
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