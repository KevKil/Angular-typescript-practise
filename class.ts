// import {Login, User} from './interface';

// can also use aliases to chain classes and interfaces
import * as UserLogin from './interface'

/// Employee class without the constuctor. Will be provided with default 
/////constructor without any params i.e Employee()
// class Employee {
//     id!: number;
//     name!: string;
//     address!: string;
// }

/// Setting up class with parameterized constructor
class Employee implements UserLogin.Login{
    id: number;
    name: string;
    address: string;

    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address
    }

    // implimented method
    login(): UserLogin.User {
        throw new Error('Method not implemented.');
    }

    // Methods
    getNameWithAddress(): string {
        // use tilde ==> `  for string formating and replace variable with ${this.variableName}
        return `${this.name} stays at ${this.address}`;
    }
}

let john = new Employee(2, "Paul", "MSA");

//////// With default constructor
// let john = new Employee();
// john.id = 1;
// john.name = "John";
// john.address = "NBI";


console.log(john);
console.log(john.getNameWithAddress())