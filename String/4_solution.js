// Task: Write a function to check if two strings are anagrams of each other.
// An anagram is a rearrangement of letters to form another word.

function isAnagram(str1, str2) {

    if (str1.length === str2.length) {
        const sorted1 = str1.split("").sort().join("")
        const sorted2 = str2.split("").sort().join("")
        return sorted1 === sorted2
    }

    return false
}

// Test cases
console.log(isAnagram("listen", "silent")); // Expected output: true
console.log(isAnagram("hello", "world"));   // Expected output: false
console.log(isAnagram("aabb", "bbaa"));     // Expected output: true
console.log(isAnagram("rat", "car"));       // Expected output: false
