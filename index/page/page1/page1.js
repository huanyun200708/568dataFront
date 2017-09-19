
// 引入coolsite360交互配置设定
require('coolsite.config.js');

// 获取全局应用程序实例对象
var app = getApp();
// 创建页面实例对象
Page({
  /**
   * 页面名称
   */
  name: "page1",
  /**
   * 页面的初始数据
   */

  data: {

    userInfo: {},
    userLeve : ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 注册coolsite360交互模块
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo;
        var nickName = userInfo.nickName;
        var avatarUrl = userInfo.avatarUrl;
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province;
        var city = userInfo.city;
        var country = userInfo.country;
        that.setData({
          userInfo: userInfo
        })
        wx.login({
          success: function (res) {
            wx.request({
              url: 'https://51yangcong.com/568data/MemberQuery',
//url: 'https://localhost/568data/MemberQuery',
              method: 'POST',
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              data: {
                'code': res.code
              },
              success: function success(res) {
                console.log(res)
                if (res.data.error != '0') {
                  wx.showModal({
                    title: '提示',
                    content: res.data.error,
                    success: function (res) {
                      if (res.confirm) {
                        console.log('用户点击确定')
                      } else if (res.cancel) {
                        console.log('用户点击取消')
                      }
                    }
                  })
                  return;
                } else {
                  that.setData({
                    userLeve: res.data.result
                  })
                }
              }
            });
          }
          });
      }
    })
    app.coolsite360.register(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 执行coolsite360交互组件展示
    app.coolsite360.onShow(this);
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo;
        var nickName = userInfo.nickName;
        var avatarUrl = userInfo.avatarUrl;
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province;
        var city = userInfo.city;
        var country = userInfo.country;
        that.setData({
          userInfo: userInfo
        })
        wx.login({
          success: function (res) {
            wx.request({
              url: 'https://51yangcong.com/568data/MemberQuery',
//url: 'https://localhost/568data/MemberQuery',
              method: 'POST',
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              data: {
                'code': res.code
              },
              success: function success(res) {
                console.log(res)
                if (res.data.error != '0') {
                  wx.showModal({
                    title: '提示',
                    content: res.data.error,
                    success: function (res) {
                      if (res.confirm) {
                        console.log('用户点击确定')
                      } else if (res.cancel) {
                        console.log('用户点击取消')
                      }
                    }
                  })
                  return;
                } else {
                  that.setData({
                    userLeve: res.data.result
                  })
                }
              }
            });
          }
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },


  //以下为自定义点击事件

  tap_2bc1e07e: function (e) {
    //触发coolsite360交互事件
    app.coolsite360.fireEvent(e, this);
  },

  tap_fdac8192: function (e) {
    //触发coolsite360交互事件
    app.coolsite360.fireEvent(e, this);
  },

  tap_4fcd2697: function (e) {
    //触发coolsite360交互事件
    app.coolsite360.fireEvent(e, this);
  },

  tap_5da47727: function (e) {
    //触发coolsite360交互事件
    app.coolsite360.fireEvent(e, this);
  },

})

