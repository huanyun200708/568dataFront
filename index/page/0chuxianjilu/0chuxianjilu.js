// 0chuxianjilu.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    listData: [],
    inputValue: '', //用于显示输入语句  
    searchinput: '', //用户输入的查询语句  
    carClaimRecords:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
          return;
        }
        var summaryInfoList = [
          // { "code": "车牌号", "text": '' },
          { "code": "出险次数", "text": o.summaryData.claimCount },
          { "code": "理赔总金额(元)", "text": o.summaryData.claimMoney },
          { "code": "维修总金额(元)", "text": o.summaryData.repairMoney },
          { "code": "维修总件数", "text": o.summaryData.repairCount },
          { "code": "换件总金额(元)", "text": o.summaryData.renewMoney }
        ]
        that.setData({ listData: summaryInfoList, carClaimRecords: o.carClaimRecords})
        wx.showToast({
          title: o.reason,
          icon: 'success',
          duration: 2000
        })
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