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

let firstNum = 0;
let operator = '';
let secondNum = 0;

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

const display = document.querySelector('.subDisplay');
const buttons = document.querySelector('.buttons');
const numbers = document.querySelector('.numbers');
let displayDefault = '0';
display.textContent = displayDefault;


let storedNum = '';

buttons.addEventListener('click', (e) => {
    //console.log(e);
    //console.log(e.target.id)
    if (e.target.id !== 'C') {
        if (storedNum.includes('.') == false) {
            storedNum += e.target.id;
            display.textContent = storedNum;
            //return console.log(secondNum)
            //console.log(storedNum)
            console.log(typeof(storedNum))
        } else if (storedNum.includes('.')) {
            if (e.target.id !== '.') {
                storedNum += e.target.id;
                display.textContent = storedNum;
                //return storedNum
                //console.log(storedNum)
                console.log(typeof(storedNum))
            }
        }
    } else if (e.target.id === 'C') {
        display.textContent = displayDefault;
        storedNum = '';
    }

    console.log(storedNum);
});






    /*
    else if (e.target.id == 'b2') {
        display.textContent = '2';
        displayValue = 2;
    } else if (e.target.id == 'b3') {
        display.textContent = '3'
        displayValue = 3;
    } 
    */
    
    

