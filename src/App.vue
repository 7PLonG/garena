<!--
 * @Author: sunyangbo
 * @Date: 2022-04-06 20:49:32
 * @LastEditors: sunyangbo
 * @LastEditTime: 2022-04-07 02:42:09
 * @Description: file content
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import { computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { Ajax } from './utils/Ajax'
import {throttle} from './utils/throttle'
import {checkDevice} from './utils/checkDevice'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      orientation:'',
      device:""
    }
  },
  provide() {
    const that = this;
    return {
      //deviceStr:this.device
      deviceStr: computed(() => that.device)
    }
  },
  beforeCreate(){
    //判断设备，判断横纵屏幕
    // 因为需求是无刷新响应，所以设备值 和横竖屏也保存在相应数值上
    this.device = checkDevice()

    window.addEventListener('resize',
      throttle(()=>{
            this.device = checkDevice()
            console.log(this)
          })
      )

  },
  created(){
    Ajax({url:'http://localhost:3000/posts/1'}).then((d)=>{console.log(d)})
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
