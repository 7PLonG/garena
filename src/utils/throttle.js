/*
 * @Author: sunyangbo
 * @Date: 2022-04-07 01:53:38
 * @LastEditors: sunyangbo
 * @LastEditTime: 2022-04-07 01:53:46
 * @Description: file content
 */

// 函数节流
export const throttle = (fn)=>{
	let isRun = false;
	return function (){
		if( isRun ) return;
		isRun =  true;
		window.requestAnimationFrame(
			function () {
				fn();
				isRun = false;
			})
	}
}