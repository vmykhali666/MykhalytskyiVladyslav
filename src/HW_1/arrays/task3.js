"use strict"
function arrayTask3Loader(inputArray){
    if (isIntArray3(inputArray)){
        return arraytask3(inputArray);
    }
    return typeof inputArray;
}
function arraytask3(inputArray) {
    let min = inputArray[0];
    let count = 0;
    for (let i = 1; i < inputArray.length; i++){
        if (min > inputArray[i]){
            min = inputArray[i];
            count = i;
        }
    }
    return count;
}
function isIntArray3(intArray)
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