<!--
 * @Author: sunyangbo
 * @Date: 2022-04-06 20:49:32
 * @LastEditors: sunyangbo
 * @LastEditTime: 2022-04-07 16:40:20
 * @Description: file content
-->
<template>
    <div class="list">
        <div class="tit">character</div>
        <ul class="content">
            <li class="item" v-for="(item) in list" :key="item.id">
                <template v-if="!Array.isArray(item)">
                    <ImageComponent :iUrl="item.url"></ImageComponent>
                    <span v-if="item.name">{{ item.name }}</span>
                </template>
                <div class="subitem" v-if="Array.isArray(item)">
                    <template v-for="subitem in item" :key="subitem.id">
                        <ImageComponent :iUrl="subitem.url"></ImageComponent>
                        <!-- <span v-if="subitem.name">{{subitem.name}}</span> -->
                    </template>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

import ImageComponent from '@/components/image'
export default {
    name: 'GirlComponent',
    components: {
        ImageComponent
    },
    props: {
        list: Array
    },
    inject: ['deviceStr', 'orientationStr'],
}
</script>

<style lang="scss">
.item {
}
.content {
    display: flex;
    flex-wrap: wrap;
}
.subitem {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > img {
        width: 48%;
    }
    > img:nth-child(1) {
        margin-bottom: 5%;
    }
    > img:nth-child(2) {
        margin-bottom: 5%;
    }
}
//pc
@media screen and (min-width: 1366px) {
    $width: 90vw;
    $itemM: 2.5vw;
    $colNum: 3;
    //$itemW:($width-$colNum*$itemM*2)/$colNum;
    $itemW: 25vw;
    .content {
        margin: 0 auto;
        width: $width;
    }
    .item {
        width: $itemW;
        height: $itemW;
        margin: $itemM;
    }
}
//pad
@media screen and (min-width: 1024px) and (max-width: 1366px) {
    $width: 100vw;
    $itemM: 2.5vw;
    $colNum: 2;
    //$itemW:($width-$colNum*$itemM*2)/$colNum;
    $itemW: 45vw;
    .content {
        margin: 0 auto;
        width: $width;
    }
    .item {
        width: $itemW;
        height: $itemW;
        margin: $itemM;
    }

}
@media screen and (max-width: 1024px) {
    $width: 90vw;
    $itemM: 2.5vw;
    $colNum: 1;
    //$itemW:($width-$colNum*$itemM*2)/$colNum;
    $itemW: 80vw;
    .content {
        margin: 0 auto;
        width: $width;
    }
    .item {
        width: $itemW;
        height: $itemW;
        margin: $itemM;
    }
}
</style>
