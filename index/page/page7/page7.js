
// 引入coolsite360交互配置设定
require('coolsite.config.js');

// 获取全局应用程序实例对象
var app = getApp();
var globalpos=-11;
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
    number1 : "",
    cltype : "",
    array: ['大型汽车', '小型汽车', '使馆汽车', '领馆汽车', '境外汽车', '外籍汽车', '普通摩托车', '轻便摩托车', '使馆摩托车', '领馆摩托车', '境外摩托车', '外籍摩托车', '低速车', '拖拉机', '挂车', '教练汽车', '教练摩托车', '临时入境汽车', '临时入境摩托车', '临时行驶车', '警用汽车', '警用摩托'],
    objectArray: [
      { id: '01', name: '大型汽车' },
      { id: '02', name: '小型汽车' },
      { id: '03', name: '使馆汽车' },
      { id: '04', name: '领馆汽车' },
      { id: '05', name: '境外汽车' },
      { id: '06', name: '外籍汽车' },
      { id: '07', name: '普通摩托车' },
      { id: '08', name: '轻便摩托车' },
      { id: '09', name: '使馆摩托车' },
      { id: '10', name: '领馆摩托车' },
      { id: '11', name: '境外摩托车' },
      { id: '12', name: '外籍摩托车' },
      { id: '13', name: '低速车' },
      { id: '14', name: '拖拉机' },
      { id: '15', name: '挂车' },
      { id: '16', name: '教练汽车' },
      { id: '17', name: '教练摩托车' },
      { id: '20', name: '临时入境汽车' },
      { id: '21', name: '临时入境摩托车' },
      { id: '22', name: '临时行驶车' },
      { id: '23', name: '警用汽车' },
      { id: '24', name: '警用摩托' }
    ],
    index: 1,
    indexid: '02',
    indexvalue: '小型汽车'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // 注册coolsite360交互模块
    app.coolsite360.register(this);
  },
  bindKeyInput: function (e) {
    var value = e.detail.value;
    var pos = e.detail.cursor;
    console.log(pos)
    if (globalpos != pos || pos == null) {
      globalpos = pos;
      this.setData({
        number1: value.toUpperCase()
      })
      console.log(value.toUpperCase())
      return value.toUpperCase();
    } else if (globalpos == pos) {
      this.setData({
        number1: value.toUpperCase()
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
  //以下为自定义点击事件
  tap_CLZT: function (e) {
    //触发coolsite360交互事件
    app.coolsite360.fireEvent(e, this);
  }
})

