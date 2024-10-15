function generateFibonacci(n) {          // Function to generate Fibonacci series
    let fibonacci = [0, 1];            // Initial two numbers of the Fibonacci series
 for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

function displayFibonacciReverse(n) {      // Function to display Fibonacci series in reverse order
    let fibonacci = generateFibonacci(n);
    console.log(fibonacci.reverse().join(', '));
}

let n = 10;                   //// Example:- Generate 10 Fibonacci numbers
displayFibonacciReverse(n);
