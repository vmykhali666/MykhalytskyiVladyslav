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

module.exports.calculate = {
    minus,
    plus,
    multiply,
    divide,
}