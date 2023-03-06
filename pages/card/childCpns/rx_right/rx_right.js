// pages/card/childCpns/rx_right/rx_right.js
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
        show: true,
      },
    
      getUserInfo(event) {
        console.log(event.detail);
      },
    
      onClose() {
        this.setData({ show: false });
      },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
