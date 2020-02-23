"use strict"

function funTask2Loader(num) {
	if (typeof num == 'number' && num != Infinity && num != NaN && num > -1 && num < 1000)
	{
		console.log(numberString(num));
	}
	else
	{
		console.log("Error: isn't valid insert of number");
	}
	
}
function numberString(num) {
	let tempString;
	let tenVar = Math.floor(num / 10); 	// переменная просто чтобы не писать много раз 
										//	Math.floor(num / 10) в условии
	const number = [
				"zero", //0 
                "one",  //1 
                "two",  //2
                "three", //3
                "four",  //4
                "five",  //5
                "six",  //6
                "seven", //7
                "eight", //8
                "nine", //9
                "ten", //10
                "eleven",  //11
                "twelve", //12
                "thir", //30, 13 
                "teen", // 13 - 19 14
                ];
    const number_p = [];  // я читал, что так лучше не делать с масивами, но все же
    number_p[7] = "twen";
    number_p[1] = "eigh";
    number_p[6] = "thir"; 

    num = Math.round(num);
    if (num > 0 && num < 1000)
    {
    	if (Math.floor(num / 100) != 0)
    	{
    		tempString = number[Math.floor(num/100)] + " " + "hundred";
    		tempString += (num % 100) != 0 ?  " " + numberString(num % 100) : "";
    		return tempString;
    	}
    	else if (num < 13)
    		return number[num];
    	else if (num == 13)
    		return number[13] + number[14];
    	else if (num == 18)
    		return number_p[1] + number[14];
    	else if (num > 13 && num < 20)
    		return number[num - 10] +  number[14];
    	else if (tenVar == 2 || tenVar == 3 || tenVar == 8)
    	{
    		tempString = number_p[9 - tenVar] + "ty";
    		tempString += (num % 10) != 0 ?  " " + numberString(num % 10) : "";
    		return tempString;
    	}
    	else
    	{
    		tempString = number[Math.floor(num/10)] + "ty";
    		tempString += (num % 10) != 0 ?  " " + numberString(num % 10) : "";
    		return tempString;
    	}
    }
    else if (num == 0)
    	return number[0];
}