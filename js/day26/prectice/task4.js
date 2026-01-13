const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved successfully");
  }, 1000);
});

myPromise.then(result => {
  console.log(result);
});
