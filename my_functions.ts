function add(num1:number, num2:number) : number{
    return num1 + num2;
}

console.log(add(2,99));

const sub = (num1:number, num2:number) : number => num1 - num2;
console.log(sub(2,99));

const mult = function(num1:number, num2:number) : number {
    return num1 * num2;
}
console.log(mult(2,3) ,"Multiplication of 2 and 3")

// optional param
function addOptional(num1: number, num2: number, num3?:number) : number {
    // if statement with ternary operator
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log("optional params not exist 2 and 3 sum = ", addOptional(2,3))
console.log("optional params exists 2,3,5 sum = ", addOptional(2,3,5))

// required param
///////// param will exist with default value unless defined by user
const minusRequred = function(num1: number, num2: number, num3 = 10): number {
    return num1 - num2 - num3;
}
console.log("required params with 2, 3 and default minus = ", minusRequred(2,3))
console.log("required params with 2, 3 and 5 minus = ", minusRequred(2,3,5))

// restParameters
function addRestParams(num1: number, num2: number, ...num3: number[]) {
    // 0 is the initial value before running reduce function
    return num1 + num2 + num3.reduce((accumulator, currentVal) => accumulator + currentVal,0);
}
let numbersList = [1,2,3,4]
console.log("rest params with 2, 3 and [1,2,3,4] = ", addRestParams(2,3,...numbersList));
console.log("rest params with 2,3,1,2,3,4 = ",addRestParams(2,3,1,2,3,4))


// Generic functions
//// Ca be of any datatype or class obj
function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatNumbers = getItems([1,2,3,4,5]);
let concatString = getItems(['a','b','c','d'])

console.log(concatNumbers)
console.log(concatString)

