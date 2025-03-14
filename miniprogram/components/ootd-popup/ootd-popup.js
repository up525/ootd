// components/ootd-popup/ootd-popup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    weatherInfo: {
      type: Object,
      value: {
        icon: '☀️',
        city: '北京',
        temp: '-2',
        condition: '晴朗',
        feelTemp: '-5'
      }
    },
    styleSelected: {
      type: String,
      value: '商务精英风'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentSlide: 0,
    slides: [
      { id: 0, active: true },
      { id: 1, active: false },
      { id: 2, active: false }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭弹窗
    closePopup: function() {
      this.setData({
        visible: false
      });
      this.triggerEvent('close');
    },
    
    // 阻止事件冒泡
    stopPropagation: function(e) {
      e.stopPropagation();
    },
    
    // 切换轮播图
    switchSlide: function(e) {
      const index = e.currentTarget.dataset.index;
      const slides = this.data.slides.map((slide, i) => {
        return {
          ...slide,
          active: i === index
        };
      });
      
      this.setData({
        currentSlide: index,
        slides
      });
    },
    
    // 收藏穿搭
    saveOutfit: function() {
      wx.showToast({
        title: '穿搭已收藏',
        icon: 'success',
        duration: 2000
      });
    },
    
    // 自动轮播
    startAutoSlide: function() {
      this.autoSlideInterval = setInterval(() => {
        const nextSlide = (this.data.currentSlide + 1) % this.data.slides.length;
        const slides = this.data.slides.map((slide, i) => {
          return {
            ...slide,
            active: i === nextSlide
          };
        });
        
        this.setData({
          currentSlide: nextSlide,
          slides
        });
      }, 3000);
    },
    
    stopAutoSlide: function() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
      }
    }
  },
  
  // 组件生命周期
  lifetimes: {
    attached: function() {
      this.startAutoSlide();
    },
    detached: function() {
      this.stopAutoSlide();
    }
  },
  
  // 组件所在页面的生命周期
  pageLifetimes: {
    show: function() {
      this.startAutoSlide();
    },
    hide: function() {
      this.stopAutoSlide();
    }
  }
}) 