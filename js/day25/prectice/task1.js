let a = 10;   // Global scope

function test() {
  let b = 20; // Local (Function) scope
  console.log(a); // accessible
  console.log(b); // accessible
}

test();
console.log(a); // accessible
// console.log(b);
