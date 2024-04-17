// pages/search/search.js
Page({
  /*页面的初始数据*/
  data: {
    list: []
  },
  data:{
    Lists:[]
  },
  staticData: {
    inputValue: ""
  },
  lostrecord:function(){
    wx.navigateTo({
      url:'/pages/search/lostrecords',
    })
  },
  /*生命周期函数--监听页面加载*/
  onLoad(options) {
    this.getSearchResult("");
    var Lists = wx.getStorageSync('lost-data')
    wx.removeStorageSync('lost-data')
  },
 getSearchResult(keyword) {
  wx.request({
       url: 'xxxxxx',
       data: {
         keyword: this.staticData.inputValue
       },
       method: "POST",
       header: {
         'content-type': 'application/x-www-form-urlencoded' 
       },
       success: this.getSearchResultSucc.bind(this)
  })
  },
  getSearchResultSucc(res) {
    // console.log(res)
    if (res.data.ret) {
      const result = res.data.data;
      this.setData({
        list: result
      })
    } else {
      this.setData({
        list: []
      })
    }
  },
  handleInputChange(e) {
    this.staticData.inputValue = list.detail.value;
  },
  handleSearch (keyword) {
    this.getSearchResult(keyword)
  },
  handleItemTap(e) {
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + lost.currentTaret.id
      })
  },
  /*生命周期函数--监听页面初次渲染完成*/
  onReady() {

  },

  /*生命周期函数--监听页面显示*/
  onShow() {

  },

  /*生命周期函数--监听页面隐藏*/
  onHide() {

  },
  /*生命周期函数--监听页面卸载*/
  onUnload() {

  },
  /*页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh() {

  },
  /*页面上拉触底事件的处理函数*/
  onReachBottom() {

  },
  /*用户点击右上角分享*/
  onShareAppMessage() {

  }
})

const App = getApp()