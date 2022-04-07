/*
 * @Author: sunyangbo
 * @Date: 2022-04-06 20:49:32
 * @LastEditors: sunyangbo
 * @LastEditTime: 2022-04-07 16:54:54
 * @Description: file conten,
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:'',
  transpileDependencies: true,
  chainWebpack: config =>{
    config.plugin('html')
      .tap(args => {
        args[0].title = '孙杨博 面试';
        return args;
      })
  },
  // plugins: [
   
  //   new HtmlWebpackPlugin({  
  //     title: '孙杨博 面试',
  //   })
  // ]
})
