"use strict"

function isElsetask4Loader(a, b, c){
	if (isNum(a, b, c)){
		let result = isElseTask4(a, b, c);
		return result;
	}
	return undefined;
}
function isElseTask4(a, b, c) {
	return Math.max(a * b * c, a + b + c) + 3;
}
function isNum(...num){
	if (num.length != 0){
		for (let i in num) {
			if (typeof num[i] != 'number' || num[i] == NaN || num[i] == Infinity) {
				return false;
			}
		}
	}
	return true;
}