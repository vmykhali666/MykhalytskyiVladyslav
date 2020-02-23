"use strict"
function funTask1Loader(num){
	return functionTask1(num);
}
function functionTask1(num) {
	let daysArray = [
					"Monday",
		            "Tuesday",
		            "Wednesday",
		            "Thursday",
		            "Friday",
		            "Saturday",
		            "Sunday"
		            ];
    if (typeof num != 'symbol' && num > 0 && num <= 7 && num != NaN){
		console.log(daysArray[num - 1]);
		return daysArray[num - 1];
	}
    else
    	console.log("Error: isn't valid insert of number");
}