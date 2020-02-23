"use strict"


function arrayTask10Loader(inputArray){
    if (isIntArray10(inputArray)) {                                            //выдает ошибку 
        console.log(quickSort(inputArray, 0, inputArray.length - 1));           //Uncaught RangeError: Maximum call stack size exceeded 
        return;                                                                 //иногда
    }
    return typeof inputArray;                                                              
}                                                                           
function Swap(inputArray, minIndex, maxIndex){
    let temp = inputArray[minIndex];
    inputArray[minIndex] = inputArray[maxIndex];
    inputArray[maxIndex] = temp;
}
function Partition(inputArray, minIndex, maxIndex) {
    let pivot   = inputArray[Math.round((maxIndex + minIndex) / 2)],
        i       = minIndex,
        j       = maxIndex;

    while (i <= j) {
        while (inputArray[i] < pivot) {
            i++;
        }
        while (inputArray[j] > pivot) {
            j--;
        }
        if (i <= j) {
            Swap(inputArray, i, j);
            i++;
            j--;
        }
    }
    return i;
}
function quickSort(inputArray, minIndex, maxIndex) {
    let index;
    if (inputArray.length > 1) {
        index = Partition(inputArray, minIndex, maxIndex);

        if (minIndex < index - 1) {
            quickSort(inputArray, minIndex, index - 1);
        }
        if (index < maxIndex) {
            quickSort(inputArray, index + 1, maxIndex);
        }
    }
    return inputArray;
}

function isIntArray10(intArray)
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