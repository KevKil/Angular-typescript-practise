"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { id: 1, name: "Kev", age: 12, email: "" };
let otherUser = { id: 1, name: "Bev", email: "" };
console.log("User from interface ", user);
console.log("user without optional field ", otherUser);
let employee = { name: "John", id: 2, email: "j@mail", salary: 1000 };
console.log("Employee from extended interface ", employee);
// Object restructuring
// --- Define thr object how you want
// let user : User = {id: 1, name: "Kev", age: 12, email: ""};
// this will not display user id
let { name: userName, email } = { id: 1, name: "Kev", email: "mail@mail" };
console.log("user interface with specified fields ", { name: userName, email });
// Array destructuring
let users = [
    { id: 1, name: "Kev", email: "mail@mail" },
    { id: 2, name: "Bev", email: "mail@mail" },
    { id: 3, name: "Tev", email: "mail@mail" }
];
console.log("Normal array \n", users);
console.log("users[0]", users[0]);
// the above array can be ref without indices
// the objects can be referenced directly without user of index
let [user1, user2, user3] = [
    { id: 1, name: "Kev", email: "mail@mail" },
    { id: 2, name: "Bev", email: "mail@mail" },
    { id: 3, name: "Tev", email: "mail@mail" }
];
console.log("Destructured array to get users without indices");
console.log(user1);
console.log(user2);
console.log(user3);
let [userA, userB, ...restUsers] = [
    { id: 1, name: "Kev", email: "mail@mail" },
    { id: 2, name: "Bev", email: "mail@mail" },
    { id: 3, name: "Tev", email: "mail@mail" },
    { id: 4, name: "UserX", email: "x@X" }
];
console.log("Destructured array to get users without indices but with Rest param");
console.log(userA);
console.log(userB);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 3);
console.log("Filtering");
console.log(result);
