//! What are Functions?
//! A function is a block of code that performs a specific task.
//! A JavaScript function is executed when " omething" invokes it (calls it)
//! Functions are one of the fundamental building blocks in JavaScript.
//! A function in JavaScript is similar to a procedure—a set of statements
//! that performs a task or calculates a value, but for a procedure to
//! qualify as a function, it should take some input and return an output
//! where there is some obvious relationship between the input and the
//! output. To use a function, you must define it somewhere in the scope from which u call it

function greet(){
    console.log('Hello I am JS function');
};

greet();

function add(a,b){
    console.log(a+b);
}

add(101,5);