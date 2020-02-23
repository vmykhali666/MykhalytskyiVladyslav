"use strict"



function arrayTask4Loader(inputArray){
    if (isIntArray4(inputArray)){
        return arraytask4(inputArray);
    }
    return typeof inputArray;
}
function arraytask4(inputArray) {
    let max = inputArray[0];
    let count = 0;
    for (let i = 1; i < inputArray.length; i++){
        if (max < inputArray[i])
        {
            max = inputArray[i];
            count = i;
        }
    }
    return count;
}
function isIntArray4(intArray)
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