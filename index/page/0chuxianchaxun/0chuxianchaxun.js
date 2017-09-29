
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // 注册coolsite360交互模块
    app.coolsite360.register(this);
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
        inputValue: e.detail.value,
        licenseNo: value.toUpperCase()
      })
      console.log(value.toUpperCase())
      return value.toUpperCase();
    } else if (globalpos == pos) {
      this.setData({
        inputValue: e.detail.value,
        licenseNo: value.toUpperCase()
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
        inputValue1: e.detail.value,
        frameNo: value.toUpperCase()
      })
      console.log(value.toUpperCase())
      return value.toUpperCase();
    } else if (globalpos1 == pos) {
      this.setData({
        inputValue1: e.detail.value,
        frameNo: value.toUpperCase()
      })
    }
  },
  //以下为自定义点击事件
  tap_CXCX: function (e) {
    //触发coolsite360交互事件
    app.coolsite360.fireEvent(e, this);
  }
})

