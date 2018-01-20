// 0baoyangjilu.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    listData: [],
    inputValue: '', //用于显示输入语句  
    searchinput: '', //用户输入的查询语句  
    result_content: [],
    result_description :[]
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
        'orderId': options.orderId,//"mo2ota4j0b9rcte1cdpmrsesz9lpl110"
        'payType': 'BYJL'
      },
      success: function success(res) {
        console.log(res.data)
        var o = res.data.result;
        if (typeof (res.data) != "object"){
          o = JSON.parse(res.data.replace('\\','')).result;
        }
        if (o == null) {
          wx.showModal({
            title: '提示',
            content: res.data.errorMessage,
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
        var summaryInfoList = [
          { "code": "公里数", "text": o.total_mileage },
          { "code": "异常次数", "text": o.number_of_accidents },
          { "code": "车辆品牌", "text": o.car_brand },
          { "code": "最后到店时间", "text": o.last_time_to_shop },
          { "code": "结果报告", "text": o.result_report }
        ]
        wx.hideLoading();//////////////////////////////////////////////
        that.setData({ listData: summaryInfoList, result_description: o.result_description, result_content: o.result_content })
      },
      'fail': function (res) {
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