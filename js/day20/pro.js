// 🔹 Step 1: Product data as objects
const productData = [
  { name: "Laptop", price: 60000, description: "High performance laptop" },
  { name: "Mobile Phone", price: 25000, description: "Latest smartphone" },
  { name: "JavaScript Course", price: 999, description: "Complete JS course", fileSize: "3GB" }
];

// 🔹 Step 2: Product class
class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  displayProduct(container) {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${this.name}</h3>
      <p>Price: ₹${this.price}</p>
      <p>${this.description}</p>
    `;
    container.appendChild(div);
  }
}

// 🔹 Step 3: Inheritance - DigitalProduct extends Product
class DigitalProduct extends Product {
  constructor(name, price, description, fileSize) {
    super(name, price, description);
    this.fileSize = fileSize;
  }

  displayProduct(container) {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${this.name} (Digital)</h3>
      <p>Price: ₹${this.price}</p>
      <p>${this.description}</p>
      <p>File Size: ${this.fileSize}</p>
    `;
    container.appendChild(div);
  }
}

// 🔹 Step 4: Generate products dynamically
const products = [];

productData.forEach(item => {
  if (item.fileSize) {
    products.push(
      new DigitalProduct(item.name, item.price, item.description, item.fileSize)
    );
  } else {
    products.push(
      new Product(item.name, item.price, item.description)
    );
  }
});

// 🔹 Step 5: Display products
const productList = document.getElementById("productList");

products.forEach(product => {
  product.displayProduct(productList);
  console.log(product); // Console output
});
