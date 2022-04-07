/*
 * @Author: sunyangbo
 * @Date: 2022-04-07 13:41:32
 * @LastEditors: sunyangbo
 * @LastEditTime: 2022-04-07 13:53:35
 * @Description: file content
 */
export const checkOrientation = ()=>{
    if(screen&&screen.orientation){
        return screen.orientation.type.split('-')[0]
    }else {
        return window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    }
}