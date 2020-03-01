const Node = require('./node').Node; //    импортируем    ноду
const List = require('../list').List; //   импортируем    лист

function Llist (value){

    let _defaultValue    = value;
    this._length        = 0;
    this._root    = null;
    this.init(value);
    List.apply(this, arguments);
}

//наследуемся
Llist.prototype             = Object.create(List.prototype);
Llist.prototype.constructor = Llist;

Llist.prototype.init = function(value){
    if (Array.isArray(value) && value.length != 0){
        for (let count = value.length - 1; count >= 0; count--){
            this.addStart(value[count]);
        }
    }
    else if (value != undefined && value != null){
        this.addStart(value);
    }
    return this._length;
}

//добавляем функции
Llist.prototype.addEnd = function (value) {
    let node = new Node(value);
    let currentNode = this._root;

    if (!currentNode){
        this._root = node;
        this._length++;
        
        return this._length;
    }

    while(currentNode.next) {
        currentNode = currentNode.next;
    }


    currentNode.next = node;
    this._length++;
    return this._length;
}
Llist.prototype.size = function () {
    return this._length;
}
Llist.prototype.addStart = function (value) {
    let node = new Node(value);
    let currentNode = this._root;

    node.next = currentNode;
    this._root = node;
    this._length++;
    return this._length;
}
Llist.prototype.addPos = function(index, value){
    let node            = new Node(value);
    let currentNode     = this._root;
    let nodeBefore      = null;
    let count           = 0;

    //если индекс вне границ листа
    if (index < 0 && index > this._length || this._length == 0){
        return"index out of range exception";
    }

    nodeBefore = currentNode;
    while(count < index){
        nodeBefore = currentNode;
        currentNode = currentNode.next;
        count++;
    }

    nodeBefore.next = node;
    if (currentNode){
        node.next = currentNode.next;
    }
    this._length++;
    return this._length;
}
Llist.prototype.delStart = function () {
    let currentNode = this._root;
    if (currentNode){
        this._root = this._root.next;
        this._length--;
        return currentNode._data;
    }
}
Llist.prototype.delEnd = function () {
    let currentNode = this._root;
    let nodeBefore  = null;
    
    
    if (!currentNode){
        return;
    }
    if(!currentNode.next){
        this._root = null;
        this._length--;
        return  currentNode._data;
    }


    while(currentNode.next){
        nodeBefore = currentNode;
        currentNode = currentNode.next;
    }

    nodeBefore.next = null;
    this._length--;
    return currentNode._data;
}
Llist.prototype.delPos = function (index) {
    let currentNode     = this._root;
    let nodeBefore      = null;
    let count           = 0;

    //если индекс вне границ листа
    if (index < 0 && index > this._length){
        return"index out of range exception";
    }

    if (currentNode){
        this._root = this._root.next;
        this._length--;
        return currentNode._data;
    }
    

    nodeBefore = currentNode;
    //счётчик по листу
    while(count < index){
        nodeBefore = currentNode;
        currentNode = currentNode.next;
        count++;
    }

    if (currentNode){
        nodeBefore.next = currentNode.next;
    }
    this._length--;
    return currentNode._data;
}
Llist.prototype.get = function (index) {
    let currentNode     = this._root;
    let count           = 0;

    if (this._length == 0){
        return "index out of range exception";
    }
    //если индекс вне границ листа
    if (index < 0 && index > this._length){
        return "index out of range exception";
    }

    //счётчик по листу
    while(count < index){
        currentNode = currentNode.next;
        count++;
    }
    
    return currentNode._data;
}
Llist.prototype.set = function (index, value) {
    let currentNode     = this._root;
    let count           = 0;

    if (this._length == 0){
        return "index out of range exception";
    }
    //если индекс вне границ листа
    if (index < 0 && index > this._length){
        return "index out of range exception";
    }

    //счётчик по листу
    while(count < index){
        currentNode = currentNode.next;
        count++;
    }
    currentNode._data = value;

    return currentNode._data;
}
Llist.prototype.min = function () {
    let currentNode     = this._root;
    let min;

    //если список пустой
    if (this._length == 0){
        return;
    }
    
    min = currentNode._data;
    //счётчик по листу
    while(currentNode.next){
        currentNode = currentNode.next;
        if(currentNode._data < min){
            min = currentNode._data;
        }
    }

    return min;
}
Llist.prototype.max = function () {
    let currentNode     = this._root;
    let max;

    //если список пустой
    if (this._length == 0){
        return;
    }
    
    max = currentNode._data;
    //счётчик по листу
    while(currentNode.next){
        currentNode = currentNode.next;
        if(currentNode._data > max){
            max = currentNode._data;
        }
    }

    return max;    
}
Llist.prototype.sort = function () {
    let currentNode = this._root;
    let nextNode    = currentNode.next;
    let swap        = (currentNode, nodeAfter) => {
        let tempData = nodeAfter._data;
        nodeAfter._data = currentNode._data;
        currentNode._data = tempData;
    }

    //если список пустой или один элемент , то вернуть undefined бо нечего сортировать
    if (this._length == 0 || this.length == 1){
        return;
    }

    while(currentNode.next){
        while(nextNode.next){
            if(currentNode._data > nextNode._data){
                swap(currentNode, nextNode);
            }
            nextNode = nextNode.next;
        }
        currentNode = currentNode.next;
        nextNode = currentNode.next;
    }
}
Llist.prototype.toString = function () {
    let currentNode = this._root;
    let str         = "";

    while(currentNode) {
        str += currentNode._data;
        currentNode = currentNode.next;
    }
    
    return str;
}
Llist.prototype.clear = function () {
    this._length            = 0;
    this._root       = null;

    return _defaultValue;
}
Llist.prototype.minIndex = function () {
    let currentNode     = this._root;
    let min;
    let count = 0;
    let minInd = 0;

    //если список пустой
    if (this._length == 0){
        return;
    }
    
    min = currentNode._data;
    //счётчик по листу
    while(currentNode.next){
        currentNode = currentNode.next;
        if(currentNode._data < min){
            min = currentNode._data;
            minInd = count + 1;
        }
        count++;
    }

    return minInd;
}
Llist.prototype.maxIndex = function () {
    let currentNode     = this._root;
    let max;
    let count = 0;
    let maxInd = 0;

    //если список пустой
    if (this._length == 0){
        return;
    }
    
    max = currentNode._data;
    //счётчик по листу
    while(currentNode.next){
        currentNode = currentNode.next;
        if(currentNode._data > max){
            max = currentNode._data;
            maxInd = count + 1;
        }
        count++;
    }

    return maxInd;
}
Llist.prototype.reverse = function () {    
    let currentNode = this._root; 
    this._root = null;
    this._length = 0;
    while(currentNode){
        this.addStart(currentNode._data);
        currentNode = currentNode.next;
    }
}
List.prototype.toArray = function(){
    let currentNode = this._root;
    let array = [];

    for (let count = 0; currentNode; currentNode = currentNode.next, count++){
        array[count] = currentNode._data;
    }

    return array;
}
Llist.prototype.halfReverse = function () {
    let array = this.toArray();
    let tempArray = [];
    if (array.length > 1){
        let j = Math.floor(array.length / 2) - 1;
        let isFloat = false;
        if (array.length % 2 != 0){
            isFloat = true;
        }
        for (let count = 0; count < array.length; count++,j--){
            if (count == Math.floor(array.length / 2) && isFloat){
                tempArray[count] = array[count];
                j = array.length;
                continue;
            }
            if(count == Math.floor(array.length / 2)){
                j = array.length - 1;
            }
            tempArray[count] = array[j];
        }
        array = tempArray;
    }
    this._root = null;
    this._length = 0;
    this.init(array);
}
