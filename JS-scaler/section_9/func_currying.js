// ! function currying : 
// * To transform the fucntion that will take multiple arguments into single or smaller arguments into single functions

let sumCurried = function(x){
    return function(y){
        console.log(x+y);
    }
}

let twoNumbers = sumCurried(2);
twoNumbers(3);