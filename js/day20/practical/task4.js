class Student {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  display() {
    console.log("Name:", this.name, "Roll No:", this.rollNo);
  }
}

// Creating 3 students
const s1 = new Student("viji", 101);
const s2 = new Student("divya", 102);
const s3 = new Student("Kokila", 103);

s1.display();
s2.display();
s3.display();
