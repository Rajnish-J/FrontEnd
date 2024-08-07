// ! three methods

// ? call method
// ? apply method
// ? bind method

let avenger = {
    fname : 'steve',
    lname : 'rogers',
    age : 102,
    
    printdetails : function(){
        console.log(`hi I am ${this.fname} ${this.lname} and I am ${this.age} years old`);
    }
}

let avenger1 = {
    fname : 'tony',
    lname : 'stark',
    age : 41,
    
    printdetails : function(){
        console.log(`hi I am ${this.fname} ${this.lname} and I am ${this.age} years old`);
    }
}

// * call method: 

avenger.printdetails();

avenger1.printdetails();