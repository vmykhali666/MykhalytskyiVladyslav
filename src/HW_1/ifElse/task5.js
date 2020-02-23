"use strict"

function isElsetask5Loader(a){
	if (isNumber(a)){
		let result = isElseTask5(a);
		return result;
	}
	return undefined;
}
function isElseTask5(rating) {
	
	let result = "";

	if (rating < 20){
		result = "F";
	}	
	else if (rating < 40){
		result = "E";
	}
	else if (rating < 60){
		result = "D";
	}
	else if (rating < 75){
		result = "C";
	}
	else if (rating < 90){
		result = "B";
	}
	else{
		result = "A";
	}
	return result; 	
}
function isNumber(num){
	if (typeof num != 'number' || num == NaN || num == Infinity || num < 0 || num > 100) {
		return false;
	}
	return true;
}