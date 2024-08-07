// ! 'this' in node (non-strict mode)

// !  (i) creata an this keyword in the  => returns empty object

// ? console.log(this); 
// * recieves an empty object

// ! (ii) create an this keyword in the log inside the function => returns global object

/*
? function displayThis(){
    console.log(this);
    
}
? displayThis();
*/

/*
? <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Getter/Setter],
?  crypto: [Getter]
}
*/
// *creates an global functions object... detail will be in the asynchronous module, for time being these all are the global attributes, we will use these methods in our JS code

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

// ! (iv)  inside the object, nested into the object's function and inside one function, now in this function we create an this in log => global object

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

/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Getter/Setter],
  crypto: [Getter]
}
*/