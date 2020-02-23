"use strict"


function task2Loader(num){
	if (checkTask2(num)){
		let result = loopsTask2(num);
		return result;
	}
	return undefined;
}
function loopsTask2(num) {
	let isSimple = true;
	
	if (num > 0 && num < 3)
		isSimple = true;
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			isSimple = false;
		}
	}
	let res = "";
	
	switch(isSimple)
	{
		case true:
			res = "is a simple number";
			break;
		case false:
			res = "is a composite number";
	}
	return res;
}
function checkTask2(num){
	if (typeof num != 'number' || num == NaN || num == Infinity || num < 1) {
		return false;
	}
	return true;
}