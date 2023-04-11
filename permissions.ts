// By default objects, fields and methods are public
let countOfEmployess: number = 0

class PrivateEmployee {
    #id: number; // this is private id: number
    protected name: string;
    address: string;

    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.name = name;
        this.address = address
        countOfEmployess+=1;
    } 
    // getter and settor for private id
    get empId(): number {
        return this.#id;
    }
    set empId(id: number) {
        this.#id = id;
    }

    // Methods
    getNameWithAddress(): string {
        // use tilde ==> `  for string formating and replace variable with ${this.variableName}
        return `${this.name} stays at ${this.address}`;
    }

    // Static method
    static getEmployeeCount() : number {
        return countOfEmployess;
    }
}

let kevo = new PrivateEmployee(2, "Paul", "MSA");
// console.log(kevo.id) /// inaccessible to read because id is private
console.log(kevo) //PrivateEmployee { name: 'Paul', address: 'MSA' }
console.log(kevo.getNameWithAddress())

// kevo.name  -- Protected fields are nnot visible after creating instance
// 
class Manager extends PrivateEmployee {

    constructor(id: number, name: string, address: string) {
        super(id, name, address)
    }

    // Methods // Can also not be implimented in manager but will use parent method
    getNameWithAddress(): string {
        // use tilde ==> `  for string formating and replace variable with ${this.variableName}
        return `${this.name} is a manager at ${this.address}`;
    }

}

let alex = new Manager(4,"Alex", "NAKs");

console.log(alex);
console.log(alex.getNameWithAddress())
alex.empId = 1000;
console.log(alex.empId, "Changed");

console.log(PrivateEmployee.getEmployeeCount())