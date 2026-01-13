const name = localStorage.getItem("username");

if (name) {
  console.log("Saved Name:", name);
}
else {
    console.log("No name found in localStorage.");
}