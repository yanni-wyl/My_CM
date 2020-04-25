//app.js
App({
  onLaunch: function () {
    try {
      var res = wx.getSystemInfoSync()
      // console.log(res)
      this.globalData.windowWidth = res.windowWidth
      this.globalData.windowHeight = res.windowHeight
    } catch (e) {
      // Do something when catch error
    }
    
    // // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              // console.log(res.userInfo)
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  globalInfo: [{
    id:0,
    name:'李明',
    role:'student',
    roletext:'学生',
    school:'内江师范学院',
    majority:'信息与计算科学',
    class:'2016级6班',
    atSchool:'no',
    atSchooltext:"否",
    contact:'13256584967',
    nowAddress:'四川省绵阳市',
    image:'/pages/images/stu1.jpg'
  },{
    id:1,
    name:'韩梅梅',
    role:'student',
    roletext:'学生',
    school:'内江师范学院',
    majority:'信息与计算科学',
    class:'2016级6班',
    atSchool:'no',
    atSchooltext:"否",
    contact:'15264897586',
    nowAddress:'四川省南充市',
    image:'/pages/images/stu2.jpg'
  },{
    id:2,
    name:'张扬',
    role:'student',
    roletext:'学生',
    school:'内江师范学院',
    majority:'信息与计算科学',
    class:'2016级6班',
    atSchool:'no',
    atSchooltext:"否",
    contact:'13659874582',
    nowAddress:'四川省绵阳市',
    image:'/pages/images/stu3.jpg'
  },{
    id:3,
    name:'周毓歆',
    role:'student',
    roletext:'学生',
    school:'内江师范学院',
    majority:'信息与计算科学',
    class:'2016级6班',
    atSchool:'no',
    atSchooltext:"否",
    contact:'18459682365',
    nowAddress:'四川省自贡市',
    image:'/pages/images/stu4.jpg'
  },{
    id:4,
    name:'王瀚',
    role:'student',
    roletext:'学生',
    school:'内江师范学院',
    majority:'信息与计算科学',
    class:'2016级6班',
    atSchool:'no',
    atSchooltext:"否",
    contact:'17745824693',
    nowAddress:'四川省泸州市',
    image:'/pages/images/stu5.jpg'
  }],
  notices: [{
    notice: '关于开学延期通知',
    noticeContent: '现通知：由于突发疫情，开学时间推迟，具体开学时间等候通知，不可私自提前返校。',
    date: '2020-2-20'
  },
  {
    notice: '网上主题班会召开',
    noticeContent: '拟通知：近期将展开网上主题班会，班干部组织准备，具体时间稍后通知。',
    date: '2020-3-9'
  }, {
    notice: '毕业设计进展汇报',
    noticeContent: '请各毕业生向各自导师汇报近期毕业设计开展情况',
    date: '2020-4-6'
  }, {
    notice: '返校问题',
    noticeContent: '再次强调，各位同学特殊时期做好安全防护，不得擅自返校！',
    date: '2020-4-15'
  }],
  messageContent: [{
    line: '什么时候能开学？',
    lineReply: ['不知道呀', '同问'],
    time:'2020-3-27 16:52:11'
  }, {
    line: '什么时候可以回学校？',
    lineReply: ['快了'],
    time:'2020-3-28 15:32:16'
  }],
})