//! Type Assignment Explicit and Implicit

//? 1. Explicit

let firstName: string = "Ritik";

//? 2. Implicit 

let lastname  = "ritik";

//* Error in type Assigment

//!  firstName = 33 attempts to re-assign the value to a diffrent type both type will throw error but in javascript it does not throw error

// ? Special Types : any ......... This is special types that may not refer to any specific type of data.

//! let isValid = true;  isValid = "not true" it will throw error string is not assignable

let value: any = true;
value = 'ritik'; //? No Error as it can be any type


//!  Types : 1.Static  2.Generics 3.Decorators :::::::::::::::::::::
/*  Static   :::::::::::::
        1. Built-In                      2. User-Defined
*/

// * static types mean "at compile time" or "without running a program." In a statically typed language, variables, parameters, and objects have types that the compiler knows at compile time.

//! Built In Types : 
//? 1.Number 2.Void 3String 4.Null 5.Boolean 


//!  Number
let first: number = 12.0;             // number   
let second: number = 0x37CF;          // hexadecimal  
let third: number = 0o377 ;           // octal  
let fourth: number = 0b111001;        // binary   

//! String

let empName: string = "Rohan";   
let empDept: string = "IT";   
  
// Before-ES6  
let output1: string = empName + " works in the " + empDept + " department.";   
  
// After-ES6  
let output2: string = `${empName} works in the ${empDept} department.`;   
  
console.log(output1);//Rohan works in the IT department.   
console.log(output2);//Rohan works in the IT department.  

// ? Boolean

let isDone : boolean = false;

//* Void : A void is a return type of the functions which do not return any type of value. It is used where no data type is available. A variable of type void is not useful because we can only assign undefined or null to them. An undefined data type denotes uninitialized variable, whereas null represents a variable whose value is undefined.

let unusedValue : void = undefined;// if you try to assign value it will throw error 

function greet() : void {
    alert("Welcome User:::::::::::");
}

function greetMe(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
   
  greetMe("Ritik", new Date());

// ? Null : 
