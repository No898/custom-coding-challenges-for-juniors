// Task: Write a function to reverse a given string.

function reverseString(str) {

    let reversed = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

// Test cases
console.log(reverseString("hello"));    // Expected output: "olleh"
console.log(reverseString("world"));    // Expected output: "dlrow"
console.log(reverseString(""));         // Expected output: ""
