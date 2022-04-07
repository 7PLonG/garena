<!--
 * @Author: sunyangbo
 * @Date: 2022-04-06 20:49:32
 * @LastEditors: sunyangbo
 * @LastEditTime: 2022-04-07 14:56:07
 * @Description: file content
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <MaskComponent :child="`scape`" v-if="`portrait`=== orientation"></MaskComponent>
</template>

<script>
import { computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import MaskComponent from './components/mask'
// import ScapeComponent from './components/scape'
import { Ajax } from './utils/Ajax'
import {throttle} from './utils/throttle'
import {checkDevice} from './utils/checkDevice'
import {checkOrientation} from './utils/checkOrientation'
export default {
  name: 'App',
  components: {
    HelloWorld,
    MaskComponent,
    // ScapeComponent
  },
  data(){
    return {
      orientation:'',
      device:""
    }
  },
  provide() {
    return {
      deviceStr: computed(() => this.device),
      orientationStr: computed(() => this.orientation)
    }
  },
  beforeCreate(){
    //判断设备，判断横纵屏幕
    // 因为需求是无刷新响应，所以设备值 和横竖屏也保存在相应数值上
    

    window.addEventListener('resize',
      throttle(()=>{
            this.device = checkDevice()
            console.log(this)
      })
    )
    window.addEventListener("orientationchange" ,()=>{this.orientation=checkOrientation()})
  },
  created(){
    this.device = checkDevice();
    this.orientation = checkOrientation();
    Ajax({url:'http://localhost:3000/getCharacterList/1'}).then((d)=>{console.log(d)})
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
