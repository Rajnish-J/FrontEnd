// ! let type of variables

var a = 7;
var a = 45; // ! we can recreate an varibale with the same name with the differnt value

let v = 18;

// ! we cannot create let varible with the same name, in the compile itself its throw the error or warning
// let v = 10;

console.log(a);
console.log(v);

// ! disadvantage 2: scoping issue
// ! varibale declared with var keyword are not blocked scoped they are funtion scoped
console.log(v); // ! we are not allowed to use the local variable outside the block

function test(){
    let c = 18;
    console.log(c);
}

// ? console.log(c);
// ! we cannot use this outside the function

// ! we can reassign the value in the let variable

v = 17;
console.log(v);