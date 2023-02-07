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
