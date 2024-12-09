// Task: Write a function to return the largest number in a given array.

function findMax(nums) {
    if (nums.length === 0) return null
    return Math.max(...nums)
}

// Test cases
console.log(findMax([1, 2, 3, 4, 5])); // Expected output: 5
console.log(findMax([-1, -10, -5]));   // Expected output: -1
console.log(findMax([100, 50, 200]));  // Expected output: 200
