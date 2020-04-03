// pages/editMaterials/editMaterials.js
var myApp = getApp(); //f访问App.json
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  materialsData:{
    role:"",
    atSchool:"",
    position:""
    },

  handleSelectID:function(event){
    if(event.detail.value == "teacher"){
      this.materialsData.role = '教师'    
    } else {
      this.materialsData.role = '学生'    
    }
},

  handleInSchool:function(event){
    if(event.detail.value == "yes"){
      this.materialsData.atSchool = '是'    
    } else {
      this.materialsData.atSchool = '否'    
    }
      console.log(this.materialsData.atSchool)
  },

  
  handleInputName:function(event){
      this.materialsData.name = event.detail.value   
  },
  
  handleInputContact:function(event){
      this.materialsData.contact = event.detail.value   
  },
  
  handleInputNowAddress:function(event){
      this.materialsData.nowAddress = event.detail.value   
  },
  
  

  saveInfo: function() {
    if (this.materialsData.role == "点击选择，要勾选哦" || !this.materialsData.role) {
      wx.showToast({
        title: '请选择角色',
        icon: 'loading',
        duration: 2000
      })
      return
    }
    if (this.materialsData.atSchool == "点击选择，要勾选哦" || !this.materialsData.atSchool) {
      //用户交互反馈
      wx.showToast({
        title: '请选择在校情况',
        icon: 'loading',
        duration: 2000
      })
      return
    }
    if (this.materialsData.name == "点击选择，要勾选哦" || !this.materialsData.name) {
      wx.showToast({
        title: '请填写您的姓名',
        icon: 'loading',
        duration: 2000
      })
      return
    }
    if (this.materialsData.contact == "点击选择，要勾选哦" || !this.materialsData.contact) {
      wx.showToast({
        title: '请填写您的联系方式',
        icon: 'loading',
        duration: 2000
      })
      return
    }
    if (this.materialsData.nowAddress == "点击选择，要勾选哦" || !this.materialsData.nowAddress) {
      wx.showToast({
        title: '请填写您的居住地址',
        icon: 'loading',
        duration: 2000
      })
      return
    }
    //数组方法push，将表单数据保存到app.js里的globalInfo数组中去
    myApp.globalInfo.push(this.materialsData)
    console.log(myApp.globalInfo)
    this.setData({
      success: true
    })
  },
  backHome: function() {
    //页面返回API
    wx.navigateBack()
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