<!--
 * @Author: sunyangbo
 * @Date: 2022-04-07 14:09:53
 * @LastEditors: sunyangbo
 * @LastEditTime: 2022-04-07 15:17:30
 * @Description: file content
-->
<template>
    <teleport  to="body">
        <div class="mask" >
            <component  :is="chooseChild(child)" v-if="child"></component>
        </div>
    </teleport>
</template>

<script>
import ScapeComponent from '@/components/scape'
export default {
  name: 'MaskComponent',
  components: { 
    ScapeComponent
  },
  props: {
    child: Object
  },
  data(){
    return {
        chooseChild(c){
            const soild = {
                scape:ScapeComponent
            }
            return soild[c]?soild[c]:''
        }
    }
  },
  methods:{

  }
}
</script>

<style>
    .mask {
        display: flex;
        align-items: center;
        
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .5);
    }
</style>
