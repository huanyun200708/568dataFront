
// 引入coolsite360交互配置设定
require('coolsite.config.js');

// 获取全局应用程序实例对象
var app = getApp();

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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // 注册coolsite360交互模块
    app.coolsite360.register(this);
  },
  bindKeyInput: function (e) {
    this.setData({
      licenseNo: e.detail.value
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
    if (this.data.index == 0) {
      this.setData({
        inputValue: e.detail.value,
        frameNo: e.detail.value,
        licenseNo:""
      })
    } else {
      this.setData({
        inputValue: e.detail.value,
        licenseNo: e.detail.value,
        frameNo: ""
      })
    }

  },
  //以下为自定义点击事件
  tap_CXCX: function (e) {
    //触发coolsite360交互事件
    app.coolsite360.fireEvent(e, this);
  }
})

