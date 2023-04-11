"use strict";
let lname;
lname = "Kevo";
let newName = lname.toUpperCase();
console.log("Previous name ", lname);
console.log();
console.log("New name ", newName);
console.log();
// Number dtype
let age;
age = 25;
age = 25.5;
let dob = '25';
let result = parseInt(dob);
console.log(dob);
//  Boolean dtype
let isValid = false;
// must define boolean whether true or false there is no default
console.log(isValid);
// Arrays
// 1st way 
let empList;
// empList = ["Kev",'Kevo',"Kev",1]
empList = ["Kev", 'Kevo', "Kev"];
//2nd way with generics
let numList;
numList = [1, 2, 3, 4, 5];
///////// functions to manipulate arrays
let filterResult = numList.filter((num) => num > 2);
let emp = empList.find((emp) => emp === "Kev");
let sum = numList.reduce((acc, num) => acc + num);
console.log(filterResult);
console.log(emp);
console.log(sum);
let c = 2 /* Colour.Blue */;
console.log(c);
// tuples dtype
let swapNumber;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
// swapNumber = [10]; ERROR
// swapNumber = [10,20,30]; ERROR
swapNumber = [10, 20];
console.log(swapNumber);
let swappedNumber = swapNumbers(swapNumber[0], swapNumber[1]);
swapNumber = [swappedNumber[0], swappedNumber[1]];
console.log(swapNumber);
// Any dtype
let dept;
dept = "Kev";
console.log(dept);
dept = 1;
console.log(dept);
dept = false;
console.log(dept);
