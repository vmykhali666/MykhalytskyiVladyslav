"use strict"

function isElseTask1(a, b) {
	if (typeof a == 'number' && typeof b == 'number' && a + b != NaN && a + b != Infinity) {
		let result = "";
		let mainResult = 0;

		if (a % 2 == 0){
			mainResult = a * b;
			result = 'first_task (a * b) = ' + mainResult;
		}
		else{
			mainResult = a + b;
			result = "first_task (a + b) = " + mainResult;
		}
		return mainResult;
	}
	return undefined;
}