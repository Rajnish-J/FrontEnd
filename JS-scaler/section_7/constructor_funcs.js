// ! creating car constructor

function car(_name, _company, _color) {

    // * 
    this.name = _name;
    this.company = _company;
    this.color = _color; 

    this.drive = function(){
        console.log(`I am driving ${this.name} and its color is ${this.color}`);
        
    }
}

let car1 = new car('X4','BMW', 'Red');
// console.log(car1);

let car2 = new car('X3','BMW', 'Grey');
// console.log(car2);

car1.drive();