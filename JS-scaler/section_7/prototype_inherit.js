// ! prototype object: every empty object or object contains prototyoe object contains all in-built defined methods or functions.

// let myobj = {}

// console.log(myobj);


// let person1 = {
//     name : 'adam',
//     age : 22
// }

// console.log(person1);

// * hasOwnProperty basically checks for the variable or object will existed in the object

// console.log(person1.hasOwnProperty('name')); // ? true
// console.log(person1.hasOwnProperty('gender')); // ? false

// ! creating a constructor function

// function person(name, age){
//     this.name = name;
//     this.age - age;
// }

// let person2 = new person('steve', 103);
// console.log(person2);

// ! creating a basic function for this prototype understanding

function person(name, age){
    this.name = name;
    this.age = age;

}

person.prototype.getNameAge = function(){
    console.log(`I am ${this.name} and my age is ${this.age}`);
    
}

let per1 = new person('adam', 36);
let per2 = new person('steve',103);

console.log(per1.getNameAge());
console.log(per2);

