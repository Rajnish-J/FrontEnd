// ! calculator in main.js

function add(a,b) {
    console.log(a+b);
};

function sub(a,b) {
    console.log(a-b);
};

function mul(a,b) {
    console.log(a*b);
};

function div(a,b) {
    console.log(a/b);
};

module.export = {
    addition : add,
    subtraction : sub, 
    multiplication : mul,
    division : div
};