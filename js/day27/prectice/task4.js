const user = {
  name: "Kokila",
  age: 22,
  role: "Student"
};

// Object → JSON
const jsonData = JSON.stringify(user);
console.log(jsonData);

// JSON → Object
const parsedData = JSON.parse(jsonData);
console.log(parsedData.name);
