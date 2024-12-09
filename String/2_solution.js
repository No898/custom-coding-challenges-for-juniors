// Task: Write a function to check if a given string is a palindrome.
// A palindrome reads the same backward as forward.

function isPalindrome(str) {

    let back = ""

    for (let i = str.length - 1; i >= 0; i--) {
        back += str[i]
    }
    if (str === back) {
        return true
    }
    return false
}

// Test cases
console.log(isPalindrome("racecar"));   // Expected output: true
console.log(isPalindrome("hello"));     // Expected output: false
console.log(isPalindrome("a"));         // Expected output: true
console.log(isPalindrome(""));          // Expected output: true
