<!--
 * @Author: sunyangbo
 * @Date: 2022-04-06 20:49:32
 * @LastEditors: sunyangbo
 * @LastEditTime: 2022-04-07 16:52:01
 * @Description: file content
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <GirlComponent :list="list" />
  <MaskComponent :child="`scape`" v-if="`portrait` === orientation"></MaskComponent>
</template>

<script>
import { computed } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import GirlComponent from './components/gird'
import MaskComponent from './components/mask'
// import ScapeComponent from './components/scape'
import { Ajax } from './utils/Ajax'
import { throttle } from './utils/throttle'
import { checkDevice } from './utils/checkDevice'
import { checkOrientation } from './utils/checkOrientation'
export default {
  name: 'App',
  components: {
    MaskComponent,

    GirlComponent
    // ScapeComponent
  },
  data() {
    return {
      orientation: '',
      device: "",
      list: []
    }
  },
  provide() {
    return {
      deviceStr: computed(() => this.device),
      orientationStr: computed(() => this.orientation)
    }
  },
  beforeCreate() {
    //判断设备，判断横纵屏幕
    // 因为需求是无刷新响应，所以设备值 和横竖屏也保存在相应数值上


    window.addEventListener('resize',
      throttle(() => {
        this.device = checkDevice()
        console.log(this)
      })
    )
    window.addEventListener("orientationchange", () => { this.orientation = checkOrientation() })
  },
  created() {
    this.device = checkDevice();
    this.orientation = checkOrientation();
    Ajax({ url: 'http://localhost:3000/getCharacterList/1' })
      .then((d) => { this.list = d.list })
      .catch(() => { this.list = [{
        "name": "111",
        "id": "1",
        "url": "https://www.img.com/aaa.png"
      }, {
        "name": "222",
        "id": "2",
        "url": "https://www.img.com/aa2.png"
      },
      [{
        "name": "3-1",
        "id": "3-1",
        "url": "https://www.img.com/aaa.png"
      }, {
        "name": "3-2",
        "id": "3-2",
        "url": "https://www.img.com/aa2.png"
      }, {
        "name": "3-3",
        "id": "3-3",
        "url": "https://www.img.com/aaa.png"
      }, {
        "name": "3-4",
        "id": "3-4",
        "url": "https://www.img.com/aa2.png"
      }]
    ] })
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
