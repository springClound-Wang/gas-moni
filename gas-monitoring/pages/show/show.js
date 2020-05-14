//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    user:{"avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKmLUfkH42Cic5iaFAqvJhb8NpWswdXdficJQgdDcRCLxn2czOEGwamsPVjSvWIKfOWfDiaTE6JHbQQRQ/132","nickName":"WANG🔥"}
  },
  onLoad: function(options) {

        var that = this;
    
        //查看是否授权
    
        wx.getSetting({
    
          success: function(res) {
    
            if (res.authSetting['scope.userInfo']) {
    
              console.log("用户授权了");
    
            } else {
    
              //用户没有授权
    
              console.log("用户没有授权");
    
            }
    
          }
    
        });
    
      },
    
    bindGetUserInfo: function(res) {
    
        if (res.detail.userInfo) {
    
          //用户按了允许授权按钮
    
          var that = this;
    
          // 获取到用户的信息了，打印到控制台上看下
    
          console.log("用户的信息如下：");
    
          console.log(res.detail.userInfo);

          //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
    
          that.setData({
    
              user: res.detail.userInfo
    
          });
    
        } else {
    
          //用户按了拒绝按钮
    
          wx.showModal({
    
            title: '警告',
    
            content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
    
            showCancel: false,
    
            confirmText: '返回授权',
    
            success: function(res) {
    
              // 用户没有授权成功，不需要改变 isHide 的值
    
              if (res.confirm) {
    
                console.log('用户点击了“返回授权”');
    
              }
    
            }
    
          });
    
        }
    
     }
    
})
