// pages/productDetail/productDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keywords: "",
    showItem1: false,
    showItem3: false,
    maskShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      keywords: options.name
    })
  },
  showTab1() {
    this.setData({
      showItem1: !this.data.showItem1,
      showItem3: false,
      maskShow:!this.data.showItem1
    })
  },
  showTab3() {
    this.setData({
      showItem1: false,
      showItem3: !this.data.showItem3,
      maskShow:!this.data.showItem3
    })
  },
  hideMask(){
    this.setData({
      showItem1:false,
      showItem3:false,
      maskShow:false
    })
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