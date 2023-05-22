//Functions for add, subtract, multiply and divide
function add(a,b) {
    return a + b;
};
function subtract(a,b) {
    return a - b;
};
function multiply(a,b) {
    return a * b;
};
function divide(a,b) {
    return a / b;
};

const firstNum = 0;
const operator = '';
const secondNum = 0;

function operate(operator, firstNum, secondNum) {
    if (operator === '+') {
        return add(firstNum, secondNum);
    } else if (operator === '-') {
        return subtract(firstNum, secondNum);
    } else if (operator === '*') {
        return multiply(firstNum, secondNum);
    } else if (operator === '/') {
        return divide(firstNum, secondNum);
    } else {
        return 'Please choose between +, -, * or /';
    }
};