// Ek file app.js create karo aur usmein "Hello World" print karo.
console.log("Hello, World");
// console.log() ka use karke apna naam print karo.
console.log("Name :", "Hassan Muhayyudin");
// 2 alag lines mein apni age print karo.
console.log("Age :", "20");
// Ek variable bana kar usmein apna city store karo aur print karo.
let city = "Jhang";

// 2. JavaScript Basics

// JavaScript ka use kis liye hota hai? (short answer likho)
// Ans: javascript ka use website mein Interactivity lany ky liye istemal hoti hy

// Kya JavaScript browser mein run hoti hai? (Yes/No)
// Ans: Yes Javascript brower mein run hoti hy

// High-level language ka matlab simple words mein likho.
// Ans: High-level language wo hoti hy jo insaanon ky samajhny ky laayak programming language

// Compiler aur interpreter mein se JavaScript kis pe kaam karti hai?
// Ans: Javascript interpreter use karti hy

// Kya JavaScript frontend ke liye use hoti hai? (Yes/No)
// Ans: Yes, Javascript Frontend mein use hoti hy

// 3. Variables (let, const, var)

// let se ek variable banao aur usmein number store karo.
let num = 45;

// const se apna naam store karo.
const name = "Hassan Muhayyudin";

// var se ek variable banao aur usmein age store karo.
var age = 20;

// Ek variable bana kar uski value print karo.
const vari = "Ali";
console.log(vari);

// let se variable bana kar uski value change karo (update karo).

// 4. Primitive Data Types

// Ek string variable banao (apna naam).
let nameD = "Hassan Muhayyudin";
// Ek number variable banao (age ya marks).
let ageD = 20;
// Ek boolean variable banao (true ya false).
let isAdmin = true;
// Ek variable ko null assign karo.
let variD = null;
// Ek variable banao aur usay koi value assign na karo (undefined).
// let unde =

// 5. typeof Operator

// Ek string variable banao aur uska typeof check karo.
let strName = "hassan";
console.log(typeof str);
// Ek number variable ka typeof check karo.
let numb = 15;
console.log(typeof numb);
// Boolean ka typeof print karo.
let tyb = true;
console.log(typeof tyb);
// Ek undefined variable ka typeof check karo.
// let undef =
// Ek array ka typeof check karo (observe output).
let furits = ["apple", "banana", "tagak"];
console.log(typeof furits);

// 6. Arithmetic Operators

// 2 numbers add karo aur result print karo.
const number1 = 25;
const number2 = 35;
const sum = number1 + number2;
console.log("sum:", sum);
// 2 numbers subtract karo.
const subNum1 = 45;
const subNum2 = 20;
const subtract = subNum1 - subNum2;
console.log("Subtract: ", subtract);
// 2 numbers multiply karo.
const mulNum1 = 45;
const mulNum2 = 20;
const multi = mulNum1 * mulNum2;
console.log("Multiply: ", multi);
// 2 numbers divide karo.
const dNum1 = 45;
const dNum2 = 20;
const divide = dNum1 / dNum2;
console.log("Divide: ", divide);
// % operator use karke remainder find karo.
const remNum1 = 45;
const remNum2 = 20;
const reminder = remNum1 % remNum2;
console.log("Reminder: ", reminder);

// 7. Comparison Operators

// Check karo 5 == 5 (result print karo).
let compOp1 = 5;
let compOp2 = 5;
let Comparison = compOp1 == compOp2;
console.log(Comparison);
// Check karo 5 === "5"
let comOp1 = 5;
let comOp2 = "5";
let Comparison1 = comOp1 === comOp2;
console.log(Comparison1);
// Check karo 10 > 5
let greater = 10 > 5;
console.log(greater);
// Check karo 3 < 1
let less = 3 < 1;
console.log(less);

// 8. Increment / Decrement

// Ek variable x = 5 banao aur x++ use karo.
let x = 5;
console.log(x);
x++;
// Ek variable y = 5 banao aur ++y use karo.
let y = 5;
++y;
// Ek variable ko -- se decrease karo.
let z = 10;
--z;
console.log(z);
// Pre-increment ka result print karo.
console.log(y);
// Post-increment ka result print karo (difference observe karo).
console.log(x);
