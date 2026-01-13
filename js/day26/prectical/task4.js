async function loadData() {
  try {
    console.log("Loading data...");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();

    console.log("Data loaded:", data);
  } catch (error) {
    console.log("Error loading data");
  }
}

loadData();
