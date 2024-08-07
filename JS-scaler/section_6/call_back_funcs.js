// ! What is a Callback Function?

// ? In JavaScript, a callback function is a function that is passed into another function as an argument. This function can then be invoked at a later stage of time.
// ? Since, in JavaScript, functions are objects, function can be passed as arguments.

// function firstName(firstname, cb){
//     console.log(firstname);
//     cb('man')
// }

// function lastName(lastname){
//     console.log(lastname);
// }

// firstName('Iron', lastName);

// ! example for call back function

const isEven = (n)=> {
    return n%2==0;
}

let printResult = (evenFn, num) => {
    const isnumEven = evenFn(num);

    console.log('the number', num,  'is an Even number', isnumEven);
}

printResult(isEven, 16);