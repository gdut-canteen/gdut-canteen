// pages/user/user.js
Page({
  /* 页面的初始数据*/
  data: {

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
  },

  /* 用户点击右上角分享 */
  onShareAppMessage() {

  }
})