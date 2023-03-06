// pages/index/childCpns/rx__fd/rx__fd.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: { 
     
     

    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    onLoad() {
       
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
      }
  })
  
