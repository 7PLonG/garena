<!--
 * @Author: sunyangbo
 * @Date: 2022-04-07 14:28:53
 * @LastEditors: sunyangbo
 * @LastEditTime: 2022-04-07 15:32:52
 * @Description: file content
-->
<template>
    <div class="box">
        <img ref="img"  class="scape" src="@/assets/scape.png" alt="">
        <p>提示用户去使用纵向的访问。</p>
    </div>

</template>

<script>

export default {
  name: 'ScapeComponent',
  components: {
    
  },
  props: {

  },
  data(){
    return {

    }
  },
  mounted(){
    //   const img = this.$refs.img;
    //   const calcH = img.width*img.naturalHeight/img.naturalWidth;
    //   img.height = img.width*img.naturalHeight/img.naturalWidth
    //   console.log(this.$refs.img)
    //   console.log(calcH)

  }
}
</script>

<style scoped lang="scss">
    @keyframes scapeanimate {
        0% {transform:rotate(0deg) }
        50% {transform:rotate(90deg)}
        100% {transform:rotate(0deg)}
    }
    .scape {
        width:80vw;
        height: auto;
        animation:scapeanimate 1s infinite linear;
    }
    .box {
        display: flex;
        flex-direction: column;
        p {
            text-align: center;
            color: red;
        }
    }
</style>
