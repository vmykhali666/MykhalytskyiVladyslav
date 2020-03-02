"use strict"


let displayNum = "0";
let num1;
let num2;
let operationBefore;
let operatorIsActive = false;
let equalBtnIsActive = false;
let onlyClick = false;


const insertNum = function (id){
    
    if(equalBtnIsActive){
        equalBtnIsActive = false;
        document.getElementById("ReadOut").value = "0";
    }
    if (document.getElementById("ReadOut").value != "Error" && document.getElementById("ReadOut").value.length < 10){
        if(id.target.value != ".") {
            displayNum += id.target.value;
            displayNum = +displayNum;
            document.getElementById("ReadOut").value = +(document.getElementById("ReadOut").value + displayNum);
            displayNum = "0";
        }
        else{
            if(document.getElementById("ReadOut").value.indexOf(".") == -1){
                console.log(document.getElementById("ReadOut").value);
                document.getElementById("ReadOut").value += ".";
            }
        }    
    }
}


const getOperation = function (operation){
    let display = document.getElementById("ReadOut").value;
    if (display.indexOf(".") == display.length - 1){
        document.getElementById("ReadOut").value = display.substring(0, display.length - 1);
    }
    if (display != "Error"){
        if (num1 == undefined){
            num1 = +display;
            document.getElementById("ReadOut").value = '0';
        }
        else if (num2 == undefined && operatorIsActive){
            num2 = +display;
            calculate(operationBefore);
        }
        operatorIsActive = true;
        operationBefore = operation.target.value;   
    }
}

const equal = function (){
    let display = document.getElementById("ReadOut").value;
    if (display.indexOf(".") == display.length - 1){
        document.getElementById("ReadOut").value = display.substring(0, display.length - 1);
    }
    if (display != "Error"){
        if (num1 != undefined && operatorIsActive){
            num2 = +display;
            operatorIsActive = false;
            calculate(operationBefore);
        }
    }
}

const insertFloat = function(el){
    if (document.getElementById("ReadOut").value != "Error"){
        insertNum(el);
    }
}

const clean = function(){
    displayNum = "0";
    num1 = undefined;
    num2 = undefined;
    operationBefore = undefined;
    operatorIsActive = false;
    equalBtnIsActive = false;
    document.getElementById("ReadOut").value = "0";
}

function calculate(operation)
{
    console.log(`${num1}` + " " + `${operationBefore}` + " " + `${num2}`);
    let tempResult = 0;

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
    clean();
    if (tempResult == "Error" || tempResult == Infinity || tempResult == NaN){
        document.getElementById("ReadOut").value = "Error";
        onlyClick = true;
        return;
    }

    num1 = +(tempResult.toFixed(1));
    equalBtnIsActive = true;
    document.getElementById("ReadOut").value = num1;
}




////// arithmetic operations
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



//подписка на обработчики событий для каждой кнопки

const equalBtn = document.querySelector(".equally").addEventListener("click", equal);
const cleaner = document.querySelector(".del").addEventListener("click", clean);
const makeFloat = document.querySelector(".dot").addEventListener("click", (el) => {insertFloat(el)});
const numbers = document.querySelectorAll(".number");
const arithmeticOp = document.querySelectorAll(".arithmetic");

arithmeticOp.forEach((el) => {
    el.addEventListener('click', getOperation)
});
numbers.forEach((el) => {
    el.addEventListener('click', insertNum)
});