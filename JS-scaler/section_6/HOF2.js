// ! find

// * works as an filter, only returns the first element

//  ? Example

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let res = transactions.find(function(n){
    return n < 0;
})

console.log('Result: '+ res);

// ! findIndex

let res1 = transactions.findIndex(function(n){
    return n < 0;
})

console.log('Index: ' +res1);
// * we can use this variable(res1) to update the position in the array or objects

// ! some

// * returns the boolean value, based on particular condition
// * it will return true if even 1 element satifies the condition  

const transactions_some = [1000, 3000, 4000, 2000, -898, 3800, 4500];

let res2 = transactions_some.some(function(n){
    return n < 0;
})

console.log('some: ' + res2);

// ! every

// * returns the boolean value, based on particular condition
// * it will return true if all the element satisfies the condition

let res3 = transactions_some.every(function(n){
    return n < 0;
})

console.log('every: ' + res3);