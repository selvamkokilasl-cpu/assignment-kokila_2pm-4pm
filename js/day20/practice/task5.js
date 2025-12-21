 class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log("Name:", this.name);
    console.log("Salary:", this.salary);
  }
}

 class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); // call parent constructor
    this.department = department;
  }

  displayManagerInfo() {
    this.displayInfo();
    console.log("Department:", this.department);
  }
}
const mgr = new Manager("viji", 50000, "IT");
mgr.displayManagerInfo();
