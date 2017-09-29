
// 引入coolsite360交互配置设定
require('coolsite.config.js');

// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
  /**
   * 页面名称
   */
  name: "page2",
  /**
   * 页面的初始数据
   */

  data: {
    
  
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.showLoading({ title: '查询中' });//////////////////////////////////////
    var that = this;
    wx.login({
      success: function (res) {
        wx.request({
          url: 'https://51yangcong.com/568data/PayRecord',
          //url: 'https://localhost/568data/PayRecord',
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            'code': res.code
          },
          success: function success(res) {
            wx.hideLoading();//////////////////////////////////////////////
            console.log(res.data)
            var o = res.data;
            if (o == null) {
              wx.showModal({
                title: '提示',
                content: res.data.reason,
                success: function (res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
              wx.hideLoading();//////////////////////////////////////////////
              return;
            }
            that.setData({ result: o });
          },
          'fail': function (res) {
            wx.hideLoading();//////////////////////////////////////////////
          }
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {

    wx.showLoading({ title: '查询中' });//////////////////////////////////////
    var that = this;
    wx.login({
      success: function (res) {
        wx.request({
          url: 'https://51yangcong.com/568data/PayRecord',
          //url: 'https://localhost/568data/PayRecord',
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            'code': res.code
          },
          success: function success(res) {
            wx.hideLoading();//////////////////////////////////////////////
            console.log(res.data)
            var o = res.data;
            if (o == null) {
              wx.showModal({
                title: '提示',
                content: res.data.reason,
                success: function (res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
              wx.hideLoading();//////////////////////////////////////////////
              return;
            }
            that.setData({ result: o });
          },
          'fail': function (res) {
            wx.hideLoading();//////////////////////////////////////////////
          }
        });
      }
    });
  },


  //以下为自定义点击事件
  tap_CKXQ: function (e) {
    var id = e.target.id;
    if (id.indexOf("[$$]CLZT")>-1){
      wx.navigateTo({ url: '../0cheliangzhuangtai/0cheliangzhuangtai?orderId=' + id.replace('[$$]CLZT', "") });
    } else if (id.indexOf("[$$]BYJL") > -1) {
      wx.navigateTo({ url: '../0baoyangjilu/0baoyangjilu?orderId=' + id.replace('[$$]BYJL', "") });
    } else if (id.indexOf("[$$]CXJL") > -1) {
      wx.navigateTo({ url: '../0chuxianjilu/0chuxianjilu?orderId=' + id.replace('[$$]CXJL', "") });
    } else if (id.indexOf("[$$]TBXX") > -1) {
      wx.navigateTo({ url: '../0toubaoxinxi/0toubaoxinxi?orderId=' + id.replace('[$$]TBXX', "") });
    }
    
  }
})

