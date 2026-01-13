function delayedNotification() {
  console.log("Please wait...");

  setTimeout(() => {
    console.log("🔔 Notification received!");
  }, 2000);
}

delayedNotification();
