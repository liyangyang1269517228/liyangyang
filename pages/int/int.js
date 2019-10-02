// pages/int/int.js
Page({
   call:function(){
     wx.makePhoneCall({
       phoneNumber: this.data.op,
     })
   },
   copy:function(){
     wx.showToast({
       title: '复制成功',
     })
   },
   add:function(){
    wx.addPhoneContact({
      firstName: '李阳阳',
      mobilePhoneNumber: this.data.op
    })
   },
  

  data: {
    op:"17611203863",
    op2: "169517228@qq.com",
    op3: "Web前端开发工程师"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})