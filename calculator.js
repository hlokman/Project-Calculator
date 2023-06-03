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
  if (b === 0) {
    return 'ERROR' 
  } else {
    return a / b;
  }
};

let firstNum = 0;
let operator = '';
let secondNum = 0;
let total = 0;

function operate(operator, firstNum, secondNum) {
    if (operator === '+') {
        total =  Math.round((add(firstNum, secondNum)) * 1000) / 1000;
    } else if (operator === '-') {
        total = Math.round((subtract(firstNum, secondNum)) * 1000) / 1000;
    } else if (operator === '*') {
        total = Math.round((multiply(firstNum, secondNum)) * 1000) / 1000;
    } else if (operator === '/' && secondNum != 0) {
        total = Math.round((divide(firstNum, secondNum)) * 1000) / 1000; 
    } else if (operator === '/' && secondNum == 0) {
      total =  divide(firstNum, secondNum);
    };
  
  if (total.toString().length > 10) {
    return Number(total.toExponential()).toPrecision(2);
  } else {
    return total
  }
};

const display = document.querySelector('.subDisplay');
const buttons = document.querySelector('.buttons');
const numbers = document.querySelector('.numbers');
let displayDefault = '0';
display.textContent = displayDefault;


let num = '';
let storedNum = '';
let storedNum2 = '';
let result = '';
let result2 = '';

buttons.addEventListener('click', (e) => {
    if (e.target.id !== 'C' && e.target.className === 'numBtn') {
      if (num.length <= 12) {
        if (num.includes('.') == false) {
          if(storedNum === '') {
            num += e.target.id;
            display.textContent = num;
            console.log(num);
            console.log(typeof(num))
          } else if (storedNum !== '') {
            num += e.target.id;
            display.textContent = num;
            operate(operator, Number(storedNum), Number(num));
          }
        } 
      else if (num.includes('.') && e.target.className === 'numBtn') {
            if (e.target.id !== '.') {
                num += e.target.id;
                display.textContent = num;
                console.log(typeof(num))
            }
        }
      }
        
    } else if (e.target.id === 'C') {
        display.textContent = displayDefault;
        num = '';
        storedNum= '';
    };

//Make the calculator works:
  //ADD
  if (e.target.id == 'add') {
    if(storedNum === '') {
      storedNum = Number(num);
      num='';
      operator = '+';
      display.textContent = storedNum;
    } else {
      storedNum = operate(operator, Number(storedNum), Number(num));
      num = '';
      operator = '+';
      display.textContent = storedNum;
    }
  } 
  //SUB
  else if (e.target.id == 'sub') {
    if(storedNum === '') {
      storedNum = Number(num);
      num='';
      operator = '-';
      display.textContent = storedNum;
    } else {
      storedNum = operate(operator, Number(storedNum), Number(num));
      operator = '-';
      num = '';
      display.textContent = storedNum;
    }
  } 
  //MULT
  else if (e.target.id == 'mult') {
    if(storedNum === '') {
      storedNum = Number(num);
      num='';
      operator = '*';
      display.textContent = storedNum;
    } else if (num != '') {
      storedNum = operate(operator, Number(storedNum), Number(num));
      operator = '*';
      num = '';
      display.textContent = storedNum;
    }
  } 
  //DIV
  else if (e.target.id == 'div') {
    if(storedNum === '') {
      storedNum = Number(num);
      num='';
      operator = '/';
      display.textContent = storedNum;
    } else if (num != '') {
      storedNum = operate(operator, Number(storedNum), Number(num));
      operator = '/';
      num = '';
      display.textContent = storedNum;
    } 
  };
  
  /*if (storedNum == 'ERROR') {
      display.textContent = 'ERROdfggfdRZ'
      num = '';
      storedNum= '';
    }*/
  
  
  
  
  //result
    if (e.target.id == 'equal') {
      if (storedNum === '') {
        if(num == '' && storedNum == '') {
          display.textContent = '0';
          storedNum='';
        } else {
          display.textContent = num;
          storedNum='';
        }
      } else {
        let result = operate(operator, Number(storedNum), Number(num));
        if(result === 'ERROR') {
          storedNum='';
          num='';
          display.textContent = 'ERROR';
        } else {
          console.log(result)
          display.textContent = result;
          storedNum='';
          num = result.toString();
        }
      }
  }; 
  
});

buttons.addEventListener('click', (e) => {
  if (e.target.id == 'none1') {
  console.log(num);
}
})