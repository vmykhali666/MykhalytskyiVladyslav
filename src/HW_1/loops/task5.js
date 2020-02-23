"use strict"

function task5Loader(num){
	if (checkTask5(num)){
		let result = loopsTask5(num);
		return result;
	}
	return undefined;
}
function loopsTask5(num) {
	let result  = 0;
	if (num < 0){
		num = num *(-1);
	}
   	while(num != 0)
    {
		result += Math.floor(num % 10);
        num = Math.floor(num / 10);
    }        
    return result;
}
function checkTask5(num){
	if (typeof num != 'number' || num == NaN || num == Infinity) {
		return false;
	}
	return true;
}
