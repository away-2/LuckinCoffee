// index.js
// 获取应用实例
Page({
  data: {
    
     
     title:[],
     goods:[]
  },
  // 事件处理函数
  bindViewTap() {
   
  },
  onLoad() {
       
      wx.showLoading({
        title: '加载中...',
      })
      wx.request({ // api 
        
        url: 'https://www.fastmock.site/mock/cfac4a603269d09c742cef7305ca4409/luckincoffee/goods',
        success: (res) => {
          console.log(res)
          wx.hideLoading();  
          if (res.errMsg === "request:ok") {
            let data = res.data;
            // 解构
            let {goods} = data  
            this.setData({
                goods:goods
            })
          }
        },
        fail: () => {
          console.log('error')
        }
      })
    },
})
