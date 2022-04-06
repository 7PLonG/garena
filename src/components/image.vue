<!--
 * @Author: sunyangbo
 * @Date: 2022-04-06 22:31:49
 * @LastEditors: sunyangbo
 * @LastEditTime: 2022-04-07 01:34:08
 * @Description: 图片可选择是否开启占位图，
-->
<template>
    <img :src="iDefaultUrl?iDefaultUrl:`https://dedautl.jpg`" :alt="`unready`" v-show="!isReady">
    <img :src="iUrl" :alt="iAlt" v-show="isReady">
</template>
<script>
export default {
    name: 'image',
    data(){
        return {
            isReady:false
        }
    },
    props:{
        iUrl: String,
        iAlt: String,
        iDefaultUrl:String,
    },
    created() {

    },
    watch:{
        iUrl(val,oval){
            //如果图片统一，可以将预加载图片提升到顶层
            const img = new img(val)
            img.addEventlinster('onload',()=>{
                this.isReady = true
            })
        }
    }
       
}      
</script>
