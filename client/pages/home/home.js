
//获取应用实例
const app = getApp()

Page({
  data: {
    isAuthorized: false,
    volunteerUrl: '../../images/house-volunteer.svg',
    activityUrl: '../../images/volunteer_activism.svg',
    registerUrl: '../../images/baoming.svg'
  },
  //事件处理函数
  onLoad: function () {

  }, 
  onPullDownRefresh: function () {

  },
  onShow: function () {
    let isRegistered = wx.getStorageSync('isRegistered'),
    auditStatus = wx.getStorageSync('auditStatus') || 'pending',
    isAuthorized = isRegistered && auditStatus === "approved";

    this.setData({
        isAuthorized
    })
  },
  onTapAllActivites: function(){
    wx.navigateTo({
      url: '/pages/activityList/activityList?type=ALL',
    });
  },
  onTapRegisteredActivities: function(){
    wx.navigateTo({
      url: '/pages/activityList/activityList?type=REGISTERED',
    });
  }
})
