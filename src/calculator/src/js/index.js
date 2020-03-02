"use strict"


let displayNum          = "0";
let num1;
let num2;
let operator;
let isNumClicked        = false;
let isEqualClicked      = false;
let isOperClicked       = false;

const calculate = () =>{

    let tempResult;
  
    switch(operator){
        case String.fromCharCode(247):
            tempResult = divide(num1, num2);
            break;
        case String.fromCharCode(215):
            tempResult = multiply(num1, num2);
            break;
        case "-":
            tempResult = minus(num1, num2);
            break;
        case "+":
            tempResult = plus(num1, num2);
            break;
    }
    clean();
    tempResult = +(tempResult.toFixed(1));
    readArea.value = "" + tempResult;
    if (tempResult == Infinity || tempResult == NaN || tempResult == "Error"){
        readArea.value = "Error";
        return;
    }
    isEqualClicked      = true;
    return tempResult;
} 
const plus = function(a,b){
    return a + b;
}
const minus = function(a, b){
    return a - b;
}
const divide = function (a, b){
    if (b != 0) {
        return a / b;
    }
    else{
        return "Error";
    }
}
const multiply = function(a, b){
    return a * b;
} 

const insertNum = (event) => {
    if (!isOperClicked && isEqualClicked){
        clean();
    }
    if (readArea.value != "Error" && readArea.value.length < 10){
        if (event.target.value != ".") {
            displayNum += event.target.value;
            readArea.value = +displayNum;
            isNumClicked = true;
        }
        else if (!displayNum.includes(".")) {
            displayNum += ".";
            readArea.value += ".";
            isNumClicked = true;
        }
    }
}

const equal = () => {
    if (readArea.value.indexOf(".") == readArea.value.length - 1){
        readArea.value = readArea.value.substring(0, readArea.value.length - 1);
    }
    if (readArea.value != "Error"){
        if (num1 != undefined && isNumClicked) {
            num2 = +displayNum;
            num1 = calculate();
            isOperClicked = false;
        }
    }
}

const clean = () => {
    displayNum          = "0";
    num1                = undefined;
    num2                = undefined;
    operator            = undefined;
    isNumClicked        = false;
    isNumClicked        = false;
    isEqualClicked      = false;
    isOperClicked       = false;
    readArea.value      = "0";
}

const getOperation = (event) => {
    if (readArea.value.indexOf(".") == readArea.value.length - 1){
        readArea.value = readArea.value.substring(0, readArea.value.length - 1);
    }
    if (readArea.value != "Error"){
        if (num1 == undefined){
            num1 = +displayNum;
        }
        else if (num2 == undefined && isNumClicked){
            num2 = +displayNum;
            num1 = calculate(event.target.value);
        }
        displayNum = "0";
        operator = event.target.value;
        isNumClicked = false;
        isOperClicked = true;
    }
}



//подписка на обработчики событий для каждой кнопки
const readArea      = document.getElementById("ReadOut");
const equalBtn      = document.querySelector(".equally").addEventListener("click", equal);
const cleaner       = document.querySelector(".del").addEventListener("click", clean);
const makeFloat     = document.querySelector(".dot").addEventListener("click", (el) => {insertNum(el)});
const numbers       = document.querySelectorAll(".number");
const arithmeticOp  = document.querySelectorAll(".arithmetic");

arithmeticOp.forEach((el) => {
    el.addEventListener('click', getOperation)
});
numbers.forEach((el) => {
    el.addEventListener('click', insertNum)
});