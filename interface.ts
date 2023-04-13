export interface User {
    id: number;
    name: string; // name?: string --> to make name optional
    age?: number;
    email: string;
}

let user : User = {id: 1, name: "Kev", age: 12, email: ""};
let otherUser : User = {id: 1, name: "Bev", email: ""}
console.log("User from interface ", user);
console.log("user without optional field ", otherUser);

interface Employees extends User {
    salary: number;
}

let employee: Employees = {name: "John", id: 2, email: "j@mail", salary: 1000}
console.log("Employee from extended interface ", employee);

// interface with method definition
// *export* module i.e Login interface to be used outside the class
export interface Login {
    login(): User;
}

// Object restructuring
// --- Define thr object how you want
// let user : User = {id: 1, name: "Kev", age: 12, email: ""};
// this will not display user id
let {name: userName, email} : User = {id: 1, name: "Kev", email: "mail@mail"};
console.log("user interface with specified fields ", {name: userName, email})

// Array destructuring
let users: User[] = [
    {id: 1, name: "Kev", email: "mail@mail"},
    {id: 2, name: "Bev", email: "mail@mail"},
    {id: 3, name: "Tev", email: "mail@mail"}
]
console.log("Normal array \n", users);
console.log("users[0]", users[0]);

// the above array can be ref without indices
// the objects can be referenced directly without user of index
let [user1,user2,user3]: User[] = [
    {id: 1, name: "Kev", email: "mail@mail"},
    {id: 2, name: "Bev", email: "mail@mail"},
    {id: 3, name: "Tev", email: "mail@mail"}
]

console.log("Destructured array to get users without indices");
console.log(user1);
console.log(user2);
console.log(user3);

let [userA,userB,...restUsers]: User[] = [
    {id: 1, name: "Kev", email: "mail@mail"},
    {id: 2, name: "Bev", email: "mail@mail"},
    {id: 3, name: "Tev", email: "mail@mail"},
    {id: 4, name: "UserX", email: "x@X"}
]
console.log("Destructured array to get users without indices but with Rest param");
console.log(userA);
console.log(userB);
console.log(restUsers);

let result = restUsers.filter(user => user.id > 3);
console.log("Filtering")
console.log(result);

