"use strict"


function Alist(element) {
    this.defaultArray = element;
    this.arr = [];
    this.constr();
}
//наследуемся
const list = require('../list');
Alist.prototype = Object.create(list.prototype);
Alist.prototype.constructor = Alist;


Alist.prototype.constr = function () {
    for (let count = 0; count < this.lengthOf(this.defaultArray); count++){
        this.arr[count] = this.defaultArray[count];
    }
    return this.arr;
}
Alist.prototype.lengthOf = function (array) {
    let count = 0;
    
    while(array[count]){
        count++;
    }
    return count;
}
Alist.prototype.size = function () {
    let count = 0;

    while(this.arr[count] != undefined){
        count++;
    }
    return count;
}
Alist.prototype.addStart = function (element) {
    let tempArray = [];
    if (element){
        tempArray[0] = element;
        for (let count = 0; count < this.size(); count++){
            tempArray[count + 1] = this.arr[count];
        }
        this.arr = tempArray;
    }
    return this.size();
}
Alist.prototype.addEnd = function (element) {
    let tempArray = [];
    if (element != undefined){
        tempArray[this.size()] = element;
        for (let count = 0; count < this.size(); count++){
            tempArray[count] = this.arr[count];
        }
        this.arr = tempArray;
    }
    return this.size();
}
Alist.prototype.delStart = function () {
    let tempArray = [];
    let start;
    if (this.size() > 1){
        start = this.arr[0];
        for (let count = 1; count < this.size(); count++) {
            tempArray[count - 1] = this.arr[count];
        }
    }
    this.arr = tempArray;
    return start;
}
Alist.prototype.delEnd = function () {
    let tempArray = [];
    let end;
    if (this.size() > 1){
        end = this.arr[this.size() - 1]
        for(let count = 0; count < this.size() - 1; count++){
            tempArray[count] = this.arr[count];
        }
    }
    this.arr = tempArray;
    return end;
}
Alist.prototype.delPos = function (index) {
    let tempArray = [];

    if (index >= 0 && index <= this.size() - 1){
        let outItem = this.arr[index];
        for (let count = 0, i = 0; count < this.size(); count++){
            if (count == index){
                continue;
            }
            tempArray[i] = this.arr[count];
            i++;
        }
        this.arr = tempArray;
        return outItem;
    }
    else{
        return "Index range exception ! ! !";
    }
}
Alist.prototype.get = function (index) {
    if (index >= 0 && index <= this.size() - 1){
        return this.arr[index];
    }
    else{
        return "Index range exception ! ! !";
    }
}
Alist.prototype.set = function (index, value) {
    if (index >= 0 && index <= this.size() - 1){
        this.arr[index] = value;
        return this.arr;
    }
    else{
        return "Index range exception ! ! !";
    }
}
Alist.prototype.min = function () {
    let min;
    if (this.size != 0){
        min = this.arr[0];
        for (let count = 1; count < this.size(); count++){
            if (min > this.arr[count]){
                min = this.arr[count];
            }
        }
    }
    return min;
}
Alist.prototype.max = function () {
    let max;
    if (this.size != 0){
        max = this.arr[0];
        for (let count = 1; count < this.size(); count++){
            if (max < this.arr[count]){
                max = this.arr[count];
            }
        }
    }
    return max;
}
Alist.prototype.sort = function () {                                                                      
    if (this.size() != 0){
        quickSort(this.arr, 0, this.size() - 1);
        return this.arr;
    }
    else{
        return [];
    }
    function Swap(inputArray, minIndex, maxIndex){
        let temp = inputArray[minIndex];
        inputArray[minIndex] = inputArray[maxIndex];
        inputArray[maxIndex] = temp;
    }
    function Partition(inputArray, left, right) {
        
        let    i       = Math.ceil(left);
        let    j       = Math.floor(right);
        let pivot      = inputArray[Math.floor(Math.random() * (right - left)) + left];
    
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
                quickSort(inputArray, index, maxIndex);
            }
        }
        return inputArray;
    }
}
Alist.prototype.toString = function () {
    let str = "";
    for(let count = 0; count < this.size(); count++){
        str += this.arr[count];
    }
    return str;
}
Alist.prototype.clear = function () {
    return this.defaultArray;
}
Alist.prototype.minIndex = function () {
    let min;
    let outIndex;
    if (this.size() > 0){
        outIndex = 0;
        min = this.arr[0];
        for (let count = 1; count < this.size(); count++){
            if (min > this.arr[count]){
                min = this.arr[count];
                outIndex = count;
            }
        }
    }
    return outIndex;
}
Alist.prototype.maxIndex = function () {
    let max;
    let outIndex;
    if (this.size() > 0){
        outIndex = 0;
        max = this.arr[0];
        for (let count = 1; count < this.size(); count++){
            if (max < this.arr[count]){
                max = this.arr[count];
                outIndex = count;
            }
        }
    }
    return outIndex;
}
Alist.prototype.reverse = function () {
    let tempArray = [];
    if (this.size() != 0){
        for(let count = this.size() - 1, j = 0; count >= 0; count--, j++){
            tempArray[j] = this.arr[count];
        }
        this.arr = tempArray;
    }   
    return this.arr;
}
Alist.prototype.halfReverse = function () {
    let tempArray = [];
    if (this.size() > 1){
        let j = Math.floor(this.size() / 2) - 1;
        let isFloat = false;
        if (this.size() % 2 != 0){
            isFloat = true;
        }
        for (let count = 0; count < this.size(); count++,j--){
            if (count == Math.floor(this.size() / 2) && isFloat){
                tempArray[count] = this.arr[count];
                j = this.size();
                continue;
            }
            if(count == Math.floor(this.size() / 2)){
                j = this.size() - 1;
            }
            tempArray[count] = this.arr[j];
        }
        this.arr = tempArray;
    }
    return this.arr;
}