/*
 * @Author: sunyangbo
 * @Date: 2022-04-06 23:26:40
 * @LastEditors: sunyangbo
 * @LastEditTime: 2022-04-07 13:02:30
 * @Description: file content
 */
export const Ajax = async (ajaxParmas) => {
    const {url,method,fail} = ajaxParmas
    const option = {};
  // if(Object.keys(ajaxParmas).length>1){
        option.method = method?method:'get';
     //   option.body = data?JSON.stringify(data):'';
    // }
    return new Promise((resolve, reject)=> {
        fetch(url, option)
            .then(response => { resolve(response.json())})
            .catch((error) => {
                fail?fail(error):(reject(error))
            });
        })
}