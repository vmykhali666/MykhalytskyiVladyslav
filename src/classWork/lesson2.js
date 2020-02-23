//// DATA types
///////////////
let mySymbol    = Symbol();
let myUndef     = undefined;
let myNumber    = 123;
let myString    = "hi";
let myBool      = true;
let myNull      = null;
let myObj       = {};
/// typeof
/////////////
console.log(typeof mySymbol);
console.log(typeof myUndef);
console.log(typeof []);
console.log(typeof null);
console.log(typeof myObj);
/// NAN
////////////////////
myNumber = -10;
console.log(Math.sqrt(myNumber));
myNumber = new Number(300);
console.log(typeof myNumber); // Number
myNumber = myNumber.toFixed(3);
console.log(typeof myNumber);
///////// 
//////////
let count = 1;
console.log(count++); // 1 , count = 2;
console.log(count--); // 2 , count = 1;
console.log(++count); // 2, count = 2;
console.log(--count); // 1, count = 1;
//////////
/////////
count = 0;
console.log(count++ + ++count - --count); //