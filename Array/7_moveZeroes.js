// Task: Write a function that moves all zeroes in an array to the end
// while maintaining the order of the non-zero elements.

function moveZeroes(nums) {
    // Your code here
    // Note: Modify the array in-place.
}

// Test cases
let nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Expected output: [1, 3, 12, 0, 0]

let nums2 = [0, 0, 0];
moveZeroes(nums2);
console.log(nums2); // Expected output: [0, 0, 0]

let nums3 = [1, 2, 3];
moveZeroes(nums3);
console.log(nums3); // Expected output: [1, 2, 3]
