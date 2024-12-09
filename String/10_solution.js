// Task: Write a function to replace all occurrences of a given character in a string
// with another character.

function replaceCharacter(str, target, replacement) {
    let result = ""

    for (let char of str) {
        if (char === target) {
            result += replacement
        } else {
            result += char
        }

    }

    return result
}

// Test cases
console.log(replaceCharacter("hello", "l", "x"));  // Expected output: "hexxo"
console.log(replaceCharacter("banana", "a", "o")); // Expected output: "bonono"
console.log(replaceCharacter("", "a", "b"));       // Expected output: ""
console.log(replaceCharacter("aaa", "a", "b"));    // Expected output: "bbb"
