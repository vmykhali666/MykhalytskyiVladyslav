"use strict"



function task3Loader(num){
	if (checkTask3(num)){
		let result = loopsTask3(num);
		return result;
	}
	return undefined;
}
function task3_1Loader(num){
	if (checkTask3(num)){
		let result = loopsTask3_1(num);
		return result;
	}
	return undefined;
}

function loopsTask3(num) {

    for (let a = 1.0; a < num; a += 0.1){
        if (a * a == num){
            return a;
        }
        else if(a * a > num){
            return Math.round(a - 0.1);
        }
    }
}


function loopsTask3_1(num) {

    let max = num;
    let min = 1;
    if (num < 3){
        return min;
    }
    while (max - min > 1){
        
        let mid = Math.floor((max + min) / 2);
        if (mid * mid <= num) {
            min = mid;
        }
        else{
            max = mid;
        }
    }
    return min;
}
function checkTask3(num){
	if (typeof num != 'number' || num == NaN || num == Infinity || num < 1) {
		return false;
	}
	return true;
}