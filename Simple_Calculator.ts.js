import inquirer from "inquirer";
// Asking question from users through Inquirer
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select one operator to perform Operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division",],
    },
]);
// conditional statements If-Else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.SecondNumber);
}
else if (answers.operator === "Subtractions") {
    console.log(answers.firstNumber - answers.SecondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.SecondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.SecondNumber);
}
else {
    console.log("Invalid Input");
}
