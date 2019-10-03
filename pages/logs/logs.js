//logs.js
const util = require('../../utils/util.js')

Page({
  tiaoA:function(){
    wx.navigateTo({
      url: '../logsa/logs'
    })
  },
  tiaoB: function () {
    wx.navigateTo({
      url: '../logsb/logs'
    })
  },
  data: {
    img1: 'https://imgsa.baidu.com/forum/w%3D580%3B/sign=c3e3e0095f3d26972ed3085565c0b3fb/5ab5c9ea15ce36d3b6365ef334f33a87e850b1c7.jpg',
    img2: 'https://imgsa.baidu.com/forum/w%3D580%3B/sign=da40cdec9bcad1c8d0bbfc2f4f056609/d1160924ab18972b3e09dd09e8cd7b899f510ac6.jpg',
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
