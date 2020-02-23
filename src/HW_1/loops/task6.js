"use strict"


function task6Loader(num){
	if (checkTask6(num)){
		let result = loopsTask6(num);
		return result;
	}
	return undefined;
}
function loopsTask6(num) {
	let result = "";
   	let minus = false;
    
    if (num < 0){
        minus = true;
        num *= -1;
    }
    while(num != 0)
    {
        result += Math.round(num % 10);
        num = Math.floor(num / 10);
    }
    parseInt(result);
    if (minus){
        result *= -1;
    }
    return result;
}
function checkTask6(num){
	if (typeof num != 'number' || num == NaN || num == Infinity) {
		return false;
	}
	return true;
}
