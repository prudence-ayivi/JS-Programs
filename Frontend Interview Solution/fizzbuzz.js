'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    
    // Loop through numbers from 1 to n
    for (let i = 1; i <= n; i++) {
      // Check if the number is divisible by both 3 and 5 (FizzBuzz)
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      // Check if the number is divisible by 3 (Fizz)
      } else if (i % 3 === 0) {
        console.log("Fizz");
      // Check if the number is divisible by 5 (Buzz)
      } else if (i % 5 === 0) {
        console.log("Buzz");
      // If not divisible by 3 or 5, print the number
      } else {
        console.log(i);
      }
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}
