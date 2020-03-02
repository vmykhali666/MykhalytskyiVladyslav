const Node = require('./node').Node; //    импортируем    ноду
const List = require('../../../list').List; //   импортируем    лист

function Llist (value){

    this._defaultValue    = value;
    this._length          = 0;
    this._root            = null;
    this.init();
    List.apply(this, arguments);
}

//наследуемся
Llist.prototype             = Object.create(List.prototype);
Llist.prototype.constructor = Llist;

Llist.prototype.init = function(){
    if (Array.isArray(this._defaultValue) && this._defaultValue.length != 0){
        for (let count = this._defaultValue.length - 1; count >= 0; count--){
            this.addStart(this._defaultValue[count]);
        }
    }
}

//добавляем функции
Llist.prototype.addEnd = function (value) {
    let node = new Node(value);
    let currentNode = this._root;

    if (!value && value !== 0){
        return 'Can\'t add empty element';
    }
    
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
    
    if (!value && value !== 0){
        return 'Can\'t add empty element';
    }

    node.next = this._root;
    this._root = node;
    this._length++;
    return this._length;
}
Llist.prototype.addPos = function(index = 0, value = 0){
    let node            = new Node(value);
    let currentNode     = this._root;
    let nodeBefore      = null;
    let count           = 0;

    if (this._length == 0 && (index == 1 || index == 0)){
        this.addStart(value);
        return this._length;
    }
    //если индекс вне границ листа
    if (index < 0 || index > this._length){
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
    if (index < 0 || index > this._length){
        return"index out of range exception";
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
    if (index < 0 || index > this._length){
        return "index out of range exception";
    }

    //счётчик по листу
    while(count < index){
        currentNode = currentNode.next;
        count++;
    }
    
    return currentNode._data;
}
Llist.prototype.set = function (index = 0, value = 0) {
    let currentNode     = this._root;
    let count           = 0;

    //если индекс вне границ листа
    if (index < 0 || index > this._length || this._length == 0){
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
    let swap        = (node1, node2) => {
        let tempData = node2._data;
        node2._data = node1._data;
        node1._data = tempData;
    }

    if (this._length < 2){
        return;
    }
    let nextNode    = currentNode.next;
    //если список пустой или один элемент , то вернуть undefined бо нечего сортировать
    
    while(currentNode.next){
        while(nextNode){
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
    this._root                = null;
    this.init();
    return this._defaultValue;
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
    let temp = this._defaultValue;
    this._defaultValue = array;
    this.init();
    this._defaultValue = temp;
}
Llist.prototype.halfReverse2 = function () {
    if (this._length > 1){
        let mid         = Math.floor(this._length / 2);
        let isFloat     = this._length % 2 == 0 ? false : true;
        let currentNode = this._root;
        let list1       = new Llist();
        let list2       = new Llist();
        if (isFloat){                               ///первый вариант если не парное количество элементов
            for (let count = 0; currentNode; count++, currentNode = currentNode.next){
                if (count < mid){
                    list1.addStart(currentNode._data);
                }
                else if(count == mid){
                    list1.addEnd(currentNode._data);
                }
                else{
                    list2.addStart(currentNode._data);
                }
            }
        }
        else{                                           //// второй вариант если парное
            for (let count = 0; currentNode; count++, currentNode = currentNode.next){
                if (count < mid){
                    list1.addStart(currentNode._data);
                }
                else{
                    list2.addStart(currentNode._data);
                }
            }
        }           // проходим по первому списку находим последнюю ноду и присваиваем ей главный элемент во втором списке
        currentNode = list1._root;
        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = list2._root;
        this._root = list1._root;
    }
}

module.exports.Llist = Llist;