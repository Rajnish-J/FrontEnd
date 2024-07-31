// ! problems of var datatypes


// ! disadvantage 1: redeclaration of variable
var a = 21;

var a = 18; // ! redeclaration of variable with same variable address or keyword (is that is not poosible in another programming languages)
// ? this could not allow to use same varible to update the value

console.log(a);

if(a === 18){
    var b = 7;
    console.log(b);
}

// ! disadvantage 2: scoping issue
// ! varibale declared with var keyword are not blocked scoped they are funtion scoped
console.log(b); // ! we are not allowed to use the local variable outside the block

function test(){
    var c = 18;
    console.log(c);
}

console.log(c); 
// ! we can use this outside the function
