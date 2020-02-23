"use strict"
 // запускают функции
function arrayTask9_1Loader(inputArray){
    if (isIntArray9(inputArray)){
        return arraytask9_1(inputArray);
    }
    return typeof inputArray;
}
function arrayTask9_2Loader(inputArray){
    if (isIntArray9(inputArray)){
        return arraytask9_2(inputArray);
    }
    return typeof inputArray;
}
function arrayTask9_3Loader(inputArray){
    if (isIntArray9(inputArray)){
        return task9_3(inputArray);
    }
    return typeof inputArray;
}

function arraytask9_1(inputArray){
    let length = inputArray.length;
    for (let i = 0; i < length - 1; i++)
        for (let j = i + 1; j < length; j++)
        {
            if (inputArray[i] > inputArray[j])
            {
                var temp = inputArray[i];
                inputArray[i] = inputArray[j];
                inputArray[j] = temp;
            }
        }
    console.log(inputArray);
    return;
}
   // сортировка выбором
function arraytask9_2(inputArray){
    for (let currIndex = 0; currIndex < inputArray.length; currIndex++)
    {
        let index = Find_Min(inputArray, currIndex);                // ищем индекс элем. с мин. значением
        /*свап*/
        let temp = inputArray[currIndex];
        inputArray[currIndex] = inputArray[index];
        inputArray[index] = temp;
    }
    console.log(inputArray);
    return;
}


// Сортировка вставками
function task9_3(inputArray){
    for (var i = 1; i < inputArray.length; i++)
        for (var j = i; j > 0 && inputArray[j - 1] > inputArray[j]; j--)
        {
            var temp = inputArray[j - 1];
            inputArray[j - 1] = inputArray[j];
            inputArray[j] = temp;
        }
    console.log(inputArray);
    return;
}

///вспомогательные две функции , для проверки на массив чисел и для поиска найменьшего значения в массиве


function isIntArray9(intArray)
{
    let trouble = true;
    if (typeof intArray == "object" && intArray != null && intArray.length != 0){
        for(let num of intArray){
            if (typeof num != "number"){
                trouble = false;
                return trouble;             // внутри массива элементы могут быть не числами, мы проверяем typeof, 
            }                               // ретерн делается чтобы не проверять лишнее
        }
        return trouble;
    }
    return false;
}
function Find_Min(inputArray, currIndex){   //вводимое значение массива не проверяется потому-что
    let min = inputArray[currIndex];        //поиск минимального вызывается после этой проверки
    let count = 0;
    for (let i = currIndex; i < inputArray.length; i++)
        if (min >= inputArray[i])
        {
            min = inputArray[i];
            count = i;
        }
    return count;
}