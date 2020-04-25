// pages/editMaterials/editMaterials.js
var myApp = getApp(); //f访问App.json
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  materialsData:{
    id:'',
    name:"",
    role:"teacher",
    roletext:"教师",
    atSchool:"yes",
    atSchooltext:"是",
    },

  handleSelectID:function(event){
    this.materialsData.role = event.detail.value;
    if(event.detail.value == "student"){
      this.materialsData.roletext = '学生'    
    } else {
      this.materialsData.roletext = '教师'    
    }
},

  handleInSchool:function(event){
    this.materialsData.atSchool = event.detail.value;
    if(event.detail.value == "no"){
      this.materialsData.atSchooltext = '否'    
    } else {
      this.materialsData.atSchooltext = '是'    
    }
  },

  
  handleInputName:function(event){
      this.materialsData.name = event.detail.value   
  },
  
  handleInputContact:function(event){
      this.materialsData.contact = event.detail.value   
  },
  handleInputSchool:function(event){
    this.materialsData.school = event.detail.value
  },  
  handleInputMajority:function(event){
    this.materialsData.majority = event.detail.value
  },
  handleInputClass:function(event){
    this.materialsData.class = event.detail.value
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
        title: '请填写联系方式',
        icon: 'loading',
        duration: 2000
      })
      return
    }
    if (this.materialsData.nowAddress == "点击选择，要勾选哦" || !this.materialsData.nowAddress) {
      wx.showToast({
        title: '请填写居住地址',
        icon: 'loading',
        duration: 2000
      })
      return
    }
    console.log(myApp.globalInfo.length)
    
    this.materialsData.id = myApp.globalInfo.length
    this.materialsData.image = myApp.globalData.userInfo.avatarUrl
    //数组方法push，将表单数据保存到app.js里的globalInfo数组中去
    myApp.globalInfo.push(this.materialsData)
    console.log(myApp.globalInfo)
    this.setData({
      success:true
    })
  },
  backHome: function() {
    //页面返回API
    this.setData({
      success:false
    })
    wx.navigateBack({
      delta: 2
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