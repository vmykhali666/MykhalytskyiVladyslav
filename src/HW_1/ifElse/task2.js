"use strict"

function isElsetask2Loader(x, y) // для проверки на валидность ввода, если не валидный возвращает undefined
{
	if (typeof x === 'number' && typeof y === 'number' && x + y != NaN && x + y != Infinity) {
		let result = isElseTask2(x , y);
		return result;
	}
	return undefined;
}
function isElseTask2(x , y){
	let result = "";
	if (x > 0 && y > 0){
		result = "part 1";
	}
	else if (x < 0 && y > 0){
		result = "part 2";
	}
	else if (x < 0 && y < 0){
		result = "part 3";
	}	
	else if (x > 0 && y < 0){
		result = "part 4";
	}
	return result;
}