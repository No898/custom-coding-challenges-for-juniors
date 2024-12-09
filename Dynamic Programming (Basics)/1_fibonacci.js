// Task: Write a function to calculate the n-th Fibonacci number using dynamic programming.
// F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)

function fibonacci(n) {
    if (n === 0) return 0
    if (n === 1) return 1

    let result = []
    result[0] = 0
    result[1] = 1
    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2]
    }
    return result[n]
}

// Test cases
console.log(fibonacci(0));  // Expected output: 0
console.log(fibonacci(1));  // Expected output: 1
console.log(fibonacci(6));  // Expected output: 8
console.log(fibonacci(10)); // Expected output: 55
