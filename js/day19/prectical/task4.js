let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
    console.log(num * 2);
});
let squares = numbers.map(function (num) {
    return num * num;
});

console.log(squares);
function processArray(arr, callback) {
    arr.forEach(callback);
}

processArray(numbers, function (n) {
    console.log("Value:", n);
});

