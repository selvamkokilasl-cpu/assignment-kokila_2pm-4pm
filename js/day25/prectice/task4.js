let myPromise = new Promise(function(resolve, reject) {
  resolve("Promise resolved successfully");
});

myPromise.then(function(result) {
  console.log(result);
});
// using arrow functions