"use strict"

function isElsetask3Loader(num1, num2, num3){
	if (isNumb(num1,num2,num3)) {
		let result = isElseTask3(num1,num2,num3);
		return result;
	}
	return undefined;
}
function isElseTask3(num1, num2, num3) {
	let sum = 0;

	if (num1 > 0)
		sum += num1;
	if (num2 > 0)
		sum	+= num2;
	if (num3 > 0)
		sum	+= num3;
	return sum;
}
function isNumb(...num){
	if (num.length != 0){
		for (let i in num) {
			if (typeof num[i] != 'number' || num[i] == NaN || num[i] == Infinity) {
				return false;
			}
		}
	}
	return true;
}