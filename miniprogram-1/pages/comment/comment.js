// pages/comment/comment.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query: options
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  getStars(e){
    this.setData({
      userStars:e.detail.value
    })
  },

  getComments(e){
    this.setData({
      userComment:e.detail.value
    })
  },

  submit(){
    var userStars = this.data.userStars;
    if(userStars != 1 && userStars != 2 && userStars != 3 && userStars != 4 && userStars != 5){
      wx.showToast({
        title: '评星必须是1~5的整数',
        icon:'error'
      })
    }
    else{
      //获取评论总数量
      var cc = wx.getStorageSync('commentCount').commentcount;
      if(cc == undefined){
        wx.setStorageSync('commentCount', {
          commentcount:0
        })
        cc = 0
      }
      var comments = 'comment' + cc
      comments = 'comment' + cc
      //设置评论并存储
      wx.setStorageSync(comments, {
        id:cc + 1,
        stars:userStars,
        comment:this.data.userComment,
        window:this.data.query.title
      })
      //评论总数+1
      wx.setStorageSync('commentCount', {
        commentcount:cc+1
      })
      console.log(wx.getStorageSync(comments))
      console.log(comments)
      wx.navigateTo({
        url: '/pages/windowInfo/windowInfo?stars=' + this.data.query.stars + '&title=' + this.data.query.title
      })
      wx.showToast({
        title: '评论成功',
        icon:'success'
      })
    }
  }
})