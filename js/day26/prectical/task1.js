function createCounter() {
  let count = 0; // private variable

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const counter = createCounter();
counter(); // Count: 1
counter(); // Count: 2
