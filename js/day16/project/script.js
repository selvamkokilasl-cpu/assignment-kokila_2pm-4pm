// Debugging using console.log
console.log("JavaScript connected successfully!");

// Variable
let count = 0;

// Function + Event
document.getElementById("btn").addEventListener("click", function () {
    count++;
    console.log("Button clicked " + count + " times");
});
