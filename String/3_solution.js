// Task: Write a function to find the length of the longest substring
// without repeating characters.

function longestSubstringWithoutRepeating(str) {
    let start = 0;
    let maxLength = 0;
    const charSet = new Set();

    for (let end = 0; end < str.length; end++) {
        while (charSet.has(str[end])) {
            charSet.delete(str[start]);
            start++;
        }
        charSet.add(str[end]);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Test cases
console.log(longestSubstringWithoutRepeating("abcabcbb")); // Expected output: 3
console.log(longestSubstringWithoutRepeating("bbbbb"));    // Expected output: 1
console.log(longestSubstringWithoutRepeating("pwwkew"));   // Expected output: 3
console.log(longestSubstringWithoutRepeating(""));         // Expected output: 0
