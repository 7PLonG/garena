<!--
 * @Author: sunyangbo
 * @Date: 2022-04-06 22:31:49
 * @LastEditors: sunyangbo
 * @LastEditTime: 2022-04-07 16:29:49
 * @Description: 图片可选择是否开启占位图，
-->
<template>
    <img :src="iDefaultUrl?iDefaultUrl:require('../assets/img-1.jpg')" :alt="iAlt?iAlt:''" v-if="!isReady">
    <img :src="iUrl" :alt="iAlt" v-if="isReady">
</template>
<script>
export default {
    name: 'ImageComponent',
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
        iUrl(val){
            //如果图片统一，可以将预加载图片提升到顶层
            const img = new img(val)
            img.addEventlinster('load',()=>{
                this.isReady = true
            })
            img.addEventlinster('error',()=>{
                console.log('111')
                this.isReady = false
            })
        }
    }
       
}     
 
</script>
<style>
    img {width: 100%;}
</style>
