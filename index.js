#!  /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
let result;
if (answer.operator === "Addition") {
    result = answer.firstNumber + answer.secondNumber;
}
else if (answer.operator === "Subtraction") {
    result = answer.firstNumber - answer.secondNumber;
}
else if (answer.operator === "Multiplication") {
    result = answer.firstNumber * answer.secondNumber;
}
else if (answer.operator === "Division") {
    result = answer.firstNumber / answer.secondNumber;
}
else {
    console.log("Invalid operator");
}
console.log(`The result is ${result}`);
