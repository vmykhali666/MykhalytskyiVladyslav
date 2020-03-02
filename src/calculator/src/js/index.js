"use strict"


let displayNum = "0";
let num1;
let num2;
let operationBefore;
let operatorIsActive = false;

const calculate = (operation, num1, num2) =>{

    let tempResult;
  
  switch(operation){
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
  
const insertNum = function (id){
    if (readArea.value != "Error" && readArea.value.length < 10){
        if(id.target.value != ".") {
            displayNum += id.target.value;
            displayNum = +displayNum;
            readArea.value = +(readArea.value + displayNum);
            displayNum = "0";
        }
        else if(!readArea.value.include(".")){
            readArea.value += ".";
        }
    }
}


const getOperation = function (operation){
    let display = readArea.value;
    if (display.indexOf(".") == display.length - 1){
        readArea.value = display.substring(0, display.length - 1);
    }
    if (display != "Error"){
        if (num1 == undefined){
            num1 = +display;
            readArea.value = '0';
        }
        else if (num2 == undefined && operatorIsActive){
            num2 = +display;
            getResult(operationBefore);
        }
        operatorIsActive = true;
        operationBefore = operation.target.value;   
    }
}

const equal = function (){
    let display = readArea.value;
    if (display.indexOf(".") == display.length - 1){
        readArea.value = display.substring(0, display.length - 1);
    }
    if (display != "Error"){
        if (num1 != undefined && operatorIsActive){
            num2 = +display;
            operatorIsActive = false;
            getResult(operationBefore);
        }
    }
}

const insertFloat = function(el){
    if (readArea.value != "Error"){
        insertNum(el);
    }
}

const clean = function(){
    displayNum = "0";
    num1 = undefined;
    num2 = undefined;
    operationBefore = undefined;
    operatorIsActive = false;
    readArea.value = "0";
}

function getResult(operation)
{
    let tempResult = 0;

    tempResult = calculator.calculate(operation, num1,num2);
    clean();
    if (tempResult == "Error" || tempResult == Infinity || tempResult == NaN){
        readArea.value = "Error";
        return;
    }
    num1 = +(tempResult.toFixed(1));
    readArea.value = num1;
}




//подписка на обработчики событий для каждой кнопки
const readArea      = document.getElementById("ReadOut");
const equalBtn      = document.querySelector(".equally").addEventListener("click", equal);
const cleaner       = document.querySelector(".del").addEventListener("click", clean);
const makeFloat     = document.querySelector(".dot").addEventListener("click", (el) => {insertFloat(el)});
const numbers       = document.querySelectorAll(".number");
const arithmeticOp  = document.querySelectorAll(".arithmetic");

arithmeticOp.forEach((el) => {
    el.addEventListener('click', getOperation)
});
numbers.forEach((el) => {
    el.addEventListener('click', insertNum)
});