/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1 , number2) {return number1 + number2;}
function addNumbers() {

    let addnumber1 = Number(document.querySelector('#add1').value);
    let addnumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addnumber1 , addnumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function Subtract(number1, number2) {return number1 - number2;}
function SubtractNumbers() {

    let SubtractNumber1 = Number(document.querySelector('#subtract1').value);
    let SubtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = Subtract(SubtractNumber1, SubtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', SubtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {

    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1/number2;
const divideNumbers = () => {

    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const getTotal = function() {

    let subtotal = Number(document.getElementById('subtotal').value);
    let member = document.getElementById('member').checked; // ... so this whole time i needed a .funtion
                                            
    if (member == true) {document.getElementById('total').innerHTML = multiply(subtotal, .80)}
    else if (member == false) {document.getElementById('total').innerHTML = subtotal}
    
}

document.querySelector('#getTotal').addEventListener('click', getTotal)


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const array = [ 1,2,3,4,5,6,7,8,9,10,11,12,13 ]
document.getElementById('array').innerHTML = array;

/* Output Odds Only Array */

document.getElementById('odds').innerHTML = array.filter((i) => i % 2); // i am using i for inicial or starting index vlaue

/* Output Evens Only Array */

document.getElementById('evens').innerHTML = array.filter((i) => i % 2 === 0);

/* Output Sum of Org. Array */

document.getElementById('sumOfArray').innerHTML = array.reduce((i, nextValue) => i + nextValue); 

/* Output Multiplied by 2 Array */

document.getElementById('multiplied').innerHTML = array.map((i) => i * 2);

/* Output Sum of Multiplied by 2 Array */

document.getElementById('sumOfMultiplied').innerHTML = (array.map((i) => i * 2)).reduce((i, nextValue) => i + nextValue);