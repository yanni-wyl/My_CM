var myapp = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuInfo: '',
    name: ''
  },
  infoDetails: function (e) {
    console.log(e.currentTarget.dataset.textname)
    var transmitName = e.currentTarget.dataset.textname
    let str = JSON.stringify(transmitName)
    wx.navigateTo({
      url: '../info/info?jsonStr=' + str,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(myapp.globalInfo)
    this.setData({
      // pictures:myapp.globalInfo
      stuInfo: myapp.globalInfo
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