// index.js
Page({
  data: {
    currentDate: '12月21日 星期四', // 示例数据，实际应通过计算获取
    weekForecast: [
      { day: '今天', icon: '☀️', high: '-2', low: '-7' },
      { day: '周五', icon: '☁️', high: '-1', low: '-6' },
      { day: '周六', icon: '⛅', high: '0', low: '-5' },
      { day: '周日', icon: '❄️', high: '-3', low: '-8' },
      { day: '周一', icon: '❄️', high: '-4', low: '-10' },
      { day: '周二', icon: '☁️', high: '-2', low: '-7' },
      { day: '周三', icon: '☀️', high: '0', low: '-5' }
    ],
    styleOptions: [
      { name: '运动休闲风', selected: false },
      { name: '商务精英风', selected: true },
      { name: '日系潮流风', selected: false },
      { name: '韩系简约风', selected: false },
      { name: '学院风', selected: false },
      { name: '街头嘻哈风', selected: false },
      { name: '户外机能风', selected: false },
      { name: '复古文艺风', selected: false },
      { name: '极简主义风', selected: false },
      { name: '工装风', selected: false }
    ]
  },
  
  onLoad: function() {
    this.updateCurrentDate();
  },
  
  // 更新当前日期
  updateCurrentDate: function() {
    const today = new Date();
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const weekDay = weekDays[today.getDay()];
    
    this.setData({
      currentDate: `${month}月${date}日 星期${weekDay}`
    });
  },
  
  // 选择穿搭风格
  selectStyle: function(e) {
    const index = e.currentTarget.dataset.index;
    const styleOptions = this.data.styleOptions.map((item, i) => {
      return {
        ...item,
        selected: i === index
      };
    });
    
    this.setData({
      styleOptions
    });
  },
  
  // 生成今日穿搭建议
  generateOOTD: function() {
    wx.showToast({
      title: '正在生成穿搭方案',
      icon: 'loading',
      duration: 2000
    });
    
    // 实际应用中，这里可以根据天气信息和选择的风格生成穿搭建议
    // 示例中只是一个简单的延迟弹窗
    setTimeout(() => {
      wx.showModal({
        title: '今日穿搭建议',
        content: '根据当前天气状况和您选择的风格，建议您穿着保暖大衣、毛衣、长裤和皮鞋，搭配围巾增加保暖和时尚度。',
        showCancel: false
      });
    }, 2000);
  },
  
  // 导航到个人资料页面
  navigateToProfile: function() {
    wx.navigateTo({
      url: '../profile/profile'
    });
  }
}) 