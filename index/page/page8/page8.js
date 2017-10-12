
// 引入coolsite360交互配置设定
require('coolsite.config.js');

// 获取全局应用程序实例对象
var app = getApp();
var globalpos1 = -11;
var globalpos2 = -11;
var globalpos3 = -11;
// 创建页面实例对象
Page({
  /**
   * 页面名称
   */
  name: "page8",
  /**
   * 页面的初始数据
   */

  data: {
    number1: "",
    licenseNo:"",
    carVin: "",
    engineNo: "",
    array: ['小型汽车','大型汽车'],
    objectArray: [
      { id: '0', name: '小型汽车' },
      { id: '1', name: '大型汽车' }
    ],
    index: 0,
    indexid: '0',
    indexvalue: '小型汽车'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // 注册coolsite360交互模块
    app.coolsite360.register(this);
  },
  licenseNoInput: function (e) {
    var value = e.detail.value;
    var pos = e.detail.cursor;
    console.log(pos)
    if (globalpos1 != pos || pos == null) {
      globalpos1 = pos;
      this.setData({
        licenseNo: value.toUpperCase()
      })
      console.log(value.toUpperCase())
      return value.toUpperCase();
    } else if (globalpos1 == pos) {
      this.setData({
        licenseNo: value.toUpperCase()
      })
    }
  },
  carVinInput: function (e) {
    var value = e.detail.value;
    var pos = e.detail.cursor;
    console.log(pos)
    if (globalpos2 != pos || pos == null) {
      globalpos2 = pos;
      this.setData({
        carVin: value.toUpperCase()
      })
      console.log(value.toUpperCase())
      return value.toUpperCase();
    } else if (globalpos2 == pos) {
      this.setData({
        carVin: value.toUpperCase()
      })
    }
  },
  engineNoInput: function (e) {
    var value = e.detail.value;
    var pos = e.detail.cursor;
    console.log(pos)
    if (globalpos3 != pos || pos == null) {
      globalpos3 = pos;
      this.setData({
        engineNo: value.toUpperCase()
      })
      console.log(value.toUpperCase())
      return value.toUpperCase();
    } else if (globalpos3 == pos) {
      this.setData({
        engineNo: value.toUpperCase()
      })
    }
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
  bindPickerChange: function (e) {
    var that = this;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      indexid: that.data.objectArray[e.detail.value].id,
      indexvalue: that.data.objectArray[e.detail.value].name
    })
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


  //以下为自定义点击事件
  tap_TBXX: function (e) {
    //触发coolsite360交互事件
    app.coolsite360.fireEvent(e, this);
  }
})

