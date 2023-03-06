// 模块化   所有请求的封装
import {baseURL, timeout} from './config.js'
function request(options){
    wx.showLoading({
      title: '数据加载中...',
    })
    return new Promise((resolve,reject) =>{
        // 请求完成后把数据返回  thenable
       wx.request({
           url:baseURL + options.url,
           timeout,
           data:options.data || {},
           success: function(res){
               resolve(res.data)
           },
           fail:function(err){
               reject(err)
           },
           complete:function(){
               wx.hideLoading()
           }
       })
    })
}
// 向外导出 函数 request
// 注意export default在一个文件中只能存在一个  外部导入时 使用import 不需要{} 
export default request