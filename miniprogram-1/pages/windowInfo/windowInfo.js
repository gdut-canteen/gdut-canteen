// pages/windowInfo/windowInfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:{},
    comment:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query: options,
    })
    var cc = wx.getStorageSync('commentCount').commentcount
    var commentsArray = []; // 用于存储 commentdata 的数组
    for(var i = 0; i < cc; i++){
      var comments = 'comment' + i
      var commentdata = wx.getStorageSync(comments)
      if(commentdata.window == this.data.query.title){
        commentsArray.push(commentdata);
      }
    }
    this.setData({
      comment:commentsArray
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      nickname:app.globalData.userName,
      avatarUrl:app.globalData.userAvatarUrl
    })
  },

  /**跳转到评论 */
  write(){
    wx.navigateTo({
      url: '/pages/comment/comment?title=' + this.data.query.title + '&stars=' + this.data.querystars
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})