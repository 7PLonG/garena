/*
 * @Author: sunyangbo
 * @Date: 2022-04-06 20:49:32
 * @LastEditors: sunyangbo
 * @LastEditTime: 2022-04-07 12:52:33
 * @Description: file conten,
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  plugins: [
   
    new HtmlWebpackPlugin({  
      title: '孙杨博 面试',
    })
  ]
})
