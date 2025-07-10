/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

// Error Type: Syntax Error
// The string is missing a closing quote and parenthesis.

console.log("Welcome to the bootcamp"); // FIXED

// This now runs correctly and prints the message.


// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

// Error Type: Runtime Error
// The string "eight" cannot be multiplied by 2, causing a NaN or unexpected result.
// To fix it, we check if the value is a number before multiplying.

let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === "number") { // 🟩 FIXED
    let doubled = numbers[i] * 2;
    console.log(doubled);
  } else {
    console.log(`Skipping invalid value: ${numbers[i]}`);
  }
}

//Code now runs without crashing and handles invalid data properly.


// Program C
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

// Error Type: Logic Error
// The function returns `true` when a number *is divisible*, which actually means it's *not* prime.
// So the return values need to be reversed to reflect proper logic.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; //FIXED: now correctly indicates NOT prime
    }
  }
  return true; //IXED: now correctly indicates IS prime
}

console.log(isPrime(7)); //Expected output: true

//Code now gives the correct result for 7 and other test cases.