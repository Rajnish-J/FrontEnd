// ! 'this' in browser (Strict mode)

'use strict'

// !  (i) creata an this keyword in the  => returns window  object

// ? console.log(this); 
// * recieves an empty object

// ! (ii) create an this keyword in the log inside the function => undefined

/*
? function displayThis(){
    console.log(this);
    
}
? displayThis();
*/
// * it output's undefined..

// ! (iii)  inside the object, nested into the object's function now in this function we create an this in log => refers the objects in the particular object

/*
? let mydetails = {
    name : 'rajnish',
    age : 21,

    myfunc : function(){
        console.log(this);
        
    }
}
? mydetails.myfunc();
*/

/*
? { name: 'rajnish', age: 21, myfunc: [Function: myfunc] }
*/
//  * if we use the this keyword like this testcase it refers to the objects in the particular objects

// ! (iv)  inside the object, nested into the object's function and inside one function, now in this function we create an this in log => undefined

let mydetails = {
    name : 'rajnish',
    age : 21,

    myfunc : function(){
        function myfunc1(){
            console.log(this);
        }
        myfunc1()
    }
}
mydetails.myfunc();