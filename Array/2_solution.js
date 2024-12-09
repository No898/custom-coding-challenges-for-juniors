// Task: Write a function to check if an array contains duplicates.
// Return `true` if duplicates are found, otherwise `false`.

/* function hasDuplicates(nums) {
    let seen = {}

    for (let num of nums) {
        if (seen[num]) return true
        seen[num] = true
    }
    return false
} */

function hasDuplicates(nums) {
    const uniqueNums = new Set(nums)
    return uniqueNums.size !== nums.length
}

// Test cases
console.log(hasDuplicates([1, 2, 3, 4]));       // Expected output: false
console.log(hasDuplicates([1, 2, 3, 1]));       // Expected output: true
console.log(hasDuplicates([]));                 // Expected output: false
console.log(hasDuplicates([0, 0]));             // Expected output: true
