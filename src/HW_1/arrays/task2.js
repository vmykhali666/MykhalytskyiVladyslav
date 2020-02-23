"use strict"


function arrayTask2Loader(inputArray){
    if (isIntArray(inputArray)){
        return arraytask2(inputArray);
    }
    return typeof inputArray;
}

function arraytask2(inputArray) {
    let max = inputArray[0];
    for (let i = 1; i < inputArray.length; i++)
        if (max < inputArray[i])
            max = inputArray[i];
    return max;
}
function isIntArray(intArray)
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
