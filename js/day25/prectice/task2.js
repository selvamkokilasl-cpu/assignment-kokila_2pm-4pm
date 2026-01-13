function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

let counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
