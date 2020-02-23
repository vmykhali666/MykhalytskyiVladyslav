"use strict"

function arrayTask8Loader(inputArray){
    if (isIntArray8(inputArray)){
        return arraytask8(inputArray);
    }
    return typeof inputArray;
}
function arraytask8(inputArray) {
    let tempArray     = [];
    let i               = 0;

    for (let mid = inputArray.length / 2; mid < inputArray.length; mid++, i++)
        tempArray[i] = inputArray[mid];
    for (let j = 0; j < inputArray.length / 2; i++,j++)
        tempArray[i] = inputArray[j];
    inputArray = tempArray;
    console.log(inputArray);
    return;
}
function isIntArray8(intArray)
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