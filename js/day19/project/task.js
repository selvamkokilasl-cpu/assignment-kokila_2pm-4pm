function hi(a, b) {
    return a + b;
}

console.log(hi(100, 200));
const calculateTotal = (a, b) => a + b;
(function () {
    let appName = "Student App";
    console.log(appName);
})();
document.getElementById("btn").onclick = function () {
    console.log("Button Clicked");
};
document.getElementById("btn")
    .addEventListener("click", () => {
        console.log("Event Callback Triggered");
    });
function showMessage(msg) {
    console.log(msg);
}

showMessage("Login Success");
showMessage("Form Submitted");
document.getElementById("title").innerText = "Welcome User";

setTimeout(() => {
    console.log("Async Callback");
}, 1000);
let marks = [45, 78, 90, 33];

let passed = marks.filter(m => m >= 40);
let doubled = marks.map(m => m * 2);
let total = marks.reduce((sum, m) => sum + m, 0);

console.log(passed, doubled, total);
