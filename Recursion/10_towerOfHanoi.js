// Task: Write a recursive function to solve the Tower of Hanoi problem.
// Move `n` disks from source rod to destination rod using an auxiliary rod.

function towerOfHanoi(n, source, destination, auxiliary) {
    // Your code here
}

// Test cases
towerOfHanoi(2, "A", "C", "B");
// Expected output:
// Move disk 1 from A to B
// Move disk 2 from A to C
// Move disk 1 from B to C

towerOfHanoi(3, "A", "C", "B");
// Expected output:
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C
