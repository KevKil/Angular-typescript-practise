"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PrivateEmployee_id;
// By default objects, fields and methods are public
let countOfEmployess = 0;
class PrivateEmployee {
    constructor(id, name, address) {
        _PrivateEmployee_id.set(this, void 0); // this is private id: number
        __classPrivateFieldSet(this, _PrivateEmployee_id, id, "f");
        this.name = name;
        this.address = address;
        countOfEmployess += 1;
    }
    // getter and settor for private id
    get empId() {
        return __classPrivateFieldGet(this, _PrivateEmployee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _PrivateEmployee_id, id, "f");
    }
    // Methods
    getNameWithAddress() {
        // use tilde ==> `  for string formating and replace variable with ${this.variableName}
        return `${this.name} stays at ${this.address}`;
    }
    // Static method
    static getEmployeeCount() {
        return countOfEmployess;
    }
}
_PrivateEmployee_id = new WeakMap();
let kevo = new PrivateEmployee(2, "Paul", "MSA");
// console.log(kevo.id) /// inaccessible to read because id is private
console.log(kevo); //PrivateEmployee { name: 'Paul', address: 'MSA' }
console.log(kevo.getNameWithAddress());
// kevo.name  -- Protected fields are nnot visible after creating instance
// 
class Manager extends PrivateEmployee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    // Methods // Can also not be implimented in manager but will use parent method
    getNameWithAddress() {
        // use tilde ==> `  for string formating and replace variable with ${this.variableName}
        return `${this.name} is a manager at ${this.address}`;
    }
}
let alex = new Manager(4, "Alex", "NAKs");
console.log(alex);
console.log(alex.getNameWithAddress());
alex.empId = 1000;
console.log(alex.empId, "Changed");
console.log(PrivateEmployee.getEmployeeCount());
