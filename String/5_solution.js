// Task: Write a function to find the first non-repeating character in a string.
// Return its index or -1 if it doesn't exist.

function firstUniqueCharacter(str) {
    const charCount = {}

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1
    }
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return i;
        }
    }
    return -1
}

// Test cases
console.log(firstUniqueCharacter("leetcode")); // Expected output: 0
console.log(firstUniqueCharacter("loveleetcode")); // Expected output: 2
console.log(firstUniqueCharacter("aabb")); // Expected output: -1
