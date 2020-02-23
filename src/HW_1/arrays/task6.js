"use strict"



function arrayTask6Loader(inputArray){
    if (isIntArray6(inputArray)){
        return arraytask6(inputArray);
    }
    return typeof inputArray;
}
function arraytask6(inputArray) {
    
    let tempArray = [];
    let length = inputArray.length - 1;

    for (let j = 0; length >= 0; length--)
    {
        tempArray[j] = inputArray[length];
        j++;
    }
    inputArray = tempArray;
    return;
}
function isIntArray6(intArray)
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