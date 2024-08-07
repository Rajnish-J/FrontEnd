// ! imperative vs declrative

// ! Imperative:
// ? how to go about a problem
// ? approach structure logic

// ! declartive:
// ? what to acheive from the problem
// ? show or view only the how to solve the problem simply

// ! we will be given a number and we have to check that if the square of that number is even or odd

// ? imperative way of code

// const a = 5;
// const asquared = a*a;

// let isEven;

// if(asquared %2 == 0){
//     isEven = true;
// }
// else{
//     isEven = false;
// }

// console.log(isEven);

// ? declerative way of code

const checkforsq = (x)=> (x*x % 2 == 0 ? 'True' : 'False');

console.log(checkforsq(2));