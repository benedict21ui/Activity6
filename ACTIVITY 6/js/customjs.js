// Function to display a name
function displayName(name) {
    alert("Your name is " + name);
    document.write("Your name is " + name);
}

// Function to calculate the sum of two numbers and display it
function sumOfTwoNumbers(a, b, elementId) {
    let sum = a + b;
    document.getElementById(elementId).innerHTML = "The sum is: " + sum;
}

// Function to calculate the product of two numbers
function product(a, b, className) {
    document.getElementsByClassName(className)[0].innerHTML = "The product is: " + (a * b);
}

// Function to input two numbers and alert their sum
function inputTwoNumbers() {
    let name = prompt("Enter your name:");
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let sum = num1 + num2;
    alert("Hello " + name + ", the sum of the two numbers is: " + sum);
}

// Function to calculate grade based on total score and items
function inputGrade() {
    let name = prompt("Enter your name:");
    let totalScore = parseInt(prompt("Enter your total score:"));
    let totalItems = parseInt(prompt("Enter the total items:"));

    let computedGrade = parseFloat((-4 * (totalScore / totalItems) + 5).toFixed(2));
    let remarks = checkRemarks(computedGrade);
    return "Hello " + name + ", your grade is: " + computedGrade + " and you are " + remarks;
}

// Function to determine remarks based on grade
function checkRemarks(grade) {
    return (grade > 3.0) ? "Failed" : "Passed";
}
