function calculateBMI(height, weight) {
    
    let bmi = weight / (height * height);
    return bmi.toFixed(2);
}

console.log("BMI:", calculateBMI(1.65, 60));
