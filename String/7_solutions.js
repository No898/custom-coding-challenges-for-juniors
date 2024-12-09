// Task: Write a function to remove all whitespace from a string.

function removeWhitespace(str) {
    return str.split(" ").join("")
}

// Test cases
console.log(removeWhitespace("hello world"));      // Expected output: "helloworld"
console.log(removeWhitespace(" a b c "));          // Expected output: "abc"
console.log(removeWhitespace(""));                 // Expected output: ""
console.log(removeWhitespace("   "));              // Expected output: ""
