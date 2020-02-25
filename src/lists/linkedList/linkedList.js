let node = require('./node'); //    импортируем    ноду
let list = require('../list'); //   импортируем    лист

function Llist (element){
    this._length        = 0;
    this.headElement    = null;
}
//наследуемся
Llist.prototype             = Object.create(list.prototype);
Llist.prototype.constructor = Llist;


Llist.prototype.addStart = function (element) {
}
Llist.prototype.constr = function () {
}
Llist.prototype.lengthOf = function (array) {
}
Llist.prototype.size = function () {
}
Llist.prototype.addEnd = function (element) {
}
Llist.prototype.delStart = function () {
}
Llist.prototype.delEnd = function () {
}
Llist.prototype.delPos = function (index) {
}
Llist.prototype.get = function (index) {
}
Llist.prototype.set = function (index, value) {
}
Llist.prototype.min = function () {
}
Llist.prototype.max = function () {
}
Llist.prototype.sort = function () {                                                                      
}
Llist.prototype.toString = function () {
}
Llist.prototype.clear = function () {
}
Llist.prototype.minIndex = function () {
}
Llist.prototype.maxIndex = function () {
}
Llist.prototype.reverse = function () {    
}
Llist.prototype.halfReverse = function () {
}
