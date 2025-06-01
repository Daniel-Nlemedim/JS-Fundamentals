
// Get the first argument from the command line
const arg = process.argv[2];

// Convert it to an integer
const num = parseInt(arg);

// Recursive factorial function
function factorial(n) {
  if (isNaN(n) || n < 0) return 1; // NaN or negative input
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Compute and print factorial
console.log(factorial(num));
