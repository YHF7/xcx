// pages/my/my.js 测试组件
var obj = require("../../utils/show.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "儿子",
    arr: [{
        "name": "a1",
        "pwd": 123
      },
      {
        "name": "a2",
        "pwd": 456
      },
      {
        "name": "a3",
        "pwd": 789
      },
      {
        "name": "a4",
        "pwd": 987
      },
      {
        "name": "a5",
        "pwd": 654
      }
    ],
    bol:true,
    imgUrls: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg"
    ]
  },
  show:function (){
    this.setData({
      bol:!this.data.bol
    })
  },
  get:function (event){
    console.log(event.target.dataset.abc)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    obj.show();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})