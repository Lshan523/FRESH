// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: ["推荐分类", "新鲜水果", "海鲜水产", "蔬菜蛋品", "精选肉类", "乳品冷饮", "面点烘培", "方便速食", "火锅丸料", "安心品质", "送礼佳品", "特色生鲜"],
    curLeftNavIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  NavItem(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      curLeftNavIndex:index
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