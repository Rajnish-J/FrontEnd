'use strict'

// ! The 'this' keyword in JS
// ? "This" keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, 
// ? "this" references the global "this" references the object, idf the function that is being referneced is a method in an object, "this" references the the object itself

// ? The JavaScript "this" keyword is one of the most widely used keywords. It can seem complex at first, but once you start using "this" keyword, everything will become clear.

// * it allows the code in the strict way, we would not write code as ourself like..
// ? Example: 

// ? a = 10;
// ? console.log(a);

// * this will not run and throws an error, because we are use 'use strict' mode so we can't use the undefined keyword in the program
// * checks all the keywords etc,. (like compiler)

// ! Non strict - 'this'

let a = 10;
console.log(10);