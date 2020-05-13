//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: {
      "a":1,
      "b":2,
      "c":3
    },
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../show/show'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onPullDownRefresh: function () {
    wx.showLoading({
      title: '加载中',
      mask:true
  
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    注意
    console.log(1);
    // wx.showToast({

    //         title:"刷新成功",
      
    //         icon: 'loading...',//图标，支持"success"、"loading" 
      
    //         image: '',//自定义图标的本地路径，image 的优先级高于 icon
      
    //         duration: 2000,//提示的延迟时间，单位毫秒，默认：1500 
      
    //         mask: true,//是否显示透明蒙层，防止触摸穿透，默认：false 
      
    //         success:function(){},
      
    //         fail:function(){},
      
    //         complete:function(){}
      
    //       })
      
    wx.stopPullDownRefresh();

  }
  

})
