// pages/user/userChange.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("接受shoufengqin页面传递过来的参数：",options)
    this.setData({
      avatarUrl: options.avatarUrl,
      nickName: options.nickName
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  getName(e) {
    this.setData({
      nickName: e.detail.value
    })
  },

  chooseImage() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sizeType: ['compressed'], //可以指定是原图还是压缩图，这里用压缩
      sourceType: ['album', 'camera'], //从相册选择
      success: (res) => {
        console.log("选择图片成功", res)
        this.setData({
          avatarUrl: res.tempFiles[0].tempFilePath
        })
      }
    })
  },

  /** */
  submit(){
    /* 设置globalData属性，保存用户属性*/
    app.globalData.userAvatarUrl = this.data.avatarUrl;
    app.globalData.userName = this.data.nickName;
    
    wx.switchTab({
      url: '/pages/user/user',
    })//移动到user界面
    wx.showToast({
      title: '成功修改',
      icon: 'success',
      duration: 2000
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})