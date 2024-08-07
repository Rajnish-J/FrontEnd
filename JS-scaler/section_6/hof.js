// ! what is called higher order functions

// ? higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them. In simple words, 
// ? A higher order function is a function  that receives a function as an argument or returns the function as output

// * example: 

// let arr = [1,2,3,4,5];

// let sqarr = [];

// for(let i = 0; i<arr.length; i++){
//     sqarr.push(arr[i] * arr[i]);
// }

// console.log(sqarr);

// ! map

// * using map function or method
// * map will lopp through every element of your array and will perform specific operations that you have to prove
// * map method will always return you a new array with your results.

const num = [1,2,3,4,5]

const sqnum = num.map(function(n){
    return n*n;
})

console.log(sqnum);

// ! Exercise: 

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let dollar = 80;

const money = transactions.map(function(n){
    return (n / 80).toFixed(0);
})

console.log(money);

// ! for-each

// * all the functions is same but in for-each loop, that not return an new array, so we will only allowed to console.log()

const money1 = transactions.forEach(function(n){
    console.log((n / 80).toFixed(0));
})