"use strict"

function task4Loader(num){
	if (checkTask4(num)){
		let result = loopsTask4(num);
		return result;
	}
	return undefined;
}
function loopsTask4(num) {

    let res = 1;
    for (let i = 1; i <= num; i++)
        res *= i;
    return res;
}
function checkTask4(num){
	if (typeof num != 'number' || num == NaN || num == Infinity || num < 0) {
		return false;
	}
	return true;
}