function addNumbers(num1: number, num2: number) {
    console.log(num1 + num2);
}
addNumbers(20, 30);

// errors
addNumbers(20);
addNumbers(20, "30");  // typescript detect error before running the code
