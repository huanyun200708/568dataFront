var coolsite360 = require('./coolsite/index.js');
var user;
App({
  onLaunch: function (options) {
    wx.showModal({
      title: '提示',
      content: options.shareTicket,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    console.log(options)
  },
  coolsite360: coolsite360
})