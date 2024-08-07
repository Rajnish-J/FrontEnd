// ! double equal to ( == )
// * it checks the values and not check the type, for example it even checks ( 18 == '18'), eventhough its number and string it return true.

// ! triple equal to ( === )
// * it checks for both values and type.    

let a = 18;
let b = '18';

console.log(a == b); // * loose checking

console.log(a === b); // * strict checking
