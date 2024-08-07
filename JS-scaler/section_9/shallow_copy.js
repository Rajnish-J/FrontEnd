// ! shallow copy

let firstPerson = {
    name : 'adam',
    age : 36,

    address : {
        city : 'chennai',
        country : 'India'
    }
}

let secondperson = {...firstPerson}; // * spread copy (operator => ...)

secondperson.name = 'steve';

secondperson.address.city = 'delhi';
// * if use shallow method: it change the first level changes in the code, but for the next level changes it will change for all the objects to rectify that we have to put nested spread operator,
// * what if I have more that 5 nested objects inside the object
// * so overcome this we have deep - copy 

console.log(firstPerson);
console.log(secondperson);