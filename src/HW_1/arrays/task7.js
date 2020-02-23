"use strict"

function arrayTask7Loader(inputArray){
    if (isIntArray7(inputArray)){
        return arraytask7(inputArray);
    }
    return typeof inputArray;
}
function arraytask7(inputArray) {
    let count = 0;
    for(let i = 0; i < inputArray.length; i++){
        if (inputArray[i] % 2 != 0)
            count++;
    }
    return count;
}
function isIntArray7(intArray)
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