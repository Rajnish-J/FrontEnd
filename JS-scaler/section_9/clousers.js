// ! lexical functions, the function defined inside the function will always have the access to its outer scope, even outside the functions we can access values 

// ? function test(){
//     let a = 2;

//     function test1(){
//         console.log(a);
//     }
//     return test1;
// }

// let fun = test();
// console.log(fun);

// ? fun();

// * example

function greet(){

    let name = 'steve';

    function display(){
        let age = 103;
        console.log('hi ' + name);

        function dispAge(){
            console.log('my age is: ' + age);
        }
        return dispAge;
    }
    return display;
}

let g = greet();

let g1 = g(); // * storing the first level display method in g1 varibale and then call the second level dispAge method

g1();