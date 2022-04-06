/*
 * @Author: sunyangbo
 * @Date: 2022-04-07 02:17:22
 * @LastEditors: sunyangbo
 * @LastEditTime: 2022-04-07 02:24:52
 * @Description: file content
 */
export const checkDevice = ()=>{
    const u = navigator.userAgent;
    if(u.indexOf('iPad')>0){
        return 'pad'
    }
    if(screen.width&& screen.width>1366){
        return 'pc'
    }
    return 'mobile'
    
}