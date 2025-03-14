// profile.js
Page({
  data: {
    userInfo: {
      nickName: '用户昵称',
      city: '北京市',
      gender: '男生',
      description: '喜欢简约、商务风格，平时经常需要参加正式场合，希望得到合适的穿搭建议。'
    }
  },
  
  onLoad: function() {
    // 页面加载时可以从本地存储或者服务器获取个人信息
  },
  
  // 编辑城市
  editCity: function() {
    wx.showModal({
      title: '修改城市',
      content: '此功能将在正式版本中实现',
      showCancel: false
    });
  },
  
  // 编辑性别
  editGender: function() {
    wx.showModal({
      title: '修改性别',
      content: '此功能将在正式版本中实现',
      showCancel: false
    });
  },
  
  // 编辑个人描述
  editDescription: function() {
    wx.showModal({
      title: '修改个人描述',
      content: '此功能将在正式版本中实现',
      showCancel: false
    });
  },
  
  // 前往历史记录页面
  goToHistory: function() {
    wx.showModal({
      title: '历史记录',
      content: '历史记录功能将在正式版本中实现',
      showCancel: false
    });
  },
  
  // 前往收藏页面
  goToFavorites: function() {
    wx.showModal({
      title: '我的收藏',
      content: '收藏功能将在正式版本中实现',
      showCancel: false
    });
  },
  
  // 前往设置页面
  goToSettings: function() {
    wx.showModal({
      title: '设置',
      content: '设置功能将在正式版本中实现',
      showCancel: false
    });
  },
  
  // 导航回OOTD首页
  navigateToIndex: function() {
    wx.navigateBack();
  }
}) 