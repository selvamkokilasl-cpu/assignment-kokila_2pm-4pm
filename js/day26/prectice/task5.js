function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);
  });
}
async function fetchDataAsync() {
  const result = await fetchData();
  console.log(result);
}

fetchDataAsync();
