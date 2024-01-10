function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
addNumbers(20, 30);
// errors
addNumbers(20);
addNumbers(20, "30"); // typescript detect error before running the code
