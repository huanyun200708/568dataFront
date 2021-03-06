
// 引入coolsite360交互配置设定
require('coolsite.config.js');

// 获取全局应用程序实例对象
var app = getApp();
var globalpos = -11;
var globalpos1 = -11;
// 创建页面实例对象
Page({
  /**
   * 页面名称
   */
  name: "page7",
  /**
   * 页面的初始数据
   */

  data: {
    inputValue: "",
    inputValue1: "",
    licenseNo: "",
    frameNo: "",
    array: ['车架', '车牌'],
    objectArray: [
      {
        id: 0,
        name: '车架'
      },
      {
        id: 1,
        name: '车牌'
      }
    ],
    index: 0
  },
  onShareAppMessage: function (res) {
    wx.showLoading({ title: '' });
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    var now = new Date();
    var voucher_code = getApp().data.userOpenId +'_'+now.getTime()+Math.round(Math.random() * 10000);
    return {
      title: '快来分享领红包，手慢就没了',
      imageUrl: 'https://51yangcong.com/568data/image/1.jpg',
      path: 'page/page6/page6?from=' + getApp().data.userOpenId + "&voucher_code=" + voucher_code,
      success: function (res) {
        wx.request({
          url: 'https://51yangcong.com/568data/shareDaijinquan_daijinquan.do',
          //url: 'http://aqvwkm.natappfree.cc/568data/shareDaijinquan_daijinquan.do',
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            'openId': getApp().data.userOpenId,
            voucher_code: voucher_code
          },
          success: function success(res) {
            console.log(res.data)
            var o = res.data;
            if (o.success) {
              console.log("转发成功")
            }
            wx.hideLoading();//////////////////////////////////////////////
          },
          'fail': function (res) {
            wx.hideLoading();//////////////////////////////////////////////
          }
        });
        // console.log(res.shareTickets[0])
        // wx.getShareInfo({
        //   shareTicket: res.shareTickets[0],
        //   success: function (res) { 
        //     console.log("已转发 来自openid:" + getApp().data.userOpenId);
        //     console.log(res)
        //      },
        //   fail: function (res) { console.log(res) },
        //   complete: function (res) { console.log(res) }
        // })
      },
      fail: function (res) {
        // 分享失败
        console.log(res)
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // 注册coolsite360交互模块
    app.coolsite360.register(this);
        wx.showShareMenu({
      withShareTicket: true,
      success: function (res) {
        // 分享成功
        console.log('shareMenu share success')
        console.log('分享' + res)
      },
      fail: function (res) {
        // 分享失败
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    wx.hideLoading();
    // 执行coolsite360交互组件展示
    app.coolsite360.onShow(this);
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
    
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindKeyInput: function (e) {
    var value = e.detail.value;
    var pos = e.detail.cursor;
    console.log(pos)
    if (globalpos != pos || pos == null) {
      globalpos = pos;
      this.setData({
        inputValue: e.detail.value.replace(" ",""),
        licenseNo: value.toUpperCase().replace(" ","")
      })
      console.log(value.toUpperCase().replace(" ",""))
      return value.toUpperCase().replace(" ","");
    } else if (globalpos == pos) {
      this.setData({
        inputValue: e.detail.value.replace(" ",""),
        licenseNo: value.toUpperCase().replace(" ","")
      })
    }
  },
  bindKeyInput1: function (e) {
    var value = e.detail.value;
    var pos = e.detail.cursor;
    console.log(pos)
    if (globalpos1 != pos || pos == null) {
      globalpos1 = pos;
      this.setData({
        inputValue1: e.detail.value.replace(" ",""),
        frameNo: value.toUpperCase().replace(" ","")
      })
      console.log(value.toUpperCase().replace(" ",""))
      return value.toUpperCase().replace(" ","");
    } else if (globalpos1 == pos) {
      this.setData({
        inputValue1: e.detail.value.replace(" ",""),
        frameNo: value.toUpperCase().replace(" ","")
      })
    }
  },
  //以下为自定义点击事件
  tap_CXCX: function (e) {
    //触发coolsite360交互事件
    app.coolsite360.fireEvent(e, this);
  }
})

