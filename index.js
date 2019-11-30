const add = require("./modules/add");
const subtract = require("./modules/subtract");
const multiply = require("./modules/multiply");
const divide = require("./modules/divide");
const {addOne, addTen, addFive} = require("./modules/addNumbers");
const { subtractOne, subtractFive, subtractTen } = require("./modules/subtractNumbers");

const number1 = 20;
const number2 = 11;

let answer = add(number1,number2);
console.log("Adding numbers: ",number1,number2,answer);

answer = subtract(number1,number2);
console.log("Subtract numbers: ", answer);

answer = multiply(number1,number2);
console.log("Multiply numbers: ", answer);

answer = divide(number1,number2);
console.log("Divide Numbers: ", answer);

answer = addTen(number1);
console.log("Add Ten: ", answer);

answer = addFive(number1);
console.log("Add Five: ", answer);

answer = addOne(number1);
console.log("Add One: ", answer);

answer = subtractOne(number1);
console.log("Subtract One: ", answer);

answer = subtractFive(number1);
console.log("Subtract Five: ", answer);

answer = subtractTen(number1);
console.log("Subtract Ten: ", answer);
