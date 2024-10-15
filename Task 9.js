function add(a, b) {   // Function for addition
    return a + b;
}

function subtract(a, b) {   // Function for subtraction
    return a - b;
}

function multiply(a, b) {     // Function for multiplication
    return a * b;
}

function divide(a, b) {    // Function for division
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}

function modulus(a, b) {   // Function for modulus
    return a % b;
}

let num1 = 10;    // Example:-
let num2 = 3;

console.log("Addition:", add(num1, num2));
console.log("Subtraction:", subtract(num1, num2));
console.log("Multiplication:", multiply(num1, num2));
console.log("Division:", divide(num1, num2));
console.log("Modulus:", modulus(num1, num2));
