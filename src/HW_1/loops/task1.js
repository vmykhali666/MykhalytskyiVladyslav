"use strict"
function task1Loader(low = 1, hi = 100){
	if (checkTask1(low, hi)){
		let result = loopsTask1(low, hi);
		return result;
	}
	return undefined;
}
function loopsTask1(low, hi) {
	let evenSum = 0
	for (let count = low; count < hi; count++)
	{
		if (count % 2 == 0)
			evenSum++;
	}
	return evenSum;
}
function checkTask1(...num){
	if (num.length != 0){
		for (let i in num) {
			if (typeof num[i] != 'number' || num[i] == NaN || num[i] == Infinity ) {
				return false;
			}
		}
	}
	return true;
}