
Page({

  /**
   * 页面的初始数据
   */
  data: {
    UserInfo: {},
    SaveQuote: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({ title: '查询中' });//////////////////////////////////////
    var that = this;
    this.setData({
      orderId: options.orderId
    })
    wx.request({
      url: 'https://51yangcong.com/568data/QueryOrder',
      //url: 'https://localhost/568data/QueryOrder',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        'orderId': options.orderId
      },
      success: function success(res) {
        console.log(res.data)
        var o = res.data.result;
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
        wx.hideLoading();//////////////////////////////////////////////
      }
    });
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