// pages/menu/childCpns/rx__button/rx__button.js
import Notify from '@vant/weapp/notify/notify';
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
      activeKey: 0,
    },
      
    onChange(event) {
      Notify({ type: 'primary', message: event.detail });
    },
    /**
     * 组件的方法列表
     */
    
    methods: {

    }
})
