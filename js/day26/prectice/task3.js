function delayedMessage(callback) {
  setTimeout(() => {
    callback("Hello after 2 seconds");
  }, 2000);
}

delayedMessage(function (msg) {
  console.log(msg);
});
