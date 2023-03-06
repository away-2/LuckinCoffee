- 组件化开发
1. npm init -y
  可以安装第三方包的小程序  @vant
 2.  npm i @vant/weapp
 npm i apifmwxapi   api工厂
  开发框架
 3. 点击选项栏的工具， 构建npm
    miniprogram_npm

4. npm i apifm-wxapi  安装并构建
 apifm-wxapi   数据接口的抽象
https://api.it120.cc/tz/shop/goods/category/all

5. 点击选项栏的工具， 构建npm

自定义组件使用时再引入组件库中的组件时，控制台能接收数据，但是home 界面上无法显示商品数据
解决方法： 在home之中引入则显示数据