// ! what is pure function

// ? A pure function is a function which: 
    // * give the same input always return the same output
    // * produces no side effect
    // * cause side effects through the external variable updation or re-assigning

// ! impure function
    
var a = 2;
function add(x){
    console.log(x+a);
    a++;
}

add(2);
add(2);
add(2);

// ! pure function
// * do not use any external factor(variables) in the code, that may affect the code
// * to make an function pure, we must don't use the external varibles (outside the function) to change the values in the function.

// function addpure(x,a){
//     console.log(x + a);
// }

// addpure(2,3);
// addpure(2,3);
// addpure(2,3);