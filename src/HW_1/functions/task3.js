"use strict"

function funTask3Loader(str) {
	if (typeof str == "string") {
		return functionTask3(str); // введите название числа строкой
	}
	return undefined;
}

function functionTask3(str) {
	const number = [
				["zero"], //0 
                ["one"],  //1 
                ["two", "twelve", "twenty"],  //2 , 12 , 20
                ["three", "thirteen", "thirty"], //3 , 13, 30
                ["four", "fourteen", "fourty"],  //4
                ["five", "fifteen", "fifty"],  //5
                ["six", "sixteen", "sixty"],  //6
                ["seven", "seventeen", "seventy"], //7
                ["eight", "eighteen", "eighty"], //8
                ["nine", "nineteen", "ninety"], //9
                ["ten"], //10
                ["eleven"],  //11
                

                ["hundred","thousand", "million", "billion"] 
                

                ];
    let array = str.split(" ");
    let tempNum = 0;
    let outNum = 0;
    for (str of array)
    {
    	let checker = false;
    	for (let i = 0; i < 12; i++)
    	{
    		if(number[i].indexOf(str) != -1)
    		{
    			let index = number[i].indexOf(str);
    			if (index == 0)
    			{
    				tempNum += i;
    			}
    			else if (index == 1)
    				tempNum += i + 10;
    			else if (index == 2)
    				tempNum += i * 10;
    		}
    	}
    	if(number[12].indexOf(str) != -1)
		{
			let index = number[12].indexOf(str);
			if (index == 0)
				tempNum *= 100;
			else if (index == 1)
			{
				tempNum *= 1000;
				checker = true;
			}
			else if (index == 2 || index == 3)
				{
					if(index == 2)
						tempNum *= 1000000;
					else
						tempNum *= 1000000000;
					checker = true;
				}
		}
		if (checker)
		{
			outNum += tempNum;
			tempNum = 0;
		}
    }
    outNum += tempNum;
	console.log(outNum);
	return outNum;
}
