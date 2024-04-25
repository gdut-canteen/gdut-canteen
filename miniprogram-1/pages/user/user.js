// pages/user/user.js
const app = getApp();
Page({
  /* 页面的初始数据*/
  data: {

  },

  /**监听界面显示 */
  onShow() {
    if(this.data.nickName != app.globalData.userName){
      this.setData({
        nickName:app.globalData.userName
      })
    }
    else if(this.data.avatarUrl != app.globalData.userAvatarUrl){
      this.setData({
        avatarUrl:app.globalData.userAvatarUrl
      })
    }
  },
  
  /* 获取头像 */
  closeTank(e){
    if(!this.data.userInfo_tank){
      this.setData({
        userInfo_tank:true
      })
    }
    else{
      this.setData({
        userInfo_tank:false
      })
    }
  },

  /* *获取头像 */
  onChooseAvatar(e){
    console.log(e);
    this.setData({
      avatarUrl:e.detail.avatarUrl
    })
  },

  /* *获取用户昵称 */
  getNickName(e) {
    console.log(e);
    this.setData({
        nickName: e.detail.value
    })
  },

  submit(e) {
    if (!this.data.avatarUrl) {
        return wx.showToast({
            title: '请选择头像',
            icon: 'error'
        })
    }
    if (!this.data.nickName) {
        return wx.showToast({
            title: '请输入昵称',
            icon: 'error'
        })
    }
    this.setData({
        userInfo_tank: false
    })
    app.globalData.userAvatarUrl = this.data.avatarUrl;
    app.globalData.userName = this.data.nickName;
  },

  /* 用户点击右上角分享 */
  onShareAppMessage() {

  }
})