// ! setTimeOut and setInterval methods

// ! setTimeOut: 
// * it is a call back function and this function having two parameters they are call back function and milliseconds
// * it will run the fucntion and execute the set of codes after the time we done
// * it is an asynchronous function

function check(){
    console.log('hi this method will run after the delay');
}

setTimeout(check, 5000);

// ! setInterval:
// * it is call back function and this function having two parameters they are call back function and milliseconds
// * it will run again and again after the set of code executed with in the time interval
// * it runs infinte time and it is an asynchronous function

function hello(){
    console.log("hello");
}

// ? if we not stop the setInterval method, that will run infinte time, so we have a clearInterval method to stop that

let timer = setInterval(hello, 1500);

setTimeout(function(){
    clearInterval(timer)
},3000);