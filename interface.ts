export interface User {
    id: number;
    name: string; // name?: string --> to make name optional
    age?: number;
    email: string;
}

let user : User = {id: 1, name: "Kev", age: 12, email: ""};

interface Employees extends User {
    salary: number;
}

let employee: Employees = {name: "John", id: 2, email: "j@mail", salary: 1000}

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


// Array destructuring
let users: User[] = [
    {id: 1, name: "Kev", email: "mail@mail"},
    {id: 2, name: "Bev", email: "mail@mail"},
    {id: 3, name: "Tev", email: "mail@mail"}
]

// the above array can be ref without indices

