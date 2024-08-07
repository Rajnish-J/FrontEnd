let a = 18;
console.log(typeof a);

let b = 'virat';
console.log(typeof b);

let c = true;
console.log(typeof c);

let obj = {
    name : 'steve',
    age : 103
}
console.log(typeof obj);

// * In JS array is also the object
let arr = [18,7,45];
console.log(typeof arr); // * object 
// * but we need or retrun the type as object array

let checkArray = Array.isArray(arr);
// * it returns true if the passed parameter is array, else retuns false