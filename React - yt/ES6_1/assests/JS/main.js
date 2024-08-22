// ! var => it supports both functional and block level code

// for(var i = 1; i<= 5; i++){
//     console.log(i);
// }

console.log(i); // * after the loop iteration 'i' value incremented

// ! let => if we use let that only allows in the functional block level code

for(let i = 1; i<= 5; i++){
    console.log(i);
}

console.log(i); // * gives undefined

// ! const => we cant change the values in the const data type, we can add the values (push method) like array, but for the added value we can't modify the values

// ! If you did not use Them, they would be assigned to the globot object.
// ! If you use var outside of a function, it belongs to the global scope.
// ! If you use var inside of a function, it belongs to that function.
// ! If you use var inside of a block, i.e. a for loop, the variable is stilt available outside of thot block.

