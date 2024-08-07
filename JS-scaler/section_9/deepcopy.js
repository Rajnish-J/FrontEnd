// ! Deep copy

const { json } = require("react-router-dom")

let firstPerson = {
    name : 'adam',
    age : 36,

    address : {
        city : 'chennai',
        country : 'India'
    }
}

let secondPerson = JSON.parse(JSON.stringify(firstPerson));

secondPerson.address.country = 'USA';
secondPerson.address.city = 'San fransico';

console.log(firstPerson);
console.log(secondPerson);