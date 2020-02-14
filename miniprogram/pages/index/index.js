Page({

  /**
   * 页面的初始数据
   */
  data: {
    navitemList:[
      "首页",
      "动画",
      "番剧",
      "原创",
      "音乐",
      "鬼畜",
      "游戏",
      "视频",
      "自媒体"
    ],
    currentIndex : 0,
    
  },

  activeIndex(e){
    console.log(e.target.dataset.curindex);

    this.setData({
      currentIndex : e.target.dataset.curindex,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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