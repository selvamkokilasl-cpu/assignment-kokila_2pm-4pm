function calculate() {

    // Store user inputs
    let name = document.getElementById("name").value;
    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);

    // Form validation
    if (name === "" || m1 === 0 || m2 === 0 || m3 === 0) {
        document.getElementById("result").innerText =
            "Please fill all fields correctly";
        return;
    }

    // Calculations
    let total = m1 + m2 + m3;
    let average = total / 3;

    // Decision-based logic
    let grade;
    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Output
    document.getElementById("result").innerText =
        "Hello " + name +
        "\nTotal: " + total +
        "\nAverage: " + average.toFixed(2) +
        "\nGrade: " + grade;
}
