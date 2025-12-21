class Shape {
  constructor() {
    console.log("Shape created");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

// Example
const c1 = new Circle(5);
console.log("Area of Circle:", c1.area());
