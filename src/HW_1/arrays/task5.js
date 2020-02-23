"use strict"
function arrayTask5Loader(inputArray){
    if (isIntArray5(inputArray)){
        return arraytask5(inputArray);
    }
    return typeof inputArray;
}
function arraytask5(inputArray) {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (i % 2 == 1) {
            sum += inputArray[i];
        }
    }
    return sum;
}

function isIntArray5(intArray)
{
    let trouble = true;
    if (typeof intArray == "object" && intArray != null && intArray.length != 0){
        for(let num of intArray){
            if (typeof num != "number"){
                trouble = false;
                return trouble; // внутри массива элементы могут быть не числами, мы проверяем typeof, 
            }                   // ретерн делается чтобы не проверять лишнее
        }
        return trouble;
    }
    return false;
}