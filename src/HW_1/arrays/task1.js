"use strict"


function arrayTask1Loader(inputArray){
    if (isIntArray(inputArray)){
        return arraytask1(inputArray);
    }
    return typeof inputArray;
}
function arraytask1(inputArray) {
        let min = inputArray[0];
        for (let i = 1; i < inputArray.length; i++)
            if (min > inputArray[i])
                min = inputArray[i];
        return min;
}
function isIntArray(intArray)
{
    let trouble = true;
    if (typeof intArray == "object" && intArray != null && intArray.length != 0){
        for(let num of intArray){
            if (typeof num != "number"){
                trouble = false;
                return trouble; // внутри массива элементы могут быть не числами, мы проверяем typeof, 
            }                            /// ретерн делается чтобы не проверять лишнее
        }
        return trouble;
    }
    return false;
}