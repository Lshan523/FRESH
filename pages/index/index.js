//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      menus:["精选","水果","海鲜","肉禽类","素食","蔬菜","乳饮"],
      slideLeft:0,
      templates:["Featured","fruit","seafood","Meatbird","Vegetarian","vegetables","Milkdrink"],
      templateIndex:0,
      gg:"天下较为"
  },
  onLoad: function () {

  },
  currentItem(e){
      let index = e.currentTarget.dataset.index;
      this.setData({
        slideLeft:index*138,
        templateIndex:index
      })
  }
})
