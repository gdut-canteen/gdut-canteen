// pages/dxc/dxc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Lists:[//TODO:需要将stars的值进行计算
      {id:0, imageSrc:"/images/canteens/third/一楼大众自选.jpg", name:"三饭一楼大众自选", stars:null},
      {id:1, imageSrc:"/images/canteens/third/一楼小笼包.jpg", name:"三饭一楼小笼包", stars:null},
      {id:2, imageSrc:"/images/canteens/third/一楼广式烧腊.jpg", name:"三饭一楼广式烧腊", stars:null},
      {id:3, imageSrc:"/images/canteens/third/一楼扒饭.jpg", name:"三饭一楼扒饭", stars:null},
      {id:4, imageSrc:"/images/canteens/third/一楼朝式卤味.jpg", name:"三饭一楼潮式卤味", stars: null},
      {id:5, imageSrc:"/images/canteens/third/一楼汤粉面.jpg", name:"三饭一楼汤粉面", stars:null},
      {id:6, imageSrc:"/images/canteens/third/一楼湘小厨.jpg", name:"三饭一楼湘小厨", stars:null},
      {id:7, imageSrc:"/images/canteens/third/一楼滑蛋饭.jpg", name:"三饭一楼滑蛋饭", stars:null},
      {id:8,imageSrc:"/images/canteens/third/一楼炒饭.jpg", name:"三饭一楼炒饭", stars:null},
      {id:9, imageSrc:"/images/canteens/third/一楼特色套餐.jpg", name:"三饭一楼特色套餐", stars:null},
      {id:10, imageSrc:"/images/canteens/third/一楼猪杂汤饭.jpg", name:"三饭一楼猪杂汤饭", stars: null},
      {id:11, imageSrc:"/images/canteens/third/一楼肠粉蒸笼饭.jpg", name:"三饭一楼肠粉蒸笼饭", stars:null},
      {id:12, imageSrc:"/images/canteens/third/一楼酸菜鱼.jpg", name:"三饭一楼酸菜鱼", stars: null},
      {id:13, imageSrc:"/images/canteens/third/一楼铁板饭.jpg", name:"三饭一楼铁板饭", stars:null},
      {id:14, imageSrc:"/images/canteens/third/一楼鸡公煲.jpg", name:"三饭一楼鸡公煲", stars: null},
      {id:15, imageSrc:"/images/canteens/third/二楼关东煮.jpg", name:"三饭二楼关东煮", stars:null},
      {id:16, imageSrc:"/images/canteens/third/二楼品胜套餐.jpg", name:"三饭二楼品胜·套餐", stars:null},
      {id:17, imageSrc:"/images/canteens/third/二楼小锅猪肚包鸡.jpg", name:"三饭二楼小锅猪肚包鸡", stars:null},
      {id:18, imageSrc:"/images/canteens/third/二楼江西米粉.jpg", name:"三饭二楼江西米粉", stars:null},
      {id:19, imageSrc:"/images/canteens/third/二楼油泼面甜品粥.jpg", name:"三饭二楼油泼面甜品·粥", stars:null},
      {id:20, imageSrc:"/images/canteens/third/二楼泰岛蛋.jpg", name:"三饭二楼泰岛蛋", stars:null},
      {id:21, imageSrc:"/images/canteens/third/二楼港式烧腊卤水.jpg", name:"三饭二楼港式烧腊卤水", stars:null},
      {id:22, imageSrc:"/images/canteens/third/二楼点食称斤.jpg", name:"三饭二楼点食称斤", stars:null},
      {id:23, imageSrc:"/images/canteens/third/二楼煲仔饭.jpg", name:"三饭二楼煲仔饭", stars:null},
      {id:24, imageSrc:"/images/canteens/third/二楼瓦罐汤.jpg", name:"三饭二楼瓦罐汤", stars:null},
      {id:25, imageSrc:"/images/canteens/third/二楼肠粉螺狮粉.jpg", name:"三饭二楼肠粉·螺狮粉", stars:null},
      {id:26, imageSrc:"/images/canteens/third/二楼脆皮鸡饭.jpg", name:"三饭二楼脆皮鸡饭", stars:null},
      {id:27,imageSrc:"/images/canteens/third/二楼自选.jpg", name:"三饭二楼自选", stars:null},
      {id:28, imageSrc:"/images/canteens/third/二楼自选小炒.jpg", name:"三饭二楼自选小炒",stars:null},
      {id:29,imageSrc:"/images/canteens/third/二楼莫小楠自选水饺.jpg", name:"三饭二楼莫小楠自选水饺", stars:null},
      {id:30, imageSrc:"/images/canteens/third/二楼蒸旺包子铺.jpg", name:"三饭二楼蒸旺包子铺", stars:null},
      {id:31, imageSrc:"/images/canteens/third/二楼重庆小面.jpg", name:"三饭二楼重庆小面", stars:null},
      {id:32, imageSrc:"/images/canteens/third/二楼魔饭青年.jpg", name:"三饭二楼魔饭青年", stars:null},
      {id:33, imageSrc:"/images/canteens/third/二楼鸡腿饭.jpg", name:"三饭二楼鸡腿饭", stars:null},
      {id:34, imageSrc:"/images/canteens/third/二楼麻辣烫.jpg", name:"三饭二楼麻辣烫", stars:null},
      {id:35, imageSrc:"/images/canteens/third/二楼麻辣香锅.jpg", name:"三饭二楼麻辣香锅",stars:null},
      {id:37, imageSrc:"/images/canteens/fourth/一楼港式烧腊饭.jpg", name:"四饭一楼港式烧腊饭", stars:null},
      {id:38, imageSrc:"/images/canteens/fourth/一楼滑蛋饭.jpg", name:"四饭一楼滑蛋饭", stars:null},
      {id:39, imageSrc:"/images/canteens/fourth/一楼潮汕卤水饭.jpg", name:"四饭一楼潮汕卤水饭",stars:null},
      {id:40, imageSrc:"/images/canteens/fourth/一楼瓦罐汤.jpg", name:"四饭一楼瓦罐汤", stars:null},
      {id:41, imageSrc:"/images/canteens/fourth/一楼粉面世家.jpg", name:"四饭一楼粉面世家",stars:null},
      {id:42, imageSrc:"/images/canteens/fourth/一楼自选.jpg", name:"四饭一楼自选", stars:null},
      {id:43, imageSrc:"/images/canteens/fourth/二楼烤肉.jpg", name:"四饭二楼烤肉饭", stars:null},
      {id:44, imageSrc:"/images/canteens/fourth/二楼煎肉饼.jpg", name:"四饭二楼牛牛煎肉饼", stars:null},
      {id:45, imageSrc:"/images/canteens/fourth/二楼老时间.jpg", name:"四饭二楼老时间", stars: null},
      {id:46, imageSrc:"/images/canteens/fourth/二楼莫老鸭.jpg", name:"四饭二楼莫老鸭", stars: null}
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})