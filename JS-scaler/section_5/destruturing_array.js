// ?  The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values
// ? from arrays, or properties from objects, into distinct variables.

let arr = [330, 331, 334, 343, 341];

// let a = arr[1];
// let b = arr[3];

// console.log(a);
// console.log(b);

let [a, b, c, d, e] = arr;

console.log(c)