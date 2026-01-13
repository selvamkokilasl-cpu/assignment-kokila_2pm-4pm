function getData() {
  return new Promise((resolve) => {
    resolve("Data received");
  });
}

getData().then(data => console.log(data));
// Using arrow functions
async function fetchData() {
  let data = await getData();
  console.log(data);
}

fetchData();
// Using async/await
