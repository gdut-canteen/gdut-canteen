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
      app.globalData.userComments[app.globalData.userCommentsCount] = 
      {
        id:app.globalData.userCommentsCount + 1,
        stars:userStars,
        comment:this.data.userComment,
        window:this.data.query.title
      }
      app.globalData.userCommentsCount += 1; 
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